import React, { useState, useContext, createContext } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

export function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);

  const getAuthHeaders = () => {
    if (!authToken) return null;
    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const CLIENT_URL =
    process.env.NODE_ENV === "production"
      ? "https://demo1-talent-api.herokuapp.com/graphql"
      : "http://localhost:3001/graphql";

  function createApolloClient() {
    const link = new HttpLink({
      uri: CLIENT_URL,
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  }

  const signOut = () => {
    setAuthToken(null);
  };

  const signIn = async ({ email, password }) => {
    const client = createApolloClient();
    const login = gql`
      query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `;
    const result = await client.query({
      query: login,
      variables: { email, password },
    });

    if (result?.data?.login?.token) {
      setAuthToken(result.data.login.token);
    }
    return result;
  };

  const signUp = async ({ email, password }) => {
    const client = createApolloClient();
    const CreateUser = gql`
      mutation createUser($email: String!, $password: String!) {
        createUser(userInput: { email: $email, password: $password }) {
          email
          password
        }
      }
    `;

    return await client.mutate({
      mutation: CreateUser,
      variables: { email, password },
    });
  };

  const updateUserProfile = async ({
    email,
    password,
    photo,
    name,
    bio,
    phone,
  }) => {
    const client = createApolloClient();
    const UpdateUser = gql`
      mutation createUser($email: String, $password: String, $photo: String, $name: String, $bio: String, $phone: String) {
        createUser(userInput: { email: $email, password: $password, photo: $photo, name $name, bio: $bio, phone: $phone}) {
          email,
          password
          phone
          name
          bio
          phone
        }
      }
    `;

    return await client.mutate({
      mutation: UpdateUser,
      variables: { email, password, photo, name, bio, phone },
    });
  };

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const userProfile = async () => {
    const client = createApolloClient();
    const me = gql`
      query me {
        me {
          name
          email
          bio
          password
          lastSignInDate
        }
      }
    `;
    const result = await client.query({
      query: me,
      variables: {},
    });

    console.log(result);
    return result;
  };

  return {
    createApolloClient,
    signIn,
    signOut,
    isSignedIn,
    signUp,
    userProfile,
    updateUserProfile,
  };
}

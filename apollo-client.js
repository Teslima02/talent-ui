import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://demo1-talent-api.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
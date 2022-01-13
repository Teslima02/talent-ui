import { useState, useEffect } from 'react';
import Link from "next/link";
import { useProvideAuth } from "../lib/auth.js";

export default function Profile() {

  const { userProfile } = useProvideAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-24 -mb-12 justify-items-end">
        <div className="grid justify-items-center">
          <h1>Personal info</h1>
          <div>
            <p>Basic info, like your name and photo</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-8 my-20 border-2 border-gray-400 bg-white sm:p-10 sm:pb-6">
          <div className="my-4 mx-0">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr key="1">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-2xl font-normal text-gray-900">
                      Profile
                    </div>
                    <p className="text-sm font-normal text-gray-400">
                      Some info may be visible to other people
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href="/edit">
                      <button className="text-gray-500 hover:text-gray-300 border-solid border-2 border-gray-300 px-8 py-2 rounded-xl ml-4 capitalize">
                        edit
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr key="2">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">PHOTO</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr key="3">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">NAME</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr key="4">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">BIO</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr key="5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">PHONE</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr key="6">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">EMAIL</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr key="7">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">PASSWORD</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  console.log(context, 'context')

  // if (!req.headers.cookie) {
  //   res.writeHead(302, {
  //     // or 301
  //     Location: "/"
  //   });
  //   res.end();
  // }

  return {
    props: {}
  };
}
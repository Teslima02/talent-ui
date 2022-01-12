import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Register() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="px-6 py-8 my-20 border-2 border-gray-400 bg-white sm:p-10 sm:pb-6">
          <div className="my-9 mx-4">
            <div className="font-semibold mb-3">
              <h3>Join thousands of learners from around the world </h3>
            </div>
            <div className="font-normal mb-8">
              <p>
                Master web development by making real-life projects. There are
                multiple paths for you to choose
              </p>
            </div>
            <div className="mt-4 mb-4 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-indigo-500 focus:border-indigo-500 block h-8 w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="mt-4 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="focus:ring-indigo-500 focus:border-indigo-500 block h-8 w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Password"
              />
            </div>
            <div className="mt-4 relative rounded-md shadow-sm">
              <button
                type="button"
                className="w-full justify-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500"
              >
                Start coding now
              </button>
            </div>
            <div className="mt-8 text-center text-gray-500">
              <p>or continue with these social profile</p>
            </div>
            <div className="mt-4 flex flex-row">
              <div className="ml-24">
                <FcGoogle className=" text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-8">
                <FcGoogle className=" text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-8">
                <FcGoogle className=" text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-8">
                <FcGoogle className=" text-gray-400" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
              <p>
                Already a member? <span className="text-blue-300"><Link href="/login">Login</Link></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Edit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="my-28 -mb-11 cursor-pointer">
          <Link href="/profile">
            <div className="text-blue-400">
              <MdKeyboardArrowLeft
                className="h-5 w-5 text-blue-400 inline-flex"
                aria-hidden="true"
              />
              <span className="">Back</span>
            </div>
          </Link>
        </div>
        <div className="px-6 py-8 my-20 border-2 border-gray-400 bg-white sm:p-10 sm:pb-6">
          <div className="my-4 mx-0 max-w-lg">
            <div>
              <div>
                <h3>Change Info</h3>
              </div>
              <div>
                <p>Changes will be reflected to every services</p>
              </div>
            </div>
            <div>
              <div>CHANGE PHOTO</div>
            </div>
            {/* <form method="post" onSubmit={onSubmit}> */}
            <form method="post">
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block h-12 px-4 w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-4 w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={""}
                    placeholder="Enter your bio"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block h-12 px-4 w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block h-12 px-4 w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block h-12 px-4 w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="mt-4 relative rounded-md shadow-sm">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

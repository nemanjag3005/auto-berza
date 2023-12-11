import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-8xl mx-auto flex flex-col px-3 sm:border-b sm:px-0">
        <div className=" flex items-center justify-between py-3 sm:py-2.5">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">AutoBerza</h1>
            <div className="ml-10 flex items-center space-x-4 text-sm font-medium">
              <button className="md-lg:block hidden text-gray-600 dark:text-gray-200">
                Aukcije
              </button>
              <button className="bg-primary hidden rounded-full px-3 py-2 text-gray-900 lg:block">
                Prodaj auto
              </button>
              <Link href="/o-nama">
                <span className="lg-xl:block hidden text-gray-600 dark:text-gray-200">
                  Šta je AutoBerza?
                </span>
              </Link>
              <button className=" xl-2xl:block hidden text-gray-600 dark:text-gray-200">
                Dnevni Mejlovi
              </button>
            </div>
          </div>
          <div className="hidden items-center space-x-12 sm:flex">
            <form className="">
              <fieldset className="flex w-[416px] items-center rounded-md bg-gray-200 px-8 py-3 text-[0.9375rem] text-gray-500 hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  className="ml-4 w-full bg-transparent ring-0 placeholder:text-gray-500"
                  placeholder="Pretražite automobile (npr. BMW, Audi, Fiat)"
                />
              </fieldset>
            </form>
            <button className="bg-primary rounded-md px-7 py-2.5 font-medium hover:bg-green-500">
              Prijavi se
            </button>
          </div>
          <div className="flex items-center space-x-4 sm:hidden">
            <button className="bg-primary whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-gray-900">
              Prijavi se
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pb-2 sm:hidden">
          <button className="flex items-center text-xl font-bold">
            Aukcije{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="ml-1 mt-1 h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="rounded-md bg-yellow-300 px-2 py-1 text-sm font-medium">
            Prodaj Auto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

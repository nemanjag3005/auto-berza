"use client";
import Link from "next/link";
import React, { useState } from "react";
import Newsletter from "../Dialogs/Newsletter";
import SignUp from "../Dialogs/SignUp";
import type { Session } from "next-auth";
import Sidebar from "./Sidebar";

const Navbar = ({ session }: { session: Session | null }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex max-w-8xl flex-col px-3 sm:border-b sm:px-0">
        <div
          onMouseLeave={() => setIsDialogVisible(false)}
          className=" flex items-center justify-between py-3 sm:py-2.5"
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">AutoBerza</h1>
            <div className="ml-10 flex items-center space-x-4 text-sm font-medium">
              <div
                onMouseEnter={() => setIsDialogVisible(true)}
                className="relative"
              >
                <button className="hidden text-gray-600 hover:text-gray-900 dark:text-gray-200 md-lg:block">
                  Aukcije
                </button>
                {isDialogVisible && (
                  <div className="absolute left-0 mt-4 flex flex-col space-y-6 whitespace-nowrap rounded-md bg-white px-6 py-6 text-sm text-gray-600 shadow-lg">
                    <Link href="/">
                      <span className="hover:text-gray-900">
                        Trenutne licitacije
                      </span>
                    </Link>
                    <Link href="/prosle-licitacije">
                      <span className="hover:text-gray-900">
                        Prošle licitacije
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <button className="hidden rounded-full bg-primary px-3 py-2 text-gray-900 hover:bg-green-500 lg:block">
                Prodaj auto
              </button>
              <Link href="/o-nama">
                <span className="hidden text-gray-600 hover:text-gray-900 dark:text-gray-200 lg-xl:block">
                  Šta je AutoBerza?
                </span>
              </Link>
              <button
                onClick={() => setNewsletterOpen(true)}
                className=" hidden text-gray-600 hover:text-gray-900 dark:text-gray-200 xl-2xl:block"
              >
                Dnevni Mejlovi
              </button>
            </div>
          </div>
          <div className="hidden items-center space-x-12 sm:flex">
            <form className="">
              <fieldset className="flex w-[416px] items-center rounded-md bg-gray-200 px-5 py-3 text-[0.9375rem] text-gray-500 hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
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
            {!session?.user ? (
              <button
                onClick={() => setSignupOpen(true)}
                className="rounded-md bg-primary px-7 py-2.5 font-medium hover:bg-green-500"
              >
                Prijavi se
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button className="rounded-full p-2 hover:bg-gray-200">
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
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <button className="group flex items-center">
                  <div className="rounded-full p-2 group-hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-7 w-7 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="-ml-0.5 h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4 sm:hidden">
            {!session?.user && (
              <button className="whitespace-nowrap rounded-md bg-primary px-3 py-1 text-sm font-medium text-gray-900">
                Prijavi se
              </button>
            )}
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
            {session?.user && (
              <button className="rounded-full">
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
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            )}
            <button onClick={() => setSidebarOpen(true)}>
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
      {sidebarOpen && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
      <Newsletter open={newsletterOpen} setOpen={setNewsletterOpen} />
      <SignUp open={signupOpen} setOpen={setSignupOpen} />
    </div>
  );
};

export default Navbar;

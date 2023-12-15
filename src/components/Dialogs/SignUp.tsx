"use client";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { signIn } from "next-auth/react";

const SignUp = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [panel, setPanel] = useState(0);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[26rem] sm:p-8">
                {panel == 1 ? (
                  <div className="flex flex-col">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-xl font-bold leading-6 text-gray-900"
                      >
                        Uloguj Se
                      </Dialog.Title>
                      <p className="mt-4 text-center text-sm">
                        Treba ti nalog?{" "}
                        <button onClick={() => setPanel(0)}>
                          <span className="text-green-600 hover:underline">
                            Prijavi se
                          </span>
                        </button>
                      </p>
                      <div className="my-6">
                        <button
                          onClick={() => signIn("google")}
                          className="flex w-full items-center justify-center rounded border py-2 text-sm font-medium text-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            className="mr-2 h-6 w-6"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                          </svg>
                          Nastavi sa Google
                        </button>
                      </div>
                      <div className="flex w-full items-center">
                        <div className="h-[1px] flex-grow bg-gray-300"></div>
                        <span className="mx-2 text-sm text-gray-300">ili</span>
                        <div className="h-[1px] flex-grow bg-gray-300"></div>
                      </div>
                      <div className="mt-8">
                        <p className="mb-2 text-sm">Email adresa</p>
                        <input
                          type="email"
                          className="mb-3 w-full rounded-md border border-gray-300 bg-white px-3 py-1 placeholder:text-gray-500"
                        />
                        <p className="mb-2 text-sm">Lozinka</p>
                        <input
                          type="password"
                          className="mb-6 w-full rounded-md border border-gray-300 bg-white px-3 py-1 placeholder:text-gray-500"
                        />
                        <button className="mb-4 w-full rounded-md bg-primary px-4 py-1.5 font-medium text-gray-900 hover:bg-green-500">
                          Uloguj se
                        </button>
                        <button onClick={() => setPanel(2)}>
                          <p className="text-sm text-green-600 hover:text-green-700 hover:underline">
                            Zaboravio/la lozinku?
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : panel == 0 ? (
                  <div className="flex flex-col">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-xl font-bold leading-6 text-gray-900"
                      >
                        Prijavi Se
                      </Dialog.Title>
                      <p className="mt-4 text-center text-sm">
                        Već imaš nalog?{" "}
                        <button onClick={() => setPanel(1)}>
                          <span className="text-green-600 hover:underline">
                            Uloguj se
                          </span>
                        </button>
                      </p>
                      <div className="my-6">
                        <button
                          onClick={() => signIn("google")}
                          className="flex w-full items-center justify-center rounded border py-2 text-sm font-medium text-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            className="mr-2 h-6 w-6"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                          </svg>
                          Nastavi sa Google
                        </button>
                      </div>
                      <div className="flex w-full items-center">
                        <div className="h-[1px] flex-grow bg-gray-300"></div>
                        <span className="mx-2 text-sm text-gray-300">ili</span>
                        <div className="h-[1px] flex-grow bg-gray-300"></div>
                      </div>
                      <div className="mt-8">
                        <p className="mb-2 text-sm">Email adresa</p>
                        <input
                          type="email"
                          className="mb-3 w-full rounded-md border border-gray-300 bg-white px-3 py-1 placeholder:text-gray-500"
                        />
                        <button className="w-full rounded-md bg-primary px-4 py-1.5 font-medium text-gray-900">
                          Prijavi Se
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-xl font-bold leading-6 text-gray-900"
                      >
                        Zaboravljena Lozinka
                      </Dialog.Title>

                      <button
                        className="mt-4 w-full text-center text-sm text-green-600 hover:text-green-700 hover:underline"
                        onClick={() => setPanel(1)}
                      >
                        Nazad na login
                      </button>

                      <div className="mt-8">
                        <p className="mb-2 text-sm">Email adresa</p>
                        <input
                          type="email"
                          className="mb-3 w-full rounded-md border border-gray-300 bg-white px-3 py-1 placeholder:text-gray-500"
                        />
                        <button className="mt-4 rounded-md bg-primary px-8 py-2.5 text-sm font-medium text-gray-900">
                          Pošalji
                        </button>
                        <Link target="_blank" href="/sta-je/?section=sign-in">
                          <span className="mt-4 block text-sm text-green-600 hover:text-green-700 hover:underline">
                            Potrebna pomoć?
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute right-6 top-6 text-gray-400 hover:text-gray-900">
                  <button onClick={() => setOpen(false)}>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignUp;

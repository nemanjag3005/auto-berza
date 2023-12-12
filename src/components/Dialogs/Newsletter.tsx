"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const Newsletter = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-8">
                <div className="flex flex-col">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-center text-xl font-semibold leading-6 text-gray-900"
                    >
                      Dobijajte Dnevne Mejlove
                    </Dialog.Title>
                    <div className="mt-6">
                      <p className="text-sm text-gray-700">
                        Dobijajte najnovije aukcije i informacije o tržištu
                        direktno u vašem email sandučetu, kao i ekskluzivan
                        sadržaj pre svih ostalih.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center space-x-2">
                      <input
                        type="email"
                        placeholder="Email adresa"
                        className="rounded-md border border-gray-300 bg-white px-3 py-1 placeholder:text-gray-500"
                      />
                      <button className="rounded-md bg-primary px-4 py-1.5 font-medium text-gray-900">
                        Prijavi Se
                      </button>
                    </div>
                  </div>
                </div>

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

export default Newsletter;

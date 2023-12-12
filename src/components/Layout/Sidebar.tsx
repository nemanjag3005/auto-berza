import Link from "next/link";
import React from "react";

const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 left-0 top-0 z-50 h-screen w-full overflow-hidden bg-gray-50 p-4">
      <div className="relative flex items-center justify-between">
        <div className="relative flex items-center">
          <h1 className="ml-4 text-2xl font-bold text-gray-800">Meni</h1>
          <div className="t-0 absolute left-0 h-3/5 w-2 rounded-r bg-primary "></div>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2"
        >
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
      <div className="mt-8 flex w-full flex-col space-y-4 font-semibold">
        <div className="flex items-center justify-between">
          <Link href="/nalog">
            <span>Nalog</span>
          </Link>
          <Link href="/nalog">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>
        <Link href="/pratim">
          <span>Pratim</span>
        </Link>
        <Link href="/">
          <span>Aukcije</span>
        </Link>
        <Link href="/pratim">
          <span>Pratim</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

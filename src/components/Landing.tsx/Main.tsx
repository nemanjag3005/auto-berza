"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";
import Countdown from "~/helpers/Countdown";

const Main = ({ listings }: { listings: object[] }) => {
  return (
    <div className="w-full  text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex max-w-8xl py-3 ">
        <div>
          <div className=" w-full xl:flex xl:items-center xl:justify-between">
            <div className="block 3xl:flex 3xl:items-center">
              <h1 className="mb-3 hidden px-3 text-left text-2xl font-bold sm:block sm:px-0 3xl:mb-0 3xl:mr-3">
                Aukcije
              </h1>
              <div className="grid w-full grid-cols-3 gap-2 px-3 font-medium sm:flex sm:items-center sm:px-0 sm:text-sm sm:font-normal">
                <button className="flex items-center justify-between rounded-md border px-2 py-2 ">
                  Godište
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
                <button className="flex items-center justify-between rounded-md border px-2 py-2 ">
                  Pogon
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
                <button className="flex items-center justify-between rounded-md border px-2 py-2 ">
                  Tip
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
              </div>
            </div>
            <div className="xl:ml-30 mt-1 flex max-w-[100vw] items-center overflow-x-auto whitespace-nowrap text-sm text-gray-500 sm:mt-3  xl:mt-0">
              <button className="py-3.5 pl-3 pr-2 font-medium hover:text-gray-900">
                Uskoro gotovo
              </button>
              <button className="px-2 py-3.5 font-medium hover:text-gray-900">
                Skoro oglašeno
              </button>
              <button className="px-2 py-3.5 font-medium hover:text-gray-900">
                Bez rezerve
              </button>
              <button className="px-2 py-3.5 font-medium hover:text-gray-900">
                Najniža kilometraža
              </button>
              <button className="px-2 py-3.5 font-medium hover:text-gray-900">
                Najbliže meni
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 sm:py-3 lg-xl:grid-cols-3">
            {listings.map((listing) => (
              <div key={listing.id} className="group">
                <Link href={`/aukcije/${listing.id}`}>
                  <div className="relative h-56 w-full cursor-pointer sm:rounded-sm">
                    {listing.images[0].url && (
                      <Image
                        src={listing.images[0].url}
                        fill
                        className="object-cover sm:rounded-sm"
                        alt="Oglas"
                      />
                    )}

                    <div className="absolute bottom-2 left-2 flex items-center rounded-md bg-black/70 p-1 text-sm text-gray-100">
                      <div className="mr-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-3.5 w-3.5 stroke-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <Countdown endTime={listing.endTime} />
                      </div>
                      <div className=" flex items-center">
                        <p className="text-gray-300">Bid</p>
                        <p className="ml-1 font-medium">
                          €{listing.currentBid.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="relative py-4 pl-4 pr-12 sm:pl-0 sm:pr-8">
                  <div className="absolute right-5 top-3 cursor-pointer sm:right-0 sm:hidden sm:group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.7}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <Link href={`/aukcije/${listing.id}`}>
                    <h3 className="cursor-pointer font-bold hover:underline">
                      {listing.title}
                    </h3>
                  </Link>
                  <p className="text-sm leading-5">{listing.highlights}</p>
                  <p className="text-sm text-gray-500">{listing.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden pl-12 pt-16 sm:flex sm:w-2/5 sm:flex-col">
          <div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                width="100%"
                height="100%"
                light={true}
                className="absolute left-0 top-0"
                url="https://www.youtube.com/watch?v=wuO4_P_8p-Q"
              />
            </div>
            <h3 className="mt-4 font-semibold leading-tight ">
              AutoBerza je najbolje tržište za entuzijaste modernih automobila.
            </h3>
            <Link href="/o-nama">
              <h3 className="mt-4 text-sm font-semibold underline hover:text-green-700">
                Više o nama.
              </h3>
            </Link>
          </div>
          <div className="mt-24">
            <h3 className="text-lg font-semibold">Novi Oglasi</h3>
            <div className="flex-col">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

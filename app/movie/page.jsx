import React from "react";
import MovieCard from "@components/MovieCard";

const Team = () => {
  return (
    <>
      <div
        id="controls-carousel"
        class="relative w-full p-8"
        data-carousel="static"
      >
        <div class="relative h-56 md:h-96 overflow-hidden rounded-lg">
          <div
            class="absolute top-0 left-0 w-full h-full duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/assets/img/welcome.jpeg"
              class="absolute block w-full h-full object-cover"
              alt="..."
            />
          </div>
          <div
            class="absolute top-0 left-full w-full h-full duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="public/assets/img/welcome.jpeg"
              class="absolute block w-full h-full object-cover"
              alt="..."
            />
          </div>
          <div
            class="absolute top-0 left-full w-full h-full duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/assets/img/welcome.jpeg"
              class="absolute block w-full h-full object-cover"
              alt="..."
            />
          </div>
          <div
            class="absolute top-0 left-full w-full h-full duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/assets/img/welcome.jpeg"
              class="absolute block w-full h-full object-cover"
              alt="..."
            />
          </div>
          <div
            class="absolute top-0 left-full w-full h-full duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/assets/img/download.jpeg"
              class="absolute block w-full h-full object-cover"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          class="absolute top-0 start-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="m-8">
        <p className="text-2xl font-medium mb-4">Popular Movies</p>
        <div className="flex overflow-x-auto">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex-none w-96 mr-4">
              <MovieCard />
            </div>
          ))}
        </div>
      </div>
      <div className="m-8">
        <p className="text-2xl font-medium mb-4">Upcoming Movies</p>
        <div className="flex overflow-x-auto">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex-none w-96 mr-4">
              <MovieCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;

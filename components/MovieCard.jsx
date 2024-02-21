import React from "react";

const MovieCard = () => {
  return (
    <>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
            <div class="h-48 overflow-visible w-1/2">
              <img
                class="rounded-3xl shadow-lg"
                src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col w-1/2 space-y-4">
              <div class="flex justify-between items-start">
                <h2 class="text-3xl font-bold">Sweet Tooth: El niño ciervo</h2>
                <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
              </div>
              <div>
                <div class="text-sm text-gray-400">Series</div>
                <div class="text-lg text-gray-800">2019</div>
              </div>
              <p class=" text-gray-400 max-h-40 overflow-y-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="flex text-2xl font-bold text-a">$83.90</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

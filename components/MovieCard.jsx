import Link from "next/link";
import React from "react";


const MovieCard = ({ movie }) => {



  return (
    <div class="w-full h-[490px] flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="p-4 h-56 rounded-t-lg object-cover w-full"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5 flex-col h-full relative">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {movie.title.length > 34
              ? `${movie.title.substring(0, 34)}...`
              : movie.title}
          </h5>
        </a>
        <p className="text-white text-left py-3">
          {movie.overview.length > 150
            ? `${movie.overview.substring(0, 150)}...`
            : movie.overview}

          <Link
            href= {`/movie/moviesdetails/${movie.id}`}
            className="text-orange-500 text-md font-medium"
          >
            See More
          </Link>
        </p>{" "}
        <div className="">
          <div className="absolute bottom-10">
            <span class="mb-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {movie.vote_average}
            </span>
            <div class="flex items-center gap-4">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                Rs {movie.vote_average * 100 + 79}
              </span>

              <Link
                href={`/movie/booknow/${movie.id}`}
                class="text-white bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

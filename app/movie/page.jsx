'use client'
import {useEffect, useState } from "react";
import MovieCard from "@components/MovieCard";

const Team = () => {

  const [movies, setMovies] = useState([])
  
const fetchMovie = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjdlNWM1NzIxYmQ2ZGJiOGVhYTlmYjU5YTQ3NzZjYSIsInN1YiI6IjY2MTAyYWJkNDk3NTYwMDE0YTRlMTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i2AWamC0ADzdN9GZ5LYma6pDTnKyQ6CzcDaH5BZl9g'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => {
      setMovies(response.results)
    
    })
    .catch(err => console.error(err));
  }

 // run fetch movie once using useEffect
 useEffect(() => {
  fetchMovie();
}
, []);


  useEffect(() => {
    console.log(movies);
  }, [movies]);

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
          {
            // map only from 11th index to 20th index

            movies.slice(0,10).map((movie, index) => (
              <div key={index} className="flex-none w-96 mr-4">
                <MovieCard movie={movie} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="m-8">
        <p className="text-2xl font-medium mb-4">Upcoming Movies</p>
        <div className="flex overflow-x-auto">

          {movies.slice(10,20).map((movie, index) => (
            <div key={index} className="flex-none w-96 mr-4">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Movie = () => {
  const [movies, setMovies] = useState([])
  
const fetchMovie = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjdlNWM1NzIxYmQ2ZGJiOGVhYTlmYjU5YTQ3NzZjYSIsInN1YiI6IjY2MTAyYWJkNDk3NTYwMDE0YTRlMTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i2AWamC0ADzdN9GZ5LYma6pDTnKyQ6CzcDaH5BZl9g'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => {
      setMovies(response.results)
    
    })
    .catch(err => console.error(err));
  }

 // run fetch movie once using useEffect
 useEffect(() => {
  fetchMovie();
}
, []);


  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="h-full ">
      <h1>
        {movies.map((movie) => (
          
          <div className="p-2 bg-gray">

          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title} />

             <h1>{movie.overview}</h1>
          </div>
          </div>
        ))}
      </h1>
    </div>
  );
}

export default Team;

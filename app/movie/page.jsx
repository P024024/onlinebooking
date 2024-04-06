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
      {/* image weloce.jpg covers entire width and has 'Book your favourite movie here' */}
      <div className="relative h-[400px]">
        <img
        // blur this image

          src="assets/img/welcome.jpeg"
          alt="welcome"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">Book your favourite movies here</h1>
        </div>
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

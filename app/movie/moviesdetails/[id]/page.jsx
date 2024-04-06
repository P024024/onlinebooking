'use client'
import {useState, useEffect} from "react";
import {useRouter} from 'next/navigation'

const MovieDetailsPage = ({params}) => {
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState();

  const fetchMovieDetails = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjdlNWM1NzIxYmQ2ZGJiOGVhYTlmYjU5YTQ3NzZjYSIsInN1YiI6IjY2MTAyYWJkNDk3NTYwMDE0YTRlMTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i2AWamC0ADzdN9GZ5LYma6pDTnKyQ6CzcDaH5BZl9g'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        setMovieDetails(response)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    setMovieDetails(movieDetails);
  },[movieDetails]);

  return (
    <>
      <div className="relative">
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
 className="h-[420px] w-full object-cover" />
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
          class="h-[300px] w-[250px] rounded-2xl absolute  top-60 left-20"
        />
        <div class="flex flex-col md:flex-row mx-auto rounded-xl w-[90%]">
          <div class="flex flex-col absolute  top-60 left-[350px]">
            <div class="p-4 ">
              <p className="text-orange-500 text-xl font-bold">{movieDetails?.release_date}</p>
              <h2 className="text-orange-500 text-3xl font-semibold">
                {movieDetails?.title}
              </h2>
              <span className="text-orange-500">{movieDetails?.genres?.map((genre, index) => <span key={index}>{genre.name} </span>)}</span>
              <div class="flex text-orange-500 gap-[1vw]">
                <div class="flex flex-col">
                  <div className="text-xl font-semibold">CRITICS</div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-10 h-10"
                      stroke="white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.742 2.755A2.25 2.25 0 0 1 4.424 2h7.152a2.25 2.25 0 0 1 1.682.755l1.174 1.32c.366.412.568.944.568 1.495v.68a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 1 6.25v-.68c0-.55.202-1.083.568-1.495l1.174-1.32Zm1.682.745a.75.75 0 0 0-.561.252L2.753 5h2.212a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61A1 1 0 0 1 11.035 5h2.211l-1.109-1.248a.75.75 0 0 0-.56-.252H4.423Z"
                        clip-rule="evenodd"
                      />
                      <path d="M1 10.75a.75.75 0 0 1 .75-.75h3.215a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61a1 1 0 0 1 .832-.445h3.215a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 1 12.75 14h-9.5A2.25 2.25 0 0 1 1 11.75v-1Z" />
                    </svg>
                    <div>86%</div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div className="text-xl font-semibold">AUDIENCES</div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-10 h-10"
                      stroke="white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.742 2.755A2.25 2.25 0 0 1 4.424 2h7.152a2.25 2.25 0 0 1 1.682.755l1.174 1.32c.366.412.568.944.568 1.495v.68a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 1 6.25v-.68c0-.55.202-1.083.568-1.495l1.174-1.32Zm1.682.745a.75.75 0 0 0-.561.252L2.753 5h2.212a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61A1 1 0 0 1 11.035 5h2.211l-1.109-1.248a.75.75 0 0 0-.56-.252H4.423Z"
                        clip-rule="evenodd"
                      />
                      <path d="M1 10.75a.75.75 0 0 1 .75-.75h3.215a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61a1 1 0 0 1 .832-.445h3.215a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 1 12.75 14h-9.5A2.25 2.25 0 0 1 1 11.75v-1Z" />
                    </svg>
                    <div>86%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto bg-white rounded-lg shadow-lg p-8  ">
        <div className="flex w-[65%] justify-end mx-[30%] border-b-2">
          <div class="flex-1  p-4 border-r-2">
            <div class="mb-2">
              <p class="text-gray-700">
                {movieDetails?.overview}
              </p>
            </div>
            <div class="flex-col flex mb-4">
              <button 
              onClick = {()=>{
                router.push(`/movie/booknow/${params.id}`)
              
              }}
              class="my-2 bg-transparent text-black px-8 py-2 border-2 border-orange-400 rounded-full">
                Book Now
              </button>
            
              <span className="text-gray-700"><p>Produciton Companies:</p> {movieDetails?.production_companies?.map((company, index)=> <span>
                {company.name}
                <img className='w-50 h-5 object-scale-down' src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}></img>
              </span>)}</span>
            </div>
          </div>
          <div class="flex ">
            <div class="flex flex-col p-2">
              <h3 class="text-lg text-orange-500 font-semibold mb-2">
                Movie Details
              </h3>
              <p className="text-gray-700">Revenue: $ {movieDetails?.revenue} </p>
              
              <p className="text-gray-700">Status: {movieDetails?.status}</p>
              <p className="text-gray-700">Tagline: {movieDetails?.tagline}</p>
              <p className='text-gray-700'>Runtime: {movieDetails?.runtime} minutes</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-10 w-[92%] mx-auto">
          <div className="flex-1 mr-4">
            <div className="mb-8">
              <h2 className="text-2xl  text-orange-500 font-semibold mb-4">
              </h2>
              <p className="text-gray-700 mb-4"></p>
              <div className="flex flex-col w-full -mx-2">
                
              </div>
              <h2 className="text-xl text-orange-500 font-semibold mb-4">
                Description            
              </h2>
              <p className="text-gray-700 mb-4">{movieDetails?.overview}</p>
              <p className="text-gray-700 mb-4">{movieDetails?.overview}</p>
              <p className="text-gray-700 mb-4">{movieDetails?.overview}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <h2 className="text-xl text-orange-500 font-semibold mb-4">
              Photos & Videos
            </h2>
            <div className="flex col-span-2 gap-6">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
 className="w-72 h-72 object-cover rounded-2xl" />
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
          class="h-72 w-72 object-cover rounded-2xl"
        />
            </div>
            </div>
          </div>
        </div>
    </>
  );
};


export default MovieDetailsPage;
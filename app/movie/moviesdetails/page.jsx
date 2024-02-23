import React from "react";

const MovieDetailsPage = () => {
  const movieData = {
    title: "Inception",
    description:
      "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife.",
    images: [{ url: "/assets/img/welcome.jpeg", alt: "Image 1" }],
    photos: [
      { url: "/assets/img/inception.jpg", alt: "Photo 1" },
      { url: "/assets/img/inception.jpg", alt: "Photo 2" },
      { url: "/assets/img/welcome.jpeg", alt: "Photo 3" },
      { url: "/assets/img/welcome.jpeg", alt: "Photo 4" },
    ],
  };

  return (
    <>
      <div className="relative">
        <img src="/assets/img/inception.jpg" className="h-[420px] w-full" />
        <img
          src="/assets/img/inception.jpeg"
          class="h-[300px] w-[250px] rounded-2xl absolute  top-60 left-20"
        />
        <div class="flex flex-col md:flex-row mx-auto rounded-xl w-[90%]">
          <div class="flex flex-col absolute  top-60 left-[350px]">
            <div class="p-4 ">
              <p className="text-orange-500 text-xl font-bold">2014</p>
              <h2 className="text-orange-500 text-3xl font-semibold">
                Inception
              </h2>
              <p className="text-orange-500">Action,Sci-fi 117mins</p>
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
                  <div className="text-xl font-semibold">AUDICENCES</div>
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
                Inception is a 2010 science fiction action film written and
                directed by Christopher Nolan, who also produced the film with
                Emma Thomas, his wife.
              </p>
            </div>
            <div class="flex justify-between items-center mb-4">
              <button class="bg-transparent text-black px-8 py-2 border-2 border-orange-400 rounded-full">
                Add to
              </button>
              <button class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
                Watch trailer
              </button>
            </div>
          </div>
          <div class="flex ">
            <div class="flex flex-col p-2">
              <h3 class="text-lg text-orange-500 font-semibold mb-2">
                Movie Details
              </h3>
              <p class="text-gray-700">Director: Christopher Nolan</p>
              <p class="text-gray-700">Producer: Emma Thomas</p>
              <p class="text-gray-700">Cast: Leonardo DiCaprio,Ellen Page</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[92%] mx-auto mt-10">
          <div className="flex-1 mr-4">
            <div className="mb-8">
              <h2 className="text-2xl  text-orange-500 font-semibold mb-4">
                {movieData.title}
              </h2>
              <p className="text-gray-700 mb-4">{movieData.description}</p>
              <div className="flex flex-col w-full -mx-2">
                {movieData.images.map((image, index) => (
                  <div key={index} className=" p-2">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full rounded-lg shadow"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{movieData.description}</p>
              <p className="text-gray-700 mb-4">{movieData.description}</p>
              <p className="text-gray-700 mb-4">{movieData.description}</p>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <h2 className="text-xl text-orange-500 font-semibold mb-4">
              Photos & Videos
            </h2>
            <div className="flex flex-wrap -mx-2">
              {movieData.photos.map((photo, index) => (
                <div key={index} className="w-1/2 md:w-1/2 p-2">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full rounded-lg shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;

import React from "react";

const ContactUsCard = () => {
  return (
    <>
      <div className="flex bg-gray-400 p-4">
        <div class="mx-auto w-full max-w-screen-xl">
      <div className="flex justify-center mt-4 text-black text-4xl font-medium ">
        Contact Us
      </div>
          <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <ul class="text-gray-900 dark:text-gray-400 font-medium gap-[1vw] flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="yellow"
                  className="w-12 h-12 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <h2 className="font-medium text-xl flex justify-center text-black">
                  BY PHONE
                </h2>
                <h4 className="font-medium text-lg flex justify-center text-black">
                  Nepal Toll-Free:
                  <br />
                  +977 9861526366
                </h4>{" "}
                <button className="text-black bg-white px-10 py-3 ml-4">
                  LOG IN
                </button>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium gap-[1vw] flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="yellow"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>

                <p className="font-medium text-lg flex  text-black justify-center">
                  START A NEW CASE
                </p>
                <p className="font-medium text-md flex text-center text-black w-2/3 p-2">
                  You can upload your queries and submit to us 
                </p>
                <button className="text-black bg-white px-10 py-3 ml-4">
                  START HERE
                </button>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium gap-[1vw] flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="yellow"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                <h2 className="font-medium text-lg text-black flex justify-center">
                  LIVE CHAT
                </h2>
                <p className="font-medium text-md text-center text-black w-2/3">
                  Chat with the member of the in-house team
                </p>
                <button className="text-black bg-white px-10 py-3 ml-4">
                  START CHAT
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsCard;

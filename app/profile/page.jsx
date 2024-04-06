// profile page of the user with the email and that displays the bookings

"use client";
import { FaCouch } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@provider/UserProvider";
import jsPDF from "jspdf";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    // fetch bookings from the database using the user email in a PUT request
    const response = await fetch("/api/book", {
      method: "PUT",
      body: JSON.stringify({ email: user.email }),
    });
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const [movieDetails, setMovieDetails] = useState([]);

  const getMovie = async (id, tempMovieDetails) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjdlNWM1NzIxYmQ2ZGJiOGVhYTlmYjU5YTQ3NzZjYSIsInN1YiI6IjY2MTAyYWJkNDk3NTYwMDE0YTRlMTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i2AWamC0ADzdN9GZ5LYma6pDTnKyQ6CzcDaH5BZl9g",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        tempMovieDetails.push(response);
      })
      .catch((err) => console.error(err));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjdlNWM1NzIxYmQ2ZGJiOGVhYTlmYjU5YTQ3NzZjYSIsInN1YiI6IjY2MTAyYWJkNDk3NTYwMDE0YTRlMTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i2AWamC0ADzdN9GZ5LYma6pDTnKyQ6CzcDaH5BZl9g",
      },
    };
    let tempMovieDetails = [];

    const fetches = bookings.map((booking) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${booking.movieId}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          tempMovieDetails.push(response);
        })
        .catch((err) => console.error(err));
    });

    Promise.all(fetches).then(() => {
      setMovieDetails(tempMovieDetails);
      setLoading(false);
    });
  }, [bookings]);

  useEffect(() => {
    setMovieDetails(movieDetails);
  }, [movieDetails]);

  return (
    <div>
      <span className="flex justify-center text-2xl mt-4">
        Welcome to Online Booking Platform, Mr. {user.username}
      </span>
      <h2 className="p-2 flex justify-center font-bold">Your Bookings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 w-[92%] mx-auto">
          {bookings.map((booking, index) => {
            return (
              <div className="py-4 px-8">
                <span>
                  <p className="py-2">
                    Movie :{" "}
                    {movieDetails.map((movie) => {
                      if (movie.id === booking.movieId) {
                        return movie.title;
                      }
                    })}
                  </p>
                  <p className="mb-2">Time: Evening show at 6 PM</p>
                  <p className="mb-2">Booked Seats</p>
                  <li key={index} className="flex gap-3">
                    {booking.seat.split(",").map((seat) => (
                      <div className="mt-1">
                        <div
                          key={seat}
                          className="text-center text-sm bg-blue-400 text-white flex justify-evenly w-[110px] p-4 rounded-xl"
                        >
                          <FaCouch
                            style={{ color: "White", fontSize: "24px" }}
                          />
                          <span className="block">{seat}</span>
                        </div>
                      </div>
                    ))}
                  </li>
                  <div className="flex gap-3">
                    {/* button to print bill pdf */}
                    <button
                      className="bg-green-600 text-white rounded-3xl px-3 py-2 mt-3"
                      onClick={() => {
                        
                        const doc = new jsPDF();

                        doc.text("Movie: ", 10, 10);
doc.text(movieDetails.find((movie) => movie.id === booking.movieId).title, 50, 10);

                        doc.text("Time: ", 10, 20);
                        doc.text("6:00 PM, Evening show", 50, 20);

                        doc.text("Price per seat: ", 10, 30);
                        doc.text(
                          `Rs ${movieDetails.find((movie) => movie.id === booking.movieId).vote_average * 100 + 79}`,
                          50,
                          30
                        );

                        doc.text("Seats: ", 10, 40);
                        doc.text(booking.seat.split(',').length.toString(), 50, 40);
                        
                        // seat numbers
                        doc.text("Seat Numbers: ", 10, 50);
                        doc.text(booking.seat, 50, 50);

                        doc.text("Total: ", 10, 60);
                        doc.text(
                          `Rs. ${
                            booking.seat.split(',').length * movieDetails.find((movie) => movie.id === booking.movieId).vote_average * 100 + 10 +
                            79
                          }`,
                          50,
                          60
                        );

                        doc.text("VAT: ", 10, 70);
                        doc.text("60", 50, 70);

                        doc.text("Discount: ", 10, 80);
                        doc.text("50", 50, 80);

                        doc.text("Net Total: ", 10, 90);
                        doc.text(
                          `${
                            booking.seat.split(',').length *
                            movieDetails.find((movie) => movie.id === booking.movieId).vote_average *
                              100 +
                            29 +
                            60
                          }`,
                          50,
                          90
                        );

                        doc.text("Billed to: ", 10, 100);
                        doc.text(user.email, 50, 100);

                        doc.save("BookingDetails.pdf");
                      }}
                    >
                      Print Bill
                    </button>
                    <button
                      className="bg-red-600 text-white rounded-3xl px-3 py-2 mt-3"
                      onClick={async () => {
                        const conf = window.confirm(
                          "Are you sure you want to delete this booking?"
                        );
                        if (!conf) return;
                        const response = await fetch("/api/book", {
                          method: "DELETE",
                          body: JSON.stringify({ id: booking._id }),
                        });
                        const data = await response.json();
                        if (response.ok) {
                          const response = await fetch(
                            `/api/seats/${booking.movieId}`,
                            {
                              method: "DELETE",
                              body: JSON.stringify({
                                movieBookingId: booking._id,
                              }),
                            }
                          );
                        }
                        setBookings(
                          bookings.filter((b) => b._id !== booking._id)
                        );
                      }}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;

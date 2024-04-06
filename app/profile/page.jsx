// profile page of the user with the email and that displays the bookings

'use client'
import { FaCouch } from "react-icons/fa";
import {useContext, useState, useEffect} from 'react'
import { UserContext } from '@provider/UserProvider'

const Profile = () => {

  const {user} = useContext(UserContext)
  const [bookings, setBookings] = useState([])

  const fetchBookings = async () => {
    // fetch bookings from the database using the user email in a PUT request
    const response = await fetch('/api/book', {
        method: 'PUT',
        body: JSON.stringify({email: user.email})
    })
    const data = await response.json()
    setBookings(data)
    }

    useEffect(() => {
        fetchBookings()

        }
    ,[])

    const [movieDetails, setMovieDetails] = useState([]) 

  const getMovie = async (id) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjdlNWM1NzIxYmQ2ZGJiOGVhYTlmYjU5YTQ3NzZjYSIsInN1YiI6IjY2MTAyYWJkNDk3NTYwMDE0YTRlMTU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9i2AWamC0ADzdN9GZ5LYma6pDTnKyQ6CzcDaH5BZl9g'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${booking.movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setMovieDetails({...movieDetails, response})
      })
      .catch(err => console.error(err));
  }

  // for every movie id in the bookings array, get the movie details and set to the movie details array the title
  useEffect( () => {
    bookings.map((booking) => {
      getMovie(booking.movieId)
    })
      
    
  }, [])

  return (
    <div>
      <h1>Welcome to OBooking, Mr. {user.email}</h1>
      <h2>Your Bookings</h2>
        <ul>
            {bookings.map((booking, index) => {
            return <span>
              <p>Movie</p>
              <p>
                {
                  movieDetails.map((movie) => {
                    if (movie.id === booking.movieId) {
                      return movie.title
                    }
                  })
                }
              </p>
              <p>Seats</p>
            <li key={index} className="flex gap-3">

                {booking.seat.split(',').map((seat) => (
                  <div>
                    <div key={seat} className="text-center text-sm bg-gray-400 flex justify-evenly w-[110px] p-4 rounded-xl">
                        <FaCouch style={{ color: 'Black', fontSize: '24px' }} />
                        <span className="block">{seat}</span>
                    </div>
                  </div>
                ))}
            </li>
            {/* delete button */}
            <button 
                className='bg-red-600 text-white rounded-md p-2 m-2'
                onClick={async () => {
                    const conf = window.confirm('Are you sure you want to delete this booking?')
                    if (!conf) return
                    const response = await fetch('/api/book', {
                        method: 'DELETE',
                        body: JSON.stringify({id: booking._id})
                    })
                    const data = await response.json()
                    if (response.ok) {
                        const response = await fetch(`/api/seats/${booking.movieId}`, {
                            method: 'DELETE',
                            body: JSON.stringify({movieBookingId: booking._id})
                        })
                    }
                    // filter out the deleted booking
                    setBookings(bookings.filter(b => b._id !== booking._id))
                }}>Delete</button>
        </span>
            })}
        </ul>
    </div>
  )
}

export default Profile

// profile page of the user with the email and that displays the bookings

'use client'
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
    console.log(data)
    }

    useEffect(() => {
        fetchBookings()

        }
    ,[])


  return (
    <div>
      <h1>Welcome to OBooking, Mr. {user.email}</h1>
      <h2>Your Bookings</h2>
        <ul>
            {bookings.map((booking, index) => {
            return <span>
                <li key={index}>{booking.movieId} - {booking.seat}</li>
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

"use client";
import { useEffect, useState, useContext } from "react";
import { FaCouch } from "react-icons/fa";
import {UserContext} from "@provider/UserProvider"
import {useRouter} from 'next/navigation'

const MovieBookingPage = ({params}) => {

  // get disabled seats for a given movidId
  const router = useRouter();
  const [disabledSeats, setDisabledSeats] = useState([]);
  const [bookingId, setBookingId] = useState('')

  useEffect(() => {
    console.log(params.id)
    fetch(`/api/seats/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        // data is an array of response with elements that contains a field called disabledseats that contains numbers, first join all the arrays into one array and set it to disabledSeats
        const disabledSeats = data.map((element) => element.disabledSeats);
        setDisabledSeats(disabledSeats.flat());

        console.log(data.flat())
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [params.id]);

  const handleBooking = async () => {
    // turn selectedSeats array into a string
    const selectedSeatsbyc = selectedSeats.join(",");
    console.log(selectedSeatsbyc);
    // POST request for booking a movie given movieid and email
    const responsed = await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        movieId: params.id,
        seat: selectedSeatsbyc,
      }),
    });

    if (responsed.ok) {
      alert("Booking Successful")
      // get the _id from the booking movie response
      const data = await responsed.json();
     
      // send POST request to seats api to update the disabled seats
      const response = await fetch(`/api/seats/${params.id}`, {
        method: "POST",
        body: JSON.stringify({
          movieBookingId: data._id,
          movieId: params.id,
          seats: selectedSeats,
        }),
      });
      router.push('/movie')
    }
  };

  const [selectedSeats, setSelectedSeats] = useState([])
  const {user,setUser}= useContext(UserContext)

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const renderSeat = (seatNumber, isSelected, isDisabled) => (
    <div
      key={seatNumber}
      className={`seat mr-4 ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""
        }`}
      onClick={() => !isDisabled && toggleSeatSelection(seatNumber)}
    >
      <FaCouch
        style={{
          color: isSelected ? "blue" : isDisabled ? "inherit" : "green",
          fontSize: window.innerWidth >= 768 ? "30px" : "20px"
        }}
      />
      <div className="text-xs text-center">{seatNumber}</div>
    </div>
  );

  const renderRow = (row, seatCount, rowOffset) => (
    <div key={row} className="flex justify-center">
      {[...Array(seatCount)].map((_, index) => {
        const seatNumber = rowOffset + index + 1;
        const isSelected = selectedSeats.includes(seatNumber);
        const isDisabled = disabledSeats.includes(seatNumber);
        return renderSeat(seatNumber, isSelected, isDisabled);
      })}
    </div>
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 px-4 py-8">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4 text-center">Select Your Seats</h1>

        <div className="flex justify-center">
          <div>
            <div>
              {renderRow(11, 16, 105)}
              {renderRow(10, 15, 90)}
              {renderRow(9, 14, 76)}
              {renderRow(8, 13, 63)}
              {renderRow(7, 12, 51)}
              {renderRow(5, 11, 40)}
         
            <p className='text-center mb-2 font-bold'>Walking Corridor</p>
           
              {renderRow(5, 10, 30)}
              {renderRow(4, 9, 21)}
              {renderRow(2, 8, 13)}
              {renderRow(2, 7, 6)}
              {renderRow(1, 6, 0)}
            </div>
          <div className="screen mt-8 flex justify-center items-center bg-gray-500 w-[20%] mx-auto h-[100px] rounded-xl">
            <h2 className="text-lg font-bold text-center">Cinema Screen</h2>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <div className="selected-seats h-[220px] overflow-y-scroll">
            <h2 className="text-lg font-bold mb-2">Selected Seats:</h2>
            <div className="grid grid-cols-3 gap-2 ">
              {selectedSeats.map((seat) => (
                <div key={seat} className="text-center text-sm bg-gray-400 flex justify-evenly p-4 rounded-xl">
                  <FaCouch style={{ color: 'Black', fontSize: '24px' }} />
                  <span className="block">{seat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {/* transaction card */}
          <div className="p-4 mt-6 shadow-md rounded-md grid grid-cols-2">
              <h1 className="border-black border-b-2 col-span-2 py-2 mb-2 text-xl font-medium">Totals:</h1>
            <div className="font-medium">
              <p>Seats Number: </p>
              <p>Price per seat: </p>
              <p>Total: </p>
              <p>Movie: </p>
              <p>Time: </p>
              <p>VAT: </p>
              <p>Discount: </p>
              <p>Net Total: </p>
              <p>Billed to: </p>
            </div>
            <div>
              <p>{selectedSeats.length}</p>
              <p>Rs. 600</p>
              <p>Rs. {selectedSeats.length * 600}</p>
              <p>The Matrix</p>
              <p>6:00 PM</p>
              <p>60</p>
              <p>40</p>
              <p>{selectedSeats.length * 600 + 60 - 40}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="flex">
            <button 
            onClick={handleBooking}
            className="bg-yellow-600 rounded-full px-4 py-2 mt-4">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBookingPage;

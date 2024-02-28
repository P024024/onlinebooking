"use client";
import React, { useState } from "react";
import { FaCouch } from "react-icons/fa";

const MovieBookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const disabledSeats = [7, 8, 17, 18, 27, 28];

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
      className={`seat mr-4 ${isSelected ? "selected" : ""} ${
        isDisabled ? "disabled" : ""
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
    <div className="container md:grid md:grid-cols-3 px-4 py-8">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-4">Select Your Seats</h1>
  
        <div className="grid">
          <div>
            {renderRow(11, 16, 105)}
            {renderRow(10, 15, 90)}
            {renderRow(9, 14, 76)}
            {renderRow(8, 13, 63)}
            {renderRow(7, 12, 51)}
            {renderRow(5, 11, 40)}
          </div>
          <p className='text-center mb-2 font-bold'>Walking Corridor</p>
          <div>
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
      <div className="selected-seats">
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
  );
};

export default MovieBookingPage;

import React from 'react';

const AboutUs = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sakun',
      avatar: '/assets/img/inception.jpeg',
      comment: 'This online booking system is a game-changer! It makes movie night planning a breeze.',
    },
    {
      id: 2,
      name: 'Pawan',
      avatar: 'avatar_pawan.jpg',
      comment: 'I\'ve never experienced such a smooth booking process before. Kudos to the team!',
    },
    {
      id: 3,
      name: 'Jessica',
      avatar: 'avatar_jessica.jpg',
      comment: 'Booking tickets online has never been easier! The interface is user-friendly and intuitive.',
    },
    {
      id: 4,
      name: 'Chris',
      avatar: 'avatar_chris.jpg',
      comment: 'The online booking system is a lifesaver! No more waiting in long lines at the cinema.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img src="/assets/img/inception.jpeg" alt="Cinema" className="rounded-lg shadow-md h-96 w-96 object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Online Booking System</h2>
            <p className="text-lg text-gray-800 mb-6">Welcome to our online cinema booking system! We offer a seamless movie booking experience, allowing you to browse movies, check showtimes, and reserve seats with ease. Say goodbye to long queues and hello to convenience!</p>
            <p className="text-lg text-gray-800 mb-6">Features:</p>
            <ul className="list-disc ml-8 text-lg text-gray-700">
              <li>Explore a wide selection of movies.</li>
              <li>Check showtimes and book tickets in advance.</li>
              <li>Choose your preferred seats with an interactive seating map.</li>
              <li>Secure online payment options.</li>
              <li>Receive booking confirmation and e-tickets via email.</li>
              <li>Enjoy exclusive discounts and offers for online bookings.</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center my-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden animate__animated animate__fadeInUp">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-800 text-lg mb-4">{testimonial.comment}</p>
              <p className="text-gray-600">{testimonial.name}</p>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-200 opacity-75 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white transform scale-150 rotate-45 origin-top-left -translate-y-8 translate-x-16 opacity-25 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

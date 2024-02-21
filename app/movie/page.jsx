import MovieCard from '@components/MovieCard'
import React from 'react'

const Team = () => {
  return (
    <>
    <h2 className='text-2xl text-bold font-medium p-4'>Popular Movie</h2>
    <div className='flex grid grid-cols-1 md:grid-cols-4'>
<MovieCard/>
    </div>
    </>
  )
}

export default Team

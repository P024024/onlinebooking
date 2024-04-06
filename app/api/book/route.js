// this is the login api route that checks whether the username and password match from the mongoose database

import {connectToDB} from '@utils/database'
import Movie from '@models/Movie'


export const PUT = async (req) => {
    try {
        const { email } = await req.json(); // This line is reading the body of the request
        const movies = await Movie.find({ userEmail: email });
        return new Response(JSON.stringify(movies), {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to get movies: ${error.message}`, { status: 500 });
    }
}

//POST request for booking a movie given movieid and email

export const POST = async (req) => {
    const {email, movieId, seat} = await req.json();

    try {
        await connectToDB();
        const movie = await Movie.create({email: email, movieId: movieId, seat: seat})
        movie.save()
        console.log(movie._id)
        return new Response(JSON.stringify(movie),{
            status:201
        })
    } catch (error){
        return new Response("Failed to create movie",{status: 500})
    }

}

// DELETE request for deleting a booking given the booking _id

export const DELETE = async (req) => {
    const {id} = await req.json();

    try {
        await connectToDB();
        const movie = await Movie.findByIdAndDelete(id)
      
        // send a success response
        return new Response(JSON.stringify(movie),{
            status:200
        })
    }
    catch (error){
        return new Response("Failed to delete movie",{status: 500})
    }   
    
}

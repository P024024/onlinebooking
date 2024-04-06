// this is the login api route that checks whether the username and password match from the mongoose database

import {connectToDB} from '@utils/database'
import Seats from '@models/Seats'

// get disabled seats given movieid

export const GET = async (req, {params}) => {
    const movieId = params.id;
    console.log(movieId)
    try {
        await connectToDB();
        const seats = await Seats.find({movieId: movieId})
        console.log(JSON.stringify(seats))
        return new Response(JSON.stringify(seats),{
            status:201
        })
    } catch (error){
        return new Response("Failed to get disabled seats",{status: 500})
    }

}


export const POST = async (req, {params}) => {
    const {movieId, seats, movieBookingId} = await req.json();

    try {
        await connectToDB();
        const dseat = await Seats.create({movieBookingId: movieBookingId, movieId: movieId, disabledSeats: seats})
        dseat.save()
        return new Response(JSON.stringify(dseat),{
            status:201
        })
    } catch (error){
        return new Response("Failed to create movie",{status: 500})
    }

}

// DELELE route for deleting a seat given the movieBookingId

export const DELETE = async (req) => {
    const {movieBookingId} = await req.json();

    try {
        await connectToDB();
        const seat = await Seats.findOneAndDelete({movieBookingId: movieBookingId})
        return new Response(JSON.stringify(seat),{
            status:200
        })
    }
    catch (error){
        return new Response("Failed to delete seat",{status: 500})
    }   
    
}
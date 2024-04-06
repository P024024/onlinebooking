// make movie model

// this is the user mongoose model that store username, password and email

import {Schema, model, models} from 'mongoose'; 

const MovieSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Customer email is required']
    },

    movieId: {
        // type number
        type: Number,
        required: [true, 'Movie ID is required']
    },

    seat: {
        type: String,
        required: [true, 'Number of seat is required']
    }
})  

const Movie = models.Movie || model("Movie", MovieSchema);

export default Movie;
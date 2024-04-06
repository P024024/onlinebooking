import {Schema, model, models} from 'mongoose'; 

const SeatsSchema = new Schema({
    movieBookingId: {
        
        type: String,
        required: [true, 'Movie booking ID is required']
    },

    movieId: {
        type: Number,
        required: [true, 'Movie ID is required']
    },
    disabledSeats : {
        type: Array,
        required: [true, 'Disabled seats is required']
    },
})  

const Seats = models.Seats || model("Seats", SeatsSchema);

export default Seats;
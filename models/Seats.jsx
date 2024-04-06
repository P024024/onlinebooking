import {Schema, model, models} from 'mongoose'; 

const SeatsSchema = new Schema({
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
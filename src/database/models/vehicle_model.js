import { Schema, model } from "mongoose";

const vehicle_Schema = new Schema ({
    plate: {
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintenances: [{
        type: Schema.Types.ObjectId,
        ref: 'Maintenance'
    }]
});

const Vehicle = model("Vehicle", vehicle_Schema);

export default Vehicle;
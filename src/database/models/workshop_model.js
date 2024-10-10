import { Schema, model } from "mongoose";

const workshop_Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    addres: {
        type: String,
        required: true
    },
    specialties: [{
        type: String,
        required: true
    }],
    maintenances: [{
        type: Schema.Types.ObjectId,
        ref: "Maintenance"
    }]
});

const Workshop = model("Workshop", workshop_Schema);

export default Workshop;
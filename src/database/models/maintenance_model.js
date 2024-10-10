import { Schema, model } from "mongoose";

const maintenance_Schema = new Schema ({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    services: [{
        service: {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    }],
    date: {
        type: Date,
        required: true
    },
    total_cost: {
        type: Number,
        required: true
    }
});

maintenance_Schema.pre('save', function (next) {
    this.total_cost = this.services.reduce((acc, service) => acc + service.service.price, 0);
    next();
});

const Maintenance = model("Maintenance", maintenance_Schema);

export default Maintenance;
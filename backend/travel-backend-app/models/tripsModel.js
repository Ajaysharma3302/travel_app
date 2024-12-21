

const mongoose = require("mongoose");

const tripSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableSlots: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    organizerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
    versionKey: false, 
  }
);

const TripModel = mongoose.model("Trip", tripSchema);

module.exports = TripModel;

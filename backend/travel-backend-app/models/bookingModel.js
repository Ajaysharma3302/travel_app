

const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tripName: {
      type: String,
      required: true,
    },
    tripDate: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked", 
      enum: ["booked", "cancelled"], 
    },
    cancellationPolicy: {
      type: String,
      required: true,
      enum: ["full refund", "50% refund", "no refund"], 
    },
  },
  {
    timestamps: true, 
    versionKey: false, 
  }
);

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;
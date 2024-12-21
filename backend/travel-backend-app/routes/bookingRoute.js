

const express = require("express");
const Booking = require("../models/bookingModel");
const Trip = require("../models/tripModel");
const User = require("../models/userModel");

const router = express.Router();


router.post("/bookings", async (req, res) => {
  const { userId, tripId } = req.body;
  const trip = await Trip.findById(tripId);
  if (trip.availableSlots <= 0) return res.status(400).json({ error: "No slots available" });

  const booking = new Booking({ user: userId, trip: tripId, status: "confirmed" });
  await booking.save();

  trip.availableSlots -= 1; 
  await trip.save();

  res.status(201).json(booking);
});


router.post("/bookings/cancel/:bookingId", async (req, res) => {
  const booking = await Booking.findById(req.params.bookingId);
  const trip = await Trip.findById(booking.trip);
  const today = new Date();
  const tripDate = new Date(trip.date);
  const daysBeforeTrip = Math.floor((tripDate - today) / (1000 * 60 * 60 * 24));

  if (daysBeforeTrip >= 15) {
    // Full refund
    booking.status = "cancelled";
  } else if (daysBeforeTrip >= 7) {
    // 50% refund
    booking.status = "cancelled";
  } else {
    // No refund
    booking.status = "cancelled";
  }

  await booking.save();
  res.json(booking);
});

module.exports = router;
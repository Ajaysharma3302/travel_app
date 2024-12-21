


const express = require("express");
const Trip = require("../models/tripModel");
const User = require("../models/userModel");

const router = express.Router();


router.get("/trips", async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});


router.get("/trips/:id", async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  res.json(trip);
});


router.post("/trips", async (req, res) => {
  const { name, description, price, availableSlots, date, cancellationPolicy } = req.body;
  const organizerId = req.user.id;
  const newTrip = new Trip({
    name,
    description,
    price,
    availableSlots,
    date,
    cancellationPolicy,
    organizer: organizerId,
  });
  await newTrip.save();
  res.status(201).json(newTrip);
});

router.put("/trips/:id", async (req, res) => {
  const { name, description, price, availableSlots, date, cancellationPolicy } = req.body;
  const trip = await Trip.findByIdAndUpdate(req.params.id, {
    name,
    description,
    price,
    availableSlots,
    date,
    cancellationPolicy,
  });
  res.json(trip);
});


router.delete("/trips/:id", async (req, res) => {
  const trip = await Trip.findByIdAndDelete(req.params.id);
  res.json({ message: "Trip deleted", trip });
});

module.exports = router;


import { useEffect, useState } from "react";
import { Card } from "@chakra-ui/react"

import { Link } from "react-router-dom";
// import api from "../services"
import axios from "axios"

function LandingPage(){
    const [trips, setTrips] = useState([]);
    
    
    useEffect(() => {
       
        axios
          .get("http://localhost:4001/trips")
          .then((response) => {
            console.log(response.data); 
            setTrips(response.data);
          })
          .catch((error) => {
            console.error("Error fetching trips:", error); 
          });
      }, []);
    
    return(
    

    <Card.Root>
    <></>
    <h1>Upcoming Trips</h1>
    {trips.length === 0 ? (
      <p>No trips available.</p>
    ) : (
      trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.name}</h2>
          <p>{trip.date}</p>
          <p>${trip.price}</p>
          <p>{trip.availableSlots} slots available</p>
          <Link to={`/trips/${trip.id}`}>View Details</Link>
        </div>
      ))
    )}
  </Card.Root>
  );
};

export default LandingPage
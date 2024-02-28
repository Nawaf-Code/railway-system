import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

const Bookings = ({userData}) => {
    const [travels, setTravels] = useState([])

    if(userData !== null){

    fetch(`usersBooking/${userData.id}`)
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Update state with the fetched data
      setTravels(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch operation
      console.error('Error fetching data:', error);
      // Optionally, you can set an error state to display to the user
    });
    }
    

    return (
        <div>
        <div className="travel-schedule">

        <div className="train-schedule">

        <p>Your <span className="highlight">Bookings</span></p>
</div>

            {(travels.length > 0) && (
                <table>
                <thead>
                  <tr>
                    <th>Train Number</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Duration</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Date Of Travel</th>
                  </tr>
                </thead>
                <tbody>
                {travels.map((travel) => (

                    <tr key={travel.id}>
                      <td>{travel.trainNumber}</td>
                      <td>{travel.departureTime}</td>
                      <td>{travel.timeArrival}</td>
                      <td>{travel.duration}</td>
                      <td>{travel.origin}</td>
                      <td>{travel.destination}</td>
                      <td>{travel.dateOfTravel}</td>

                    </tr>
                ))}
                </tbody>
                </table>
            )}

        </div>
        </div>
    );
};

export default Bookings;

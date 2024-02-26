import React from 'react';
import { Button } from 'reactstrap';
const RankTravels = ({travels}) => {

const handleUserBook = (id) =>{
    console.log("the user want", id);
}
    return (
        <div className="travel-schedule">

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
                    <th>Price</th>
                    <th>{}</th>
                  </tr>
                </thead>
                <tbody>
                {travels.map((travel) => (

                    <tr key={travel.id}>
                      <td>{travel.travelNumber}</td>
                      <td>{travel.departureTime}</td>
                      <td>{travel.timeArrival}</td>
                      <td>{travel.duration}</td>
                      <td>{travel.origin}</td>
                      <td>{travel.destination}</td>
                      <td>{travel.price} SAR</td>
                      <td>
                      <Button style={{backgroundColor: '#778899'}} size="sm" onClick={() => handleUserBook(travel.id)}>Book the travel </Button>
                      </td>
                    </tr>
                ))}
                </tbody>
                </table>
            )}

        </div>
        
    );
};

export default RankTravels;

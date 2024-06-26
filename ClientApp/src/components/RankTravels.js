import React, {useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import axios from 'axios';
const RankTravels = ({travels, userData}) => {

  const [load, setLoad] = useState(false)
  const notify = () => toast.error("Please Login!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const loadedNotifySignUp = () => {
      toast.promise(
          new Promise((resolve) => {
              
              setTimeout(() => {
                  resolve();
              },660);
          }),
          {
          pending: "Loading, please wait...",
          success: "The trip has been booked successfully!"
          },
          {}
      )
  }
  const handleUserBook = async (trainNumber, dateOfTravel, origin, destination, departureTime, timeArrival, duration) => {
    setLoad(true);
    if (userData !== null) {
      try {
        const response = await axios.post(`/usersBooking/${userData.id}/${trainNumber}/${dateOfTravel}/${origin}/${destination}/${departureTime}/${timeArrival}/${duration}`);
        // setMessage(response.data);
        loadedNotifySignUp();
      } catch (error) {
        // setMessage('An error occurred while creating the booking.');
        // You can handle the error here
      }
    } else {
      notify();
    }
  };
    return (
        <div className="travel-schedule">

<ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="light"
                />

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
                      <td>{travel.trainNumber}</td>
                      <td>{travel.departureTime}</td>
                      <td>{travel.timeArrival}</td>
                      <td>{travel.duration}</td>
                      <td>{travel.origin}</td>
                      <td>{travel.destination}</td>
                      <td>{travel.price} SAR</td>
                      <td>
                      <Button style={{backgroundColor: '#778899'}} size="sm" onClick={() => handleUserBook(
                        travel.trainNumber,
                        travel.dateOfTravel,
                        travel.origin,
                        travel.destination,
                        travel.departureTime,
                        travel.timeArrival,
                        travel.duration)}>Book the travel </Button>
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

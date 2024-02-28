import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { GrSchedulePlay } from "react-icons/gr";
import RankTravels from './RankTravels';
import dayjs from 'dayjs';
import "./Home.css"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu, Input,
  DropdownItem, Button
} from 'reactstrap';



const Home = ({userStatus, userData}) => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs('2024-03-04'));
  const [travels, setTravels] = useState([]);

  const handleDateChange = (event) => {
    const newDate = dayjs(event.target.value);
    setSelectedDate(newDate);
  };
console.log("month: ",selectedDate.get('month')+1);
console.log("day: ",selectedDate.get('date'));
console.log("year: ",selectedDate.get('year'));



  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleDepartureSelect = (station) => {
    setOrigin(station);
  }

  const handleArrivalSelect = (station) => {
    setDestination(station);
  }

  // Function to handle date picker value change


  const handleGetSchedule = () => {
    console.log(origin, destination)
    fetch(`travel/${origin}/${destination}`)
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
      <div className="train-schedule">
      {console.log('status from home:', userStatus)}
      <p>Our <span className="highlight">Schedule</span></p>
</div>
      <div className="d-flex p-5 grpbutton">
      <Dropdown isOpen={dropdownOpen1} toggle={toggle1} direction="down">
  <DropdownToggle caret size="lg" style={{ backgroundColor: '#778899', minWidth: '256px' }}>
    <IoLocationOutline /> 
    {origin ? origin : "Select Departure Station"} {/* Display the selected value or default text */}
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem onClick={() => handleDepartureSelect("Riyadh")}>Riyadh</DropdownItem>
    <DropdownItem onClick={() => handleDepartureSelect("Hufuf")}>Hufuf</DropdownItem>
    <DropdownItem onClick={() => handleDepartureSelect("Dammam")}>Dammam</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction="down">
  <DropdownToggle caret size="lg" style={{ backgroundColor: '#778899', minWidth: '256px'}}>
    <IoLocationOutline /> 
    {destination ? destination : "Select Arrival Station"} {/* Display the selected value or default text */}
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem onClick={() => handleArrivalSelect("Riyadh")}>Riyadh</DropdownItem>
    <DropdownItem onClick={() => handleArrivalSelect("Hufuf")}>Hufuf</DropdownItem>
    <DropdownItem onClick={() => handleArrivalSelect("Dammam")}>Dammam</DropdownItem>
  </DropdownMenu>
</Dropdown>

<div className='dateinput'>
<Input
        bsSize="lg"
        type="date"
        style={{ backgroundColor: '#778899', minWidth: '256px', color: 'white' }}
        value={selectedDate.format('YYYY-MM-DD')}
        onChange={handleDateChange}
      />
</div>



    <Button
          style={{ backgroundColor: 'rgb(211, 177, 83)', color: 'black', maxHeight: '50px' }}
          size="lg"
          onClick={handleGetSchedule}
        >
          <GrSchedulePlay /> Get Schedule
        </Button>
    </div>

    <RankTravels travels={travels} userData={userData}/>
    </div>
  );
};

export default Home;

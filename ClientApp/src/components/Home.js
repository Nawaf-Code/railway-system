import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField'; 
import { GrSchedulePlay } from "react-icons/gr";
import RankTravels from './RankTravels';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import "./Home.css"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button
} from 'reactstrap';



const Home = ({ ...args }) => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs('2024-03-04'));
  const [travels, setTravels] = useState([]);

//console.log("month: ",selectedDate.get('month')+1);
//console.log("day: ",selectedDate.get('date'));
//console.log("year: ",selectedDate.get('year'));

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleDepartureSelect = (station) => {
    setOrigin(station);
  }

  const handleArrivalSelect = (station) => {
    setDestination(station);
  }

  // Function to handle date picker value change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

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

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{ paddingTop: '0', borderRadius: '20px solid' }}>
        <DemoItem label="Select Travel Date">
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            textField={(props) => <TextField {...props} />} 
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>


    <Button
          style={{ backgroundColor: 'rgb(211, 177, 83)', color: 'black', maxHeight: '50px' }}
          size="lg"
          onClick={handleGetSchedule}
        >
          <GrSchedulePlay /> Get Schedule
        </Button>
    </div>

    <RankTravels travels={travels} />
    </div>
  );
};

export default Home;

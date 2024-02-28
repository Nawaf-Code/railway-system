import React from 'react';
import RankTravels from "./components/RankTravels";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Bookings from './components/Bookings';
import CreateUser from "./components/CreateUser";

const AppRoutes = ({ userStatus, updateUserStatus, userData, setUserInfo }) => (
  [
    {
      index: true,
      element: <Home userData={userData} userStatus={userStatus} />
    },
    {
      path: '/create-account',
      element: <CreateUser />
    },
    {
      path: '/sign-in',
      element: <Signin userStatus={userStatus} updateUserStatus={updateUserStatus} setUserInfo={setUserInfo}/>
    },
    {
      path: '/bookings',
      element: <Bookings userData={userData}/>
    },
  ]
);

export default AppRoutes;

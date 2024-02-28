import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import './custom.css';

const App = () => {
  const [userStatus, setUserStatus] = useState('test');
  const [userData, setUserData] = useState(null);

  const setUserInfo = (userInfo) => {
    setUserData(userInfo);
  }
  const updateUserStatus = (status) => {
    setUserStatus(status);
  };

  return (
    <Layout userStatus={userStatus} updateUserStatus={updateUserStatus} setUserInfo={setUserInfo}>
      <Routes>
        {AppRoutes({ userStatus, updateUserStatus, userData, setUserInfo }).map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
};

export default App;

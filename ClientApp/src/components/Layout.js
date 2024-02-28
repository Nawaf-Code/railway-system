import React, {useState} from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = ({ children, userStatus, updateUserStatus, setUserInfo }) => {

  return (
    <div>
        <NavMenu userStatus={userStatus} updateUserStatus={updateUserStatus} setUserInfo={setUserInfo}/>
        <Container tag="main">
            {children}
        </Container>
    </div>
);
};

Layout.displayName = 'Layout';

export default Layout;

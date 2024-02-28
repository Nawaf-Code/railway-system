import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link, Navigate} from 'react-router-dom';

const Signin = ({ userStatus, updateUserStatus, setUserInfo }) => {
    console.log('status from sign in:', userStatus);
    // State to store the values of username and password
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


    // Function to update the form data state when input values change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle sign in button click
    const handleSignin = () => {
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);
    
        fetch(`user/${formData.username}/${formData.password}`)
            .then((response) => {
                if (!response.ok) {
                    updateUserStatus('invalid');
                } else {
                    updateUserStatus('valid');
                }
                return response.json();
            })
            .then((data) => {
                // Update state with the fetched data
                setUserInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    if(userStatus === "valid"){
        return <Navigate to='/' />
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            
            <div>
                <div className="train-schedule">
                    <p>Sign <span className="highlight">In</span></p>
                </div>
                <Form className='signform' style={{ width: '500px', margin: '0 auto' }}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter your username" 
                            bsSize="lg" 
                            value={formData.username} 
                            onChange={handleInputChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            bsSize="lg" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                        />
                    </FormGroup>
                    {(userStatus === "invalid") && (
                        <p style={{color:"red"}}>user id or password invalid</p>
                    )}
                    <Button
                        style={{ backgroundColor: 'rgb(211, 177, 83)', color: 'black', fontWeight: 'bold' }}
                        size="lg"
                        onClick={handleSignin}
                    >
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Signin;

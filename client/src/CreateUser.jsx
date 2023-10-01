import React, { useState } from "react";
import CreateUser from './CreateUser.css';
import axios from 'axios';
  

function Signup(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleRegister = async () => {
        console.log(name,email,password) ;
        // e.preventDefault();

    try {
      let formData = {
        name, email, password
      }
      console.log('signup', formData)
      // Send a POST request to the server's signup endpoint with the form data
      const response = await axios.post('http://localhost:5000/auth/signup', formData);

      // If the signup is successful, display a success message
      console.log(response.data.message); // User registered successfully

      // Clear form data
      // setFormData({
      //   name: '',
      //   email: '',
      //   password: '',
      // });

      // Clear any previous error messages
      // setError(null);
    } catch (error) {
      // Handle errors from the server
      console.error(error.response.data.message);

      // Display the error message to the user
      // setError(error.response.data.message);
    }
      };

    return (
        <>
        
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
</div>
</>
    );
};

export default Signup;
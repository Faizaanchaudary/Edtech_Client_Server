import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Initialize state for error handling
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('signup')
      // Send a POST request to the server's signup endpoint with the form data
      const response = await axios.post('/auth/signup', formData);

      // If the signup is successful, display a success message
      console.log(response.data.message);
       // User registered successfully

      // Clear form data
      setFormData({
        name: '',
        email: '',
        password: '',
      });

      // Clear any previous error messages
      setError(null);
    } catch (error) {
      // Handle errors from the server
      console.error(error.response.data.message);

      // Display the error message to the user
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.username}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* Display error message if there's an error */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Signup;

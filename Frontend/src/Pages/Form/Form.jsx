import React, { useState } from 'react';
import './Form.css'
import axios from 'axios';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      await axios.post ('http://localhost:3000/newstudent',formData,{withCredentials:true});
     console.log('OK')
    } catch (error) {
      console.log(error)
     }
  };

  return (
    <div className='cadre'>
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button  type="submit">Submit</button>
    </form>
    </div>
  );
};

export default SignupForm;

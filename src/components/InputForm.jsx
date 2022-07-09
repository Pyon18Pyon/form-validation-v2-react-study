import React from 'react';
import { useForm } from "react-hook-form";
import './InputForm.css';

function InputForm({ onSubmit }) {

  
  const {
    register, 
    formState: { errors }, 
    handleSubmit 
  } = useForm({
    mode: 'onChange'
  });
  
  

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="name">Full Name</label> 
        <input 
          type="text" 
          placeholder="Full Name"
          {...register('name', {
            required: 'This is a required.',
            maxLength: {
              value: 50,
              message: 'Max length is 50.'
            }
          })} 
        />
      <div className="errors">
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      </div>
      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phone">Mobile Number</label>
        <input 
          type="tel"
          placeholder="0400-000-000"
          {...register('phone', {
            required: 'This is a required.',
            pattern: {
              value: /[0-9]{4}-[0-9]{3}-[0-9]{3}/,
              message: 'Please match the required format.'
            }
          })}
        />
      <div className="errors">
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      </div>
      {/* Email Address */}
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input 
          type="email"
          placeholder="email@address.com"
          {...register('email', {
            required: 'This is a required.',
          })}
        />
      </div>
      {/* Website URL */}
      <div className="form-group">
        <label htmlFor="website">Website URL</label>
        <input 
          type="url"
          placeholder="http://jacinto.design"
          {...register('url', {
            required: 'This is a required.',
          })}
        />
      </div>
      {/* Password */}
      <div className="form-group">
        <label htmlFor="password1">Password</label>
        <input 
          type="password" 
          placeholder="Create Password (Min. 8 Characters)" 
          {...register('password', {
            required: 'This is a required.',
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message: 'Please include at least 1 uppercase character, 1 lowercase character, and 1 number.'
            }
          })}
        />
      <div className="errors">
        {errors.password && <span>{errors.password.message}</span>}
      </div> 
      </div>
      {/* Confirm Password */}
      <div className="form-group">
        <label htmlFor="password2">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm Password"
          {...register('password2', {
            required: 'This is a required.',
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message: 'Password do not match.'
            }
          })}
        />
      <div className="errors">
        {errors.password2 && <span>{errors.password2.message}</span>}
      </div>  
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default InputForm;
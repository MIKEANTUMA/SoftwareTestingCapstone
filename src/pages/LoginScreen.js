import React from 'react';
import LoginForm from '../Componets/LoginForm.js';
import LoginShowcase from '../Componets/LoginShowcase.js';


const LoginPage = () => {
  return (
  
    <div className='createUserFlex'>
      <LoginShowcase />
      <LoginForm />
    </div>
   
  );
};

export default LoginPage;
import React from 'react';
import CreateUserForm from '../Componets/CreateUserForm.js';
import CreateUserShowcase from '../Componets/CreateUserShowcase.js';

const LoginPage = () => {
  return (
    <div className='createUserFlex'>
      <CreateUserShowcase />
      <CreateUserForm />
    </div>
  );
};

export default LoginPage;
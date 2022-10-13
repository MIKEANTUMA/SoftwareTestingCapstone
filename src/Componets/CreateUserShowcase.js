import React from 'react';
import createUserImage from '../images/createUserImage.jpg';

const CreateUserShowcase = () => {
  return (
    <div className='leftShowcase'>
      <img src={createUserImage} className='loginImage' />
    </div>
  );
};

export default CreateUserShowcase;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import avatar from '../images/avatar.jpg';

function Header() {
  return (
    <header>
      <section className='profile'>
        <Image className='profilePic' roundedCircle src={avatar} alt="Ahmed Ramic Pic" />
        <h1>
          <strong>Ahmed Ramic</strong>
          <br />
          <span>Welcome to my portfolio!</span>
        </h1>
      </section>
    </header>
  );
}

export default Header;

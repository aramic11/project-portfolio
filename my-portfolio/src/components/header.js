import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Contact from './contact';
import avatar from '../images/avatar.jpg';

function Header() {
  return (
    <header>
      <section className='profile'>
        <Image className='profilePic' roundedCircle src={avatar} alt="Ahmed Ramic Pic" />
        <h1>
          <strong>Hi, I'm Ahmed Ramic</strong>
          <br />
          <span>Future Software Engineer</span>
        </h1>
      </section>
      <Contact />
    </header>
  );
}

export default Header;

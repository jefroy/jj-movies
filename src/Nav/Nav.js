import React, {useEffect, useState} from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  // scroll listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100){
        handleShow(true);
      } else{
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>

      <img
          className='nav__logo'
          src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=939%2C587"
          alt="netflix logo"
      />

      <img
          className='nav__avatar'
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="avatar logo"
      />
      
    </div>
  )
}

export default Nav;

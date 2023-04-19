import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <div>
        <footer className='footer'>
        <div className='icons'>
                    <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                &copy; All rights Reserved
              </footer>
    </div>
  )
}

export default Footer
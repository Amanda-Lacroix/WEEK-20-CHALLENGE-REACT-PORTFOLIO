import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

   return (
    <div class="social-container" className="box-style" id="contact">
      <a href="https://www.instagram.com/feet_heartbeat_will_travel"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}

      </a>
    </div>
  );
};

export default Footer;


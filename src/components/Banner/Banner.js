import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import banner from '../../assets/img/campaign-banner-5c3394a821a90.jpg';

const Banner = () => {
  return (
    <div>
      <Link to="/">
        <img src={banner} alt="banner" id="banner" />
      </Link>
    </div>
  );
};
export default Banner;

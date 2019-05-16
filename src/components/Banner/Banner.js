import React from 'react';
import { Link } from 'react-router-dom'
import './Banner.css'

export const Banner = () => {

    return (
            <div>
            <Link><img src={require('../../assets/img/campaign-banner-5c3394a821a90.jpg')} alt="banner" id="banner"/></Link>
            </div>
            )
    }
            
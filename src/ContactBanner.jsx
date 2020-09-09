import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactBanner.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from '@material-ui/core';

function ContactBanner() {
    return (
        <div className="contact-banner">
            <div className="banner-social">
                <Link to = "">
                   <FacebookIcon className="social-icons" />
                </Link>

                <Link>
                    <TwitterIcon className="social-icons"/>
                </Link>

                <Link>
                    <InstagramIcon className="social-icons"/>
                </Link>

                <Link>
                    <LinkedInIcon className="social-icons"/>
                </Link> 
            </div>

            <div className="banner-contact"> 
         
                <div className="banner-phone">
                  <PhoneIcon className="contact-icon" /><h3 className="contact-txt">+ 1 324 3322</h3>
               </div>
            
               
             <Link className="banner-link-email">
                <div className="banner-email">
                  <EmailIcon className="contact-icon" /><h3 className="contact-txt">Genr8-3D.com/shop</h3>
               </div>
             </Link>
               
            </div>
        </div>
    )
}

export default ContactBanner;

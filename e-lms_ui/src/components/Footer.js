import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faFax,faMapPin } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
       <div className="footer">
           <div className="footer__logo">
                <h2>E-Learning Management System</h2>
           </div>
           <div className="row">
                    <div className="col-lg-6">
                       <div className="line">
                            <FontAwesomeIcon icon={faPhone} className="icon"/>
                            <p>0999-1234-456</p>
                       </div>
                       <div className="line">
                            <FontAwesomeIcon icon={faFax} className="icon"/>
                            <p>(03) 967-1234</p>
                       </div>
                       <div className="line">
                            <FontAwesomeIcon icon={faMapPin} className="icon"/>
                            <p>Sogod, Southern Leyte</p>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="line">
                            <FontAwesomeIcon icon={faMapPin} className="icon"/>
                            <p>Sogod, Southern Leyte</p>
                       </div>
                       <div className="line">
                            <FontAwesomeIcon icon={faMapPin} className="icon"/>
                            <p>Sogod, Southern Leyte</p>
                       </div>
                    </div>
                </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="copyright">
                        <small>&copy; Copyright  2021 All Rights Reserved</small>
                    </div>
                </div>
            </div>
            
       </div>
    );
}

export default Footer;
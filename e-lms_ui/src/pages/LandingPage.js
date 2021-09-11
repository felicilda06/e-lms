import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate,faBook, faSearch } from '@fortawesome/free-solid-svg-icons';

function LandingPage(){
    return(
        <div className="hero-container">
            <div className="hero" style={{backgroundImage: 'url("./images/bg.jpg")'}}>
                <div className="overlay"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>The E-Learning Management System</h1> 
                        <p>A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. While teaching can be based in or out of the classrooms, the use of computers and the Internet forms the major component of E-learning.</p>
                        <div className="hero__buttons">
                            <button className="red">Get 1 month free trial</button>
                            <button className="main">Update school account</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="circle">
                        <div className="center">
                                <FontAwesomeIcon icon={faUserGraduate} className="icon"/>
                                <h2>Student Progress</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="circle">
                            <div className="center">
                            <FontAwesomeIcon icon={faBook} className="icon"/>
                                <h2>Learning Materials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="circle">
                            <div className="center">
                                <FontAwesomeIcon icon={faSearch} className="icon"/>
                                <h2>Student Overview</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;
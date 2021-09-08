
import bgSignUp from '../images/signup4.jpg';
import Footer from '../components/Footer'
import {Link} from 'react-router-dom';
import React from 'react';

function SignUp(){
    return(
        <div>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex justify-center items-center w-full h-full flex-col px-5 py-20 lg:flex-row lg:py-28 lg:px-28 md:flex-col md:px-28 md:py-28">
                    <div className="relative left-side w-full h-full shadow-xl">
                        <div className="w-full h-full bg-cover bg-no-repeat bg-center lg:rounded-tl-lg lg:rounded-bl-lg" style={{backgroundImage: `url(${bgSignUp})`}}>
                            <div className="w-full h-full bg-black absolute top-0 opacity-60 lg:rounded-tl-lg lg:rounded-bl-lg "></div>
                        </div>
                        <div className="w-full h-full z-10 absolute top-0 flex justify-center items-center flex-col font-poppins">
                            <Link to={'/'}>
                                <i className="fa fa-arrow-left text-white cursor-pointer absolute top-4 left-4 hover:text-gray-300"></i>
                            </Link>
                            <h1 className="text-gray-100 text-lg mb-10 px-6 lg:mb-48 lg:text-2xl md:text-xl">Create an Account</h1>
                            <div className="flex flex-col text-gray-50 text-calc-1">
                                <button className="p-2 border-2 border-gray-50 rounded-lg hover:bg-gray-500 hover:transition ease-in-out duration-200"><i className="fa fa-user-o"></i>&nbsp;&nbsp;Sign-up as teacher</button>
                                <button className="p-2 border-2 border-gray-50 rounded-lg mt-4 hover:bg-gray-500 hover:transition ease-in-out duration-200"><i className="fa fa-user"></i>&nbsp;&nbsp;Sign-up as student</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="right-side w-full h-full border-2 border-gray-400 shadow-xl rounded-tr-none relative overflow-y-scroll lg:rounded-tr-lg lg:rounded-br-lg lg:overflow-y-hidden">
                        <div className="absolute h-full w-full text-gray-700 font-poppins py-2 lg:py-4" id="teacher-sign-up">
                            <form>
                                <i className="fa fa-user-circle-o w-full text-center mt-0 text-2xl lg:text-4xl lg:mt-2"></i>
                                <div className="text-calc-6 mt-4 absolute flex justify-center item-center w-full">
                                    <div className="mr-8 lg:mr-3" id="teacher-information">
                                        <span className="font-semibold text-calc-3 text-gray-600">Personal Information</span>
                                        <div className="form-input">
                                            <small>Teacher's Id <i className="fa fa-question-circle"></i></small>
                                            <input type="text" className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1"></input>
                                        </div>
                                        <div className="form-input mt-3">
                                            <small>Teacher's Name <i className="fa fa-question-circle"></i></small>
                                            <input type="text" className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1"></input>
                                        </div>
                                        <div className="form-input mt-3">
                                            <small>Contact No. <i className="fa fa-question-circle"></i></small>
                                            <input type="number" className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1"></input>
                                        </div>
                                        <div className="form-input mt-3 mb-6">
                                            <small>School <i className="fa fa-question-circle"></i></small>
                                            <select className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1 w-full">
                                                <option>--Select--</option>
                                                <option>TOCS-SSES</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="teacher-account-details">
                                        <span className="font-semibold text-calc-3 text-gray-600">Account Details</span>
                                        <div className="form-input">
                                            <small>Username <i className="fa fa-question-circle"></i></small>
                                            <input type="text" className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1"></input>
                                        </div>
                                        <div className="form-input mt-3">
                                            <small>Email address <i className="fa fa-question-circle"></i></small>
                                            <input type="email" className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1"></input>
                                        </div>
                                        <div className="form-input mt-3">
                                            <small>Password <i className="fa fa-question-circle"></i></small>
                                            <input type="password" className="block outline-none bg-white border-2 border-gray-400 text-calc-3 p-1 rounded-sm mt-1"></input>
                                        </div>
                                        <div className="form-input mt-9">
                                            <button className="block outline-none text-calc-1 p-2 rounded-lg mt-1 w-full text-gray-50 bg-blue-600 hover:bg-blue-700 hover:transition ease-in-out duration-200">Save Account</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default SignUp;
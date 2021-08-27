import School2 from '../images/school2.jpg'
import Footer from '../components/Footer';
import LoginForm from '../pages/Login';
import React from 'react';

function LandingPage(){
    return(
        <div className="w-full h-screen overflow-y-scroll overflow-x-hidden">
            <div className="relative w-full h-80 bg-center bg-no-repeat bg-cover shadow-xl" style={{backgroundImage: `url(${School2})`}}>
                <div className="w-full h-full bg-black opacity-70">
                </div>
                <div className="absolute top-0 w-full h-full  flex items-center font-poppins text-justify px-10 lg:px-56 md:px-28">
                    <div className="mt-10">
                        <h2 className="font-semibold text-red-500 text-md lg:text-3xl md:text-2xl">The E-Learning Management System</h2>
                        <p className="mt-2 justify-center text-gray-50 text-calc-1 lg:text-lg">A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. While teaching can be based in or out of the classrooms, the use of computers and the Internet forms the major component of E-learning.</p>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full flex justify-center bg-gray-50 py-20 lg:py-16 md:py-32">
                <LoginForm/>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;
import React from 'react';
import Footer from '../components/Footer';

function LandingPage(){
   return(
    <div className="h-screen w-screen">
        <div className="main-content w-full h-96 bg-cover bg-no-repeat relative" style={{backgroundImage : `url("/images/books1.jpg")`}}>
            <div className="overlay w-full h-full bg-black opacity-75 absolute">
            </div>
            <div className="content w-full h-full absolute top-0 z-10 text-lightGray flex justify-center flex-col px-10 lg:px-20 md:px-20">
                <h1 className="title mt-12 text-lg font-semibold lg:text-4xl md:text-4xl">
                    The E-Learning Management System
                </h1>
                <p className="mt-2 text-justify text-sm lg:text-lg lg:mt-4 md:text-lg md:mt-4">
                    A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. 
                    While teaching can be based in or out of the classrooms, the use of computers and the Internet forms 
                    the major component of E-learning.
                </p>
                <div className="buttons mt-4">
                    <button className="bg-lightRed mr-4 mb-4 py-2 px-3 text-xs rounded-full transisiton ease-out duration-150 hover:bg-darkRed">Get 1 month free trial</button>
                    <button className="bg-secondary mb-4 py-2 px-3 text-xs rounded-full transisiton ease-out duration-150 hover:bg-primary">Update school account</button>
                </div>
                </div>
        </div>
        <div className="features w-full h-auto mb-10">
           <div className="w-full flex justify-center items-center gap-10 mt-10 flex-col lg:flex-row lg:gap-40 md:flex-row md:gap-40">
               <div className="flex justify-center flex-col items-center w-40 h-40 rounded-full bg-gray-300 text-gray-700">
                  <i className="fa fa-tasks animate-bounce text-4xl"></i>
                  <p className="w-16 mt-2">Student Progress</p>
               </div>
               <div className="flex justify-center flex-col items-center w-40 h-40 rounded-full bg-gray-300 text-gray-700">
                  <i className="fa fa-book animate-bounce text-4xl"></i>
                  <p className="w-16 mt-2">Learning Materials</p>
               </div>
               <div className="flex justify-center flex-col items-center w-40 h-40 rounded-full bg-gray-300 text-gray-700">
                  <i className="fa fa-search animate-bounce text-4xl"></i>
                  <p className="w-16 mt-2">Student Overview</p>
               </div>
           </div>
        </div>
        <Footer/>
    </div>
   )
}

export default LandingPage;
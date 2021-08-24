import Footer from '../components/Footer';
import School2 from '../images/school2.jpg'
import Login from '../images/login1.jpg'
import React from 'react';

function LandingPage(){
    return(
        <div className="w-screen h-screen overflow-y-scroll">
            <div className="relative w-full h-80 bg-center bg-no-repeat bg-cover border-b-2 shadow-xl" style={{backgroundImage: `url(${School2})`}}>
                <div className="w-full h-full bg-black opacity-70">
                </div>
                <div className="absolute top-0 w-full h-full  flex items-center font-poppins text-justify px-10 lg:px-56 md:px-28">
                    <div className="mt-10">
                        <h2 className="font-semibold text-red-500 text-md lg:text-3xl md:text-2xl">The E-Learning Management System</h2>
                        <p className="mt-2 justify-center text-gray-50 text-calc-1 lg:text-lg">A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. While teaching can be based in or out of the classrooms, the use of computers and the Internet forms the major component of E-learning.</p>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full flex justify-center bg-gray-100 px-10 py-20 lg:py-16 md:py-32">
                <div className="w-96 h-auto rounded-md border-2 border-gray-300 shadow-xl bg-gray-50 pb-12">
                    <div className="relative w-full h-16 rounded-t-md bg-center bg-no-repeat bg-cover border-b border-gray-300" style={{backgroundImage: `url(${Login})`}}></div>
                    <div className="relative -top-8 z-10 flex justify-center">
                       <div className="w-14 h-14 bg-gray-100 flex justify-center items-center rounded-full">
                         <i className="fa fa-user text-4xl text-gray-500"></i>
                       </div>
                    </div>
                    <form>
                        <div className="form-group w-full flex justify-center flex-col font-poppins">
                            <div className="form-input w-full flex justify-center">
                                <input type="text" className="border-b-2 outline-none border-gray-500 text-center text-gray-800 bg-gray-50 p-2" placeholder="Enter email or phone"></input>
                            </div>
                            <div className="form-input w-full flex justify-center mt-6">
                                <input type="password" className="border-b-2 outline-none border-gray-500 text-center text-gray-800 bg-gray-50 p-2" placeholder="Enter password"></input>
                            </div>
                            <div className="form-input w-full flex mt-5 mx-20">
                                <input type="checkbox" className="mt-1 mr-1 h-4 outline-none" id="form-check"></input>
                                <label for="form-check" className="text-gray-600 text-md cursor-pointer">Remember Me</label>
                            </div>
                            <div className="w-full h-full flex justify-center">
                                <button className="mt-4 outline-none w-40 h-full bg-blue-500 p-1 uppercase rounded-full text-gray-50 hover:bg-blue-600">Login</button>
                            </div>
                           <div className="w-full mt-4 px-20">
                                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                           </div>
                            <div className="mt-10 flex justify-center">
                                <span className="text-gray-600">Don't have an account?<a href="#" className="text-blue-500 hover:underline">&nbsp;Sign-up here</a></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;
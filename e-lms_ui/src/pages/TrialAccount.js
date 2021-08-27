import LandingPage from './LandingPage';
import { Link } from 'react-router-dom';
import React from 'react';

function TrialAccount(){
    return(
        <div className="w-screen h-screen absolute top-0">
            <LandingPage/>
            <div className="w-screen h-screen absolute top-0 z-10 bg-black opacity-70 transition ease-in-out duration-500 delay-75">
            </div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center font-poppins px-2">
                <div className="w-96 h-96 rounded-md bg-white z-10 border-2 border-gray-600">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex justify-center items-center mt-2 ml-auto mr-3 hover:bg-red-600">
                        <Link to={'/'}>
                            <i className="fa fa-close text-gray-50 text-lg"></i>
                        </Link>
                    </div>
                   <form autocomplete="off">
                        <div className="flex justify-between items-center flex-col mt-4 text-gray-700 px-2">
                           <div className="relative w-full px-8 mt-1">
                               <input type="text" className="w-full py-2 border-2 border-gray-400 rounded-md text-center text-calc-1 outline-none"></input>
                               <small className="absolute -top-3 left-12 bg-white px-1 text-gray-500">School Id</small>
                           </div>
                           <div className="relative w-full px-8 mt-5">
                               <input type="text" className="w-full py-2 border-2 border-gray-400 rounded-md text-center text-calc-1 outline-none"></input>
                               <small className="absolute -top-3 left-12 bg-white px-1 text-gray-500">Name of School</small>
                           </div>
                           <div className="relative w-full px-8 mt-5">
                               <input type="text" className="w-full py-2 border-2 border-gray-400 rounded-md text-center text-calc-1 outline-none"></input>
                               <small className="absolute -top-3 left-12 bg-white px-1 text-gray-500">Address of School</small>
                           </div>
                           <div className="relative w-full px-8 mt-5">
                               <input type="text" className="w-full py-2 border-2 border-gray-400 rounded-md text-center text-calc-1 outline-none"></input>
                               <small className="absolute -top-3 left-12 bg-white px-1 text-gray-500">Principal Name</small>
                           </div>
                        </div>
                        <div className="w-full flex justify-center mt-3">
                            <button className=" w-40 text-center bg-blue-600 p-2 text-calc-1 rounded-full text-gray-50 hover:bg-blue-700 hover:transition ease-in-out duration-200">Start Free Trial</button>
                        </div>
                        <div className="mt-2 px-8 flex justify-center item-center">
                            <small className="text-gray-500 text-center">Free 30 days trial. After 30 days of trial, the account of your school will be expired.</small>
                        </div>
                   </form>
                </div>
            </div>
        </div>
    );
}

export default TrialAccount;
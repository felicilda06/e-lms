import LandingPage from '../pages/LandingPage';
import { Link } from 'react-router-dom';
import React from 'react';

function Announcement(){
    return(
        <div className="w-screen h-screen absolute top-0">
            <LandingPage/>
            <div className="w-screen h-screen absolute top-0 z-10 bg-black opacity-60 transition ease-in-out duration-500 delay-75">
            </div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center font-poppins">
                <div className="w-96 h-96 rounded-md bg-gray-200 z-10 border-2 border-gray-600">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex justify-center items-center mt-2 ml-auto mr-3 hover:bg-red-600">
                        <Link to={'/'}>
                            <i className="fa fa-close text-gray-50 text-lg"></i>
                        </Link>
                    </div>
                    <h1 className="text-center mt-2 text-2xl text-gray-700 uppercase">Announcement</h1>
                    <div className="w-full px-6 mt-3 text-gray-700 list-none flex justify-center items-center flex-col">
                        <div>
                            <div className="my-2">
                                <li>What:&nbsp;&nbsp;PTCA Meeting</li>
                                <li>Where:&nbsp;&nbsp;TOCS-SLEC</li>
                                <li>When:&nbsp;&nbsp;August 28, 2021</li>
                                <li>Who:&nbsp;&nbsp;Both Teacher & Parents</li>
                                <small className="text-red-500">Note:&nbsp;&nbsp;Attendance is a must.</small>
                            </div>
                            <div className="my-4">
                                <li>What:&nbsp;&nbsp;BSP Meeting</li>
                                <li>Where:&nbsp;&nbsp;TOCS Plaza</li>
                                <li>When:&nbsp;&nbsp;August 30, 2021</li>
                                <li>Who:&nbsp;&nbsp;Both Teacher & Parents</li>
                                <small className="text-red-500">Note:&nbsp;&nbsp;Attendance is a must.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Announcement;
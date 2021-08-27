import {Link} from 'react-router-dom';
import React from 'react';

function Header(){
    return(
       <header className="text-gray-50">
           <div className="w-full fixed z-20 h-14 flex justify-between bg-blue-600 border-b border-gray-400 shadow-xl px-4">
               <div className="flex flex-col justify-center">
                   <h3 className="font-lobster text-calc-6 lg:text-calc-2 md:text-calc-2">E-Learning Management System</h3>
                   <label className="font-poppins text-calc-4 lg:text-calc-3 md:text-calc-3">Developed by: Richard I. Felicilda</label>
               </div>
               <div className="h-full my-4 absolute right-1 lg:right-6 md:right-6">
                    <Link to={'/trial'}>
                        <a className="bg-red-500 rounded-full text-gray-50 text-xs py-2 px-3 hover:bg-red-600 lg:text-calc-1 lg:px-4 md:text-calc-1 md:px-4">Get 1 Month Free Trial</a>
                     </Link>
               </div>
           </div>
       </header>
    );
}

export default Header;
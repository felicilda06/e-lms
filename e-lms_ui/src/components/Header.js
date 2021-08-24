import React from 'react';

function Header(){
    return(
       <header className="text-gray-50 w-full">
           <div className="w-full fixed z-10 h-14 flex justify-between bg-blue-600 border-b border-gray-400 shadow-xl px-4">
               <div className="flex flex-col justify-center">
                   <h3 className="font-lobster text-md lg:text-calc-2 md:text-calc-2">E-Learning Management System</h3>
                   <label className="font-poppins text-calc-4 lg:text-calc-3 md:text-calc-3">Developed by: Richard I. Felicilda</label>
               </div>
               <div className="h-full my-4 absolute right-4">
                     <a className="text-calc-1 cursor-pointer bg-blue-700 border-2 border-gray-200 py-2 px-3 rounded-full font-poppins hover:bg-blue-800"><i className="fa fa-bullhorn"></i><span className="hidden lg:inline-block md:inline-block">&nbsp;Announcement</span></a>
                     <div className="notification relative -top-9 w-5 h-5 bg-red-500 flex justify-center items-center rounded-full pointer-events-none left-5 lg:left-28 md:left-28">
                        <span className="text-gray-50">1</span>
                     </div>
               </div>
           </div>
       </header>
    );
}

export default Header;
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div className="header">
            <nav className="w-screen h-14 bg-secondary text-lightGray z-20 flex justify-between flex-col fixed lg:flex-row md:flex-row">
              <div className="title mt-3 ml-4">
                <i className="fa fa-graduation-cap"></i><h1 className="inline-block font-semibold text-sm lg:text-lg">&nbsp;E-Learning Management System</h1>
                <i className="fa fa-bars text-lg absolute right-8 top-3 cursor-pointer block lg:hidden md:hidden" onClick={toggle}></i>
              </div>
              <ul className={isOpen ?'bg-secondary mt-2 text-sm flex flex-col lg:flex-row md:flex-row':' hidden mt-2 text-sm lg:flex md:flex'}>
                  <li className="mr-4 py-2 pl-4 w-full cursor-pointer transisiton ease-in-out duration-300 hover:bg-primary lg:pl-0 lg:hover:bg-secondary md:pl-0 md:hover:bg-secondary">
                    <Link>LOGIN</Link>
                  </li>
                  <li className="mr-10 py-2 pl-4 w-full cursor-pointer transisiton ease-in-out duration-300 hover:bg-primary lg:pl-0 lg:hover:bg-secondary md:pl-0 md:hover:bg-secondary">
                    <Link>REGISTER</Link>
                  </li>
              </ul>
            </nav>    
        </div>
    )
}

export default Header;
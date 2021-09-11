import {Link} from 'react-router-dom';
import React from 'react';

function Header(){
    return(
       <nav>
           <div className="nav__logo">
               <h2>E-Learning Management System</h2>
           </div>
           <div className="nav__link">
               <button>Login</button>
               <button>Register</button>
           </div>
       </nav>
    );
}

export default Header;
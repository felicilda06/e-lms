import Login from '../images/login1.jpg'
import {Link} from 'react-router-dom';
import React from 'react';

function LoginForm(){
    return(
        <div className="w-96 h-auto rounded-md border-2 border-gray-300 shadow-xl bg-gray-50 pb-12">
                    <div className="relative w-full h-16 rounded-t-md bg-center bg-no-repeat bg-cover border-b border-gray-300" style={{backgroundImage: `url(${Login})`}}></div>
                    <div className="relative -top-8 z-10 flex justify-center">
                       <div className="w-14 h-14 bg-gray-100 flex justify-center items-center rounded-full">
                         <i className="fa fa-user text-4xl text-gray-500"></i>
                       </div>
                    </div>
                    <form>
                        <div className="form-group w-96 flex justify-center flex-col font-poppins px-12">
                            <div className="form-input flex justify-center flex-col items-center">
                                <input type="text" className="border-b-2 outline-none border-gray-500 text-center text-gray-800 bg-gray-50 p-2" placeholder="Enter email or phone"></input>
                                <small className="text-red-500 mt-2">Username is required.</small>
                            </div>
                            <div className="form-input flex justify-center mt-6 flex-col items-center">
                                <input type="password" className="border-b-2 outline-none border-gray-500 text-center text-gray-800 bg-gray-50 p-2" placeholder="Enter password"></input>
                                <small className="text-red-500 mt-2">Password is required.</small>
                            </div>
                            <div className="form-input w-full mt-6 pl-10 flex items-center">
                                <input type="checkbox" className="mr-1 outline-none cursor-pointer" id="form-check"></input>
                                <label for="form-check" className="text-gray-500 text-md cursor-pointer">Remember Me</label>
                            </div>
                            <div className="w-full h-full flex justify-center">
                                <button className="mt-4 outline-none w-40 h-full bg-blue-500 p-1 uppercase rounded-full text-gray-50 hover:bg-blue-600 hover:transition ease-in-out duration-200">Login</button>
                            </div>
                           <div className="w-full mt-4 pl-10">
                               <Link to={'/forgot-password'}>
                                 <a href="" className="text-blue-500 hover:underline">Forgot Password?</a>
                                </Link>
                           </div>
                            <div className="mt-10 w-full flex justify-center text-calc-3 lg:text-calc-6 md:text-calc-6">
                                <span className="text-gray-600">Don't have an account?<a href="" className="text-blue-500 hover:underline">&nbsp;<Link to={'/signup'}>Sign-up here</Link></a></span>
                            </div>
                        </div>
                    </form>
                </div>
    );
}
export default LoginForm;
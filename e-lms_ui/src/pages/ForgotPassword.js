import Footer from '../components/Footer'
import {Link} from 'react-router-dom';
import React from 'react';

function ForgotPassword(){
    return(
        <div>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-96 h-auto rounded-lg border-2 border-gray-300 shadow-xl bg-gray-50 pb-12">
                    <form autocomplete="off">
                        <div className="px-6 py-2 font-poppins text-gray-600">
                            <h2 className="text-center font-semibold mt-6">Recover Account</h2>
                            <i className="fa fa-lock w-full text-center text-6xl mt-6 text-gray-500"></i>
                           <div className="mt-2 w-full flex">
                             <span className="text-center text-calc-6">Enter the email or phone number associated with your account.</span>
                           </div>
                            <small className="block mt-4 text-center text-gray-500">We will email or send sms the link to reset your password.</small>
                            <div className="form-input w-full my-6 flex justify-center flex-col items-center">
                                <input className="text-center outline-none border-2 border-gray-300 w-60 p-2 text-sm rounded-md white" type="text" placeholder="Enter email address or phone"></input>
                                <small className="mt-2 text-red-500">Email or phone is required.</small>
                            </div>
                            <div className="flex justify-center flex-col item-center text-gray-50 px-20">
                                <button className="bg-blue-500 py-2 text-calc-1 rounded-xl hover:bg-blue-600 outline-none hover:transition ease-in-out duration-200">Send code via email</button>
                                <button className="mt-3 text-calc-1 bg-gray-500 py-2 rounded-xl outline-none hover:bg-gray-600 hover:transition ease-in-out duration-200">Send code via sms</button>
                            </div>
                            <div className="mt-3 w-full flex justify-center">
                                <Link to={'/'}>
                                    <small className="text-blue-600 hover:underline">Back to the homepage</small>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ForgotPassword;
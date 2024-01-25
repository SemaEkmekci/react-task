import React, { useState } from 'react';
import {handleChange,handleSubmit} from '../../utils/mainPage/formUtils';

const Contact = () => {

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
});

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-20 mt-8' id="contact">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
               
        <div className=" grid-cols-2 gap-4 flex">
          <div className='grid grid-cols-1 mt-20'>
            <img className="Rectangle5 w-[270px] h-[370px]" src="https://via.placeholder.com/270x370" />
            <img className="Rectangle8 w-[270px] h-[157px] mt-8" src="https://via.placeholder.com/270x157" />

          </div>

          <div className='grid grid-cols-1 '>
          <img className="Rectangle6 w-[170px] h-[270px]" src="https://via.placeholder.com/170x270" />
          <img className="Rectangle6 w-[170px] h-[270px] mt-8" src="https://via.placeholder.com/170x270" />
          </div>
        </div>

                <div className="mb-8 w-full sm:w-3/4 mx-auto">
                    <div className="container mx-auto px-4 sm:px-8">
                        <h2 className="mb-4 text-5xl font-bold">Contact us</h2>
                        <div className="mx-auto mt-7 mb-12">
                            <span className="text-sm text-gray-500">Our team would love to hear from you!</span>
                        </div>
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={(e) => handleChange(e,setFormData,formData)}
                                      
                                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={(e) => handleChange(e,setFormData,formData)}

                                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange(e,setFormData,formData)}

                                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                        type="email"
                                        placeholder="Email address"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <textarea
                                        name="message"

                                        value={formData.message}
                                        onChange={(e) => handleChange(e,setFormData,formData)}

                                        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <button
                                        className="appearance-none block w-full bg-orange-500 hover:bg-orange-700 text-white font-bold leading-tight py-3 px-6 rounded focus:outline-none focus:shadow-outline-orange"
                                        type="button"
                                        onClick={(e) => handleSubmit(e,formData)}
                                    >
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

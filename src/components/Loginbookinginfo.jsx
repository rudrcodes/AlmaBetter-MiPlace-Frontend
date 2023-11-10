
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BsFacebook,BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";



const Loginbookinginfo = () => {
        const [phoneNumber, setPhoneNumber] = useState("");

        return (
            <div className="bg-white   w-[49.375rem] h-[28.4375rem]   rounded-lg shadow-md flex font-mullish  gap-4  ">
                
                <div className="mx-[1.5rem] my-[1.5rem] flex-1 flex  flex-col gap-[1rem]">
                    <h1 className="text-3xl font-semibold">Login or Sign up to book</h1>
                    
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-[46.375rem]"
                    />
                    
                    <p>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                    </p>
                
                    <button className="mt-4 bg-[#1E91B6] text-white py-2 px-4 rounded-md w-[46.375rem]">
                        <Link to="/otp" >
                        Continue
                        </Link>
                    </button>

                    <div class="flex">
                    <div className="w-[21.0625rem] h-1 bg-[#D9D9D9]"></div>
                    <div >
                        <h3 classname="flex font-semibold">Or</h3>
                    </div>
                    <div className="w-[21.0625rem] h-1 bg-[#D9D9D9]"></div>
                    </div>

                    <div class="flex justify-between">
                        <div className="w-[14.791875rem] h-[3.5rem] border-solid border-2 border-[#1E91B6] flex items-center justify-center"><BsFacebook /></div>
                        <div className="w-[14.791875rem] h-[3.5rem] border-solid border-2 border-[#1E91B6] flex items-center justify-center "><FcGoogle/></div>
                        <div className="w-[14.791875rem] h-[3.5rem] border-solid border-2 border-[#1E91B6] flex items-center justify-center"><BsApple/></div>
                    </div>

                    <div class=" border-solid border-2 border-[#1E91B6] w-[46.375rem] h-[3.5rem]">
                        <div className=" flex items-center justify-center" ><MdEmail/>Continue with email</div>
                    </div>

                </div>

                
            </div>

        );
    };


export default Loginbookinginfo;
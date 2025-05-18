import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);

    const [formData, setFormData] = useState({

        email: '',
        password: '',

    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const requiredFields = ['email', 'password'];
    const isFormValid = requiredFields.every((field) => formData[field].trim());

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsValid(true);
        if (!isFormValid) return;
        console.log('Login Successfully', formData);
        navigate('/user');
    };

    return (
        <div className="bg-[#F7F8F9] w-[375px] h-[812px] border-2 border-gray-200">
            <h1 className="text-[28px] text-left leading-[36px] w-[188px] h-[69px] font-medium text-[#1D2226] ml-[20px] mt-[40px]">Signin to your PopX account</h1>

            <p className='text-[#1D2226] text-left font-normal w-[232px] h-[48px] opacity-60 text-[18px] leading-[26px] ml-[20px] mt-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>



            <form className='mt-[33px] space-y-[23px]' onSubmit={handleSubmit}>


                {/* email */}

                <div className="relative">
                    <input id='email' type='email' value={formData.email} onChange={handleChange} placeholder='Enter email address' autoComplete="off" className={`appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] ${isValid && !formData.name.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <lable htmlFor='email' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[13px] bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] ${isValid && !formData.name.trim() ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Email address
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal leading-[17px]">*</span>
                    </lable>
                </div>

                {/* Password */}

                <div className="relative">
                    <input id='password' type='password' value={formData.password} onChange={handleChange} placeholder='Enter password' autoComplete="off" className={`appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] ${isValid && !formData.name.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <lable htmlFor='password' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[39px] bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] ${isValid && !formData.name.trim() ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Password
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal leading-[17px]">*</span>
                    </lable>
                </div>

                <button type="submit" className={`cursor-pointer  mt-[14px] ml-[20px] mr-[20px]  font-medium text-[16px] text-center leading-[17px] rounded-md w-[335px] h-[46px] py-[13px] ${isFormValid ? "bg-[#6C25FF] text-[#FFFFFF] " : "bg-[#CBCBCB] text-[#FFFFFF] cursor-not-allowed"}`}>
                    Login
                </button>

            </form>

        </div>
    );
};

export default Login;
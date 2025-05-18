import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='bg-[#F7F8F9] w-[375px] h-[730px] border-2 border-gray-200 flex flex-col justify-end'>
            <div >
                <h1 className='font-medium text-[28px] text-[#1D2226] leading-[17px] text-left ml-[20px] w-[231px] h-[33px]  '>Welcome to PopX</h1>
                <p className='text-left font-normal opacity-60 leading-[26px] text-[#1D2226] mt-[10px]  ml-[20px] w-[232px] h-[48px] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className='flex flex-col gap-[10px] font-medium mt-[29px] mb-[41px]'>
                <Link to='/registration'>
                    <button className='text-center text-[#FFFFFF] text-[16px] px-[107px] py-[13px] ml-[20px] mr-[20px] w-[335px] h-[46px] bg-[#6C25FF] leading-[17px] rounded-md cursor-pointer active:bg-[#8970bf] hover:bg-[#8970bf] active:text-[#1D2226] hover:text-[#1D2226] transition-all duration-300 ease-in-out'>
                        Create Account
                    </button>
                </Link>
                <Link to='/login'>
                    <button className='text-center text-[#1D2226] text-[16px] px-[66px] py-[13px] ml-[20px] mr-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] leading-[17px] rounded-md cursor-pointer active:bg-[#6C25FF] hover:bg-[#6C25FF] active:text-[#FFFFFF] hover:text-[#FFFFFF] transition-all duration-300 ease-in-out'>
                        Already Registered? Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
import { useState } from "react";
import { useNavigate } from "react-router";



const Registration = () => {

    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: '',
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleRadioChange = (e) => {
        setFormData((prev) => ({ ...prev, agency: e.target.value }));
    };

    const requiredFields = ['name', 'phone', 'email', 'password', 'agency'];
    const isFormValid = requiredFields.every((field) => formData[field].trim());

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsValid(true);
        if (!isFormValid) return;
        console.log('Form Submit Successfully', formData);
        navigate('/login');
    };


    return (
        <div className="bg-[#F7F8F9] w-[375px] h-[812px] border-2 border-gray-200">
            <h1 className="text-[28px] text-left leading-[36px] w-[188px] h-[69px] font-medium text-[#1D2226] ml-[20px] mt-[40px] mb-[31px]">Create your PopX account</h1>
            <form className="mt-[31px] space-y-[29px]" onSubmit={handleSubmit}>

                {/* Full name */}

                <div className="relative">
                    <input id='name' type='text' value={formData.name} onChange={handleChange} placeholder='Enter full name' autoComplete="off" className={` appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] ${isValid && !formData.name.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF] "}`} />

                    <lable htmlFor='name' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[26px] bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] ${isValid && !formData.name.trim() ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Full name
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal leading-[17px]">*</span>
                    </lable>
                </div>


                {/* phone */}

                <div className="relative">
                    <input id='phone' type='tel' value={formData.phone} onChange={handleChange} placeholder='Enter phone number' autoComplete="off" className={`appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] ${isValid && !formData.name.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <lable htmlFor='phone' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[0px]  bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] ${isValid && !formData.name.trim() ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Phone number
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal leading-[17px]">*</span>
                    </lable>

                </div>



                {/* email */}

                <div className="relative">
                    <input id='email' type='email' value={formData.email} onChange={handleChange} placeholder='Enter email address' autoComplete="off" className={`appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] ${isValid && !formData.name.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <lable htmlFor='email' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[1px] bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] ${isValid && !formData.name.trim() ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Email address
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal leading-[17px]">*</span>
                    </lable>
                </div>

                {/* Password */}

                <div className="relative">
                    <input id='password' type='password' value={formData.password} onChange={handleChange} placeholder='Enter password' autoComplete="off" className={`appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] ${isValid && !formData.name.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <lable htmlFor='password' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[23px] bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] ${isValid && !formData.name.trim() ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Password
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal leading-[17px]">*</span>
                    </lable>
                </div>


                {/* Company */}

                <div className="relative">
                    <input id='company' type='text' value={formData.company} onChange={handleChange} placeholder='Enter company name' autoComplete="off" className={`appearance-none w-[335px] h-[40px] ml-[20px] mr-[20px] rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-[16px] pt-[12px] pb-[11px] placeholder:text-[14px] placeholder:h-[17px] placeholder:text-[#919191] border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]`} />

                    <lable htmlFor='company' className={`absolute left-[28px] -top-2 mb-[34px] pl-[5px] pr-[0px] bg-[#F7F8F9]  text-[13px] text-left leading-[17px] font-normal  pb-[2px]  h-[15px] text-[#6C25FF]`}>
                        Company name

                    </lable>
                </div>

                {/* Radio */}

                <div>
                    <h3 className="text-[#1D2226] text-[13px] font-normal text-left ml-[20px] leading-[17px]  h-[15px]">Are you an Agency?  <span className="text-[#DD4A3D] ml-0">*</span></h3>

                    <div className="flex gap-[23px] mt-[10px] ml-[20px]">
                        <label className="flex items-center gap-[12px] text-[14px] text-[#1D2226] text-left cursor-pointer relative">
                            <input type="radio" name='agency' value='Yes' checked={formData.agency === 'Yes'} onChange={handleRadioChange} className="w-[22px] h-[22px] cursor-pointer peer appearance-none border border-[#919191] rounded-full relative " />
                            <span className="pointer-events-none absolute left-0 top-0 w-[22px] h-[22px] rounded-full ring ring-[#642AF5] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>

                            <span className="pointer-events-none absolute left-[5px] top-[5px] w-[12px] h-[12px] rounded-full bg-[#6C25FF] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>

                            Yes
                        </label>

                        <label className="flex items-center gap-[12px] text-[14px] text-[#1D2226] text-left relative">
                            <input type="radio" name='agency' value='No' checked={formData.agency === 'No'} onChange={handleRadioChange} className="w-[22px] h-[22px] cursor-pointer peer appearance-none border border-[#919191] rounded-full relative" />
                            <span className="pointer-events-none absolute left-0 top-0 w-[22px] h-[22px] rounded-full ring ring-[#642AF5] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>

                            <span className="pointer-events-none absolute left-[5px] top-[5px] w-[12px] h-[12px] rounded-full bg-[#6C25FF] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>
                            No
                        </label>

                    </div>
                </div>

                <button type="submit" className={`cursor-pointer mb-[30px] mt-[150px] ml-[20px] mr-[20px]  font-medium text-[16px] text-center leading-[17px] rounded-md w-[335px] h-[46px] py-[13px] ${isFormValid ? "bg-[#6C25FF] text-[#FFFFFF] " : "bg-[#CBCBCB] text-[#FFFFFF] cursor-not-allowed"}`}>
                    Create Account
                </button>



            </form>

        </div>
    );
};

export default Registration;
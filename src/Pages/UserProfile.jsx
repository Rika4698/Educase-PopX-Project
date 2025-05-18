import picture from "../assets/profile.png";
import camera from "../assets/camera.png";

const UserProfile = () => {
    return (
        <div className='bg-[#F7F8F9] w-[375px] h-[812px] border-2 border-gray-200'>
            <div className='bg-[#FFFFFF]  h-[68px]  drop-shadow shadow-[0px_3px_6px_#00000007] '>
                <h1 className='text-[18px] text-[#1D2226] leading-[21px] font-normal pl-[15px] pt-[27px] pb-[19px] capitalize'>Account Settings</h1>

            </div>
            <div className=" mt-[30px] ml-[20px] ">
                <div className="flex items-start gap-[20px]">
                    <img src={picture} alt="profile picture" className="relative" />
                    <img src={camera} alt="camera" className="absolute ml-14.5 mt-12.5 " />
                    <div className="space-y-[6px]">
                        <h2 className="font-medium text-[#1D2226] text-left text-[15px]leading-[19px]  h-[18px] capitalize">Marry Doe</h2>
                        <p className="text-[#1D2226] text-[14px] text-left leading-[19px] font-normal h-[17px] capitalize">Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className="text-[14px] text-left w-[337px] h-[63px] capitalize leading-[22px] mt-[30px] mr-[18px]  ">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>

            <p className="mt-[20px]  border-t border-[length:1px] border-transparent" style={{
                borderImage: "repeating-linear-gradient(to right, #CBCBCB 0 4px, transparent 4px 8px)",
                borderImageSlice: 50,
            }}></p>

            <p className="mt-[485px]  border-t border-[length:1px] border-transparent" style={{
                borderImage: "repeating-linear-gradient(to right, #CBCBCB 0 4px, transparent 4px 8px)",
                borderImageSlice: 50,
            }}></p>









        </div>
    );
};

export default UserProfile;
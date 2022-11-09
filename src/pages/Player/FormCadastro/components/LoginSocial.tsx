import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";

const LoginSocial = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <span className="h-[1px] bg-[#222937] flex-1" />
        <p>ou</p>
        <span className="h-[1px] bg-[#222937] flex-1" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-y-5 flex-wrap">
        <span className="border border-[#E83B69] px-5 py-2.5 rounded cursor-pointer hover:bg-[#cf2251] w-fit mx-auto">
          <FaGoogle className="w-7 h-7" />
        </span>
        <span className="border border-[#E83B69] px-5 py-2.5 rounded cursor-pointer hover:bg-[#cf2251] w-fit mx-auto">
          <FaFacebookF className="w-7 h-7" />
        </span>
        <span className="border border-[#E83B69] px-5 py-2.5 rounded cursor-pointer hover:bg-[#cf2251] w-fit mx-auto">
          <FaTwitter className="w-7 h-7" />
        </span>
        <span className="border border-[#E83B69] px-5 py-2.5 rounded cursor-pointer hover:bg-[#cf2251] w-fit mx-auto">
          <FaDiscord className="w-7 h-7" />
        </span>
      </div>
    </>
  );
};

export default LoginSocial;

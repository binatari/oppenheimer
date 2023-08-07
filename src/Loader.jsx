
import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=' w-full bg-black h-screen flex flex-col justify-center text-center items-center'>
        <img src='/boom.gif' />
        <p className=' text-[30px] font-medium text-[#df5722]'>Loading</p>
      </div>
    </div>
  );
};

export default Loader;

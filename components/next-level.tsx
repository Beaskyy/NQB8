import React from "react";
import { Button } from "./ui/button";

export const NextLevel = () => {
  return (
    <div>
      <div className="py-[96px]">
        <h2 className="text-[#020120] md:text-[55.45px] text-[26px] md:leading-[68px] font-normal tracking-[-1px] max-w-[811px]">
          Helping your business unlock its full potential and achieve genuine
          success
        </h2>
      </div>
      <div className="flex justify-between lg:flex-row flex-col gap-16">
        <div className="bg-[url('/innovate.jpeg')] md:w-[687px] w-full md:h-[562px] h-64 bg-cover bg-center bg-no-repeat rounded-2xl"></div>
        <div className="pt-11 max-w-[444px] flex flex-col gap-[22px]">
          <h2 className="text-[32px] text-[#020120] leading-[44px] tracking-[-1.5%]">
            Ready to take your business to the next level? Let’s make success
            happen together!
          </h2>
          <Button>Let’s talk</Button>
        </div>
      </div>
    </div>
  );
};

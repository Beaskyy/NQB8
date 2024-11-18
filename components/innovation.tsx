import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const Innovation = () => {
  return (
    <div className="lg:px-[148px] md:px-[100px] px-5 py-[18px]">
      <p className="lg:text-lg md:text-sm text-xs text-[#002B31] tracking-[-0.05px] my-4">
        Imagine, create, succeed — it all starts with an idea!
      </p>
      <h2 className="md:text-[54px] text-[26px] text-[#002B31] tracking-[-0.09px] font-normal md:leading-[69px] max-w-[897.56px]">
        Our software suite amplifies opportunity for venture and private equity
        firms, regardless of stage or provider.
      </h2>
      <div className="flex flex-col gap-6 mt-8">
        <div className="relative bg-[url('/strategy.png')] bg-cover bg-no-repeat w-full min-h-[500px] rounded-3xl">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ backgroundColor: "#00000033" }}
          ></div>
          <div className="absolute md:left-[38px] md:top-[271px] left-5 top-40 flex flex-col gap-[69px] max-w-[445px]">
            <h4 className="text-white text-[36.72px]">Strategy & Research</h4>
            <p className="text-white text-lg leading-[25px]">
              Forget your wishlist, business is fundamentally built on market
              realities. We go to the heart of where it is happening before we
              design any strategy.
            </p>
          </div>
        </div>
        <div className="relative bg-[url('/analytics.png')] bg-cover bg-no-repeat w-full min-h-[500px] rounded-3xl">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ backgroundColor: "#00000033" }}
          ></div>
          <div className="absolute md:left-10 md:top-[420px] left-5 top-96 flex flex-col gap-[69px] max-w-[445px]">
            <h4 className="text-white text-[36.72px]">Strategy & Research</h4>
          </div>
        </div>
        <div className="relative bg-[url('/marketing.png')] bg-cover bg-no-repeat w-full min-h-[500px] rounded-3xl">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ backgroundColor: "#00000033" }}
          ></div>
          <div className="absolute md:left-10 md:top-[420px] left-5 top-96 flex flex-col gap-[69px] max-w-[445px]">
            <h4 className="text-white text-[36.72px]">Strategy & Research</h4>
          </div>
        </div>
      </div>
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

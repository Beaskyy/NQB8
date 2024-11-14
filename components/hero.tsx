import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <main className="lg:px-[148px] md:px-[100px] px-5">
      <div className="flex md:flex-row flex-col justify-between mt-[87px] gap-20">
        <div>
          <h1 className="lg:text-[81.45px] md:text-5xl text-4xl font-normal max-w-[695px] lg:leading-[89.1px]">Let’s build your business together</h1>
          <p className="my-5 max-w-[534.34px] lg:text-[25.92px] md:text-xl text-base font-normal lg:leading-[37.4px]">Your business begins with one idea—let’s make it unstoppable!</p>
          <div className="flex gap-3.5">
            <Button>See what we do</Button>
            <Button className="text-[#2862E9] bg-transparent shadow-none hover:bg-[#2862E9] hover:text-white">Let’s talk</Button>
          </div>
        </div>
        <div>
          <Image src="/frame.svg" alt="frame" width={308} height={308} />
        </div>
      </div>
      <div className="mt-12 bg-[url('/hero.svg')] h-[563px] bg-contain bg-no-repeat rounded-[22px]"></div>
    </main>
  );
};

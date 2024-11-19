import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { NextLevel } from "./next-level";

export const CareersPage = () => {
  return (
    <main className="lg:px-[148px] md:px-[100px] px-5">
      <div className="flex md:flex-row flex-col justify-between mt-[87px] gap-20">
        <div>
          <h1 className="lg:text-[81.45px] md:text-5xl text-4xl font-normal max-w-[695px] lg:leading-[89.1px]">
            Careers at NQB8
          </h1>
          <p className="my-5 max-w-[534.34px] lg:text-[25.92px] md:text-xl text-base font-normal lg:leading-[37.4px]">
            The entire NQb8 team is fun and interesting. If you like the thrill
            of working in a thinking environment and taking risks, without the
            boredom of regular structure... then consider joining our team!
          </p>
          <div className="flex md:flex-row flex-col gap-3.5">
            <Button>See open positions</Button>
            <Button className="text-[#2862E9] bg-transparent shadow-none border border-transparent hover:border-[#2862E9] hover:bg-transparent">
              Explore services
            </Button>
          </div>
        </div>
        <div>
          <Image src="/frame.svg" alt="frame" width={308} height={308} />
        </div>
      </div>
      <div className="mt-[100px]">
        <h2 className="mb-6 text-[#3D3D3D] text-[34px] leading-[44px] font-medium">Let’s build the future together</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#F7F9FF] rounded-[17.94px] gap-10  p-6">
          <div className="flex flex-col justify-center gap-3.5 max-w-[420px] lg:pl-12">
            <div className="mb-3.5">
              <h2 className="text-[#3D3D3D] text-[30px] font-medium mb-[18px]">Product manager</h2>
              <p className="text-[#616161] text-[12.95px] leading-[20.88px]">
                Net that pants light idea. 2 be dunder ballpark problem of mint.
                Take own chime weaponize 4-blocker search strategic barn
                boardroom adoption. Fured feed ping needed wiggle.
              </p>
            </div>
            <Button className="w-fit">Apply now</Button>
          </div>
          <div className="bg-[url('/careers.png')] bg-cover bg-no-repeat w-full lg:h-[373px] h-40 rounded-3xl"></div>
        </div>
      </div>
      <NextLevel />
    </main>
  );
};

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NextLevel } from "./next-level";

export const AboutHero = () => {
  return (
    <main className="lg:px-[148px] md:px-[100px] px-5">
      <div className="flex md:flex-row flex-col justify-between mt-[87px] gap-20">
        <div>
          <h1 className="lg:text-[81.45px] md:text-5xl text-4xl font-normal max-w-[695px] lg:leading-[89.1px]">
            The experts driving results
          </h1>
          <p className="my-5 max-w-[534.34px] lg:text-[25.92px] md:text-xl text-base font-normal lg:leading-[37.4px]">
            Each member brings expertise, passion, and dedication to help drive
            your business forward
          </p>
          <div className="flex gap-3.5">
            <Button>See what we do</Button>
            <Button className="text-[#2862E9] bg-transparent shadow-none border border-transparent hover:border-[#2862E9] hover:bg-transparent">
              Let’s talk
            </Button>
          </div>
        </div>
        <div>
          <Image src="/frame.svg" alt="frame" width={308} height={308} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-[60px] grid-cols-1  mt-[100px]">
        <div className="">
          <Image
            src="/gbenga.png"
            alt="service"
            width={615}
            height={683}
            className="rounded-2xl"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between">
            <h2 className="text-[32px] text-[#020120] leading-[52px] tracking-[-0.6px] lg:mb-40 mb-5">
              Gbenga Solademi has over 14 years of Tech Product and Process
              Design Experience. He is a Business planning and finance expert.
            </h2>
            <div className="flex flex-col gap-[22px]">
              <div className="">
                <p className="mb-2.5 text-black text-[22px] leading-6">
                  Gbenga Solademi
                </p>
                <p className="text-base text-[#020120] leading-6">
                  Chief executive officer
                </p>
              </div>
              <div className="flex gap-5">
                <Button className="bg-[#F6F8FE] py-2.5 px-5 h-[42px] shadow-none rounded-[100px] group">
                  <ArrowLeft className="size-[22px] text-[#2862E9] group-hover:text-white" />
                </Button>
                <Button className="bg-[#F6F8FE] py-2.5 px-5 h-[42px] shadow-none rounded-[100px] group">
                  <ArrowRight className="size-[22px] text-[#2862E9] group-hover:text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextLevel />
    </main>
  );
};

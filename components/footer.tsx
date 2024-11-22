import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="lg:px-[148px] md:px-[100px] px-5 py-[18px] mb-[100px]">
      <div className="flex lg:flex-row flex-col lg:gap-48 gap-12 mt-[50px]">
        <div className="flex flex-col gap-10">
          <h3 className="text-2xl font-semibold leading-[31.78px] text-[#353535]">
            NQB8
          </h3>
          <div className="flex flex-col gap-5">
            <p className="text-[#020120] text-[11.63px] tracking-[0.96px] font-semibold uppercase">
              Subscribe for our newsletter
            </p>
            <div className="relative flex">
              <input
                type="text"
                placeholder="email address"
                className="border border-[#F5F5F5] px-3.5 py-2.5 rounded-lg lg:w-[301.31px] w-full placeholder:text-[#A5A5A5] text-sm font-normal leading-[18.9px]"
              />
              <Button className="asbolute -translate-x-14 bg-transparent shadow-none rounded-lg group">
                <ArrowRight className="text-[#2862E9] size-5 group-hover:text-white" />
              </Button>
            </div>
            <p className="text-[12.47px] text-[#020120]">
              Your information is never disclosed to third parties.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-7">
            <p className="text-[#020120] text-xs leading-4 uppercase tracking-[0.96px] font-semibold">
              Company
            </p>
            <ul className="flex flex-col lg:gap-[22px] gap-4">
              <li className="text-[#020120] lg:text-xl text-sm leading-[30px]">
                <Link href="/careers">Careers</Link>
              </li>
              <li className="text-[#020120] lg:text-xl text-sm leading-[30px]">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="text-[#020120] lg:text-xl text-sm leading-[30px]">
                <Link href="/team">Team</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[#020120] text-xs leading-4 uppercase tracking-[0.96px] font-semibold">
              legal
            </p>
            <ul className="flex flex-col lg:gap-[22px] gap-4">
              <li className="text-[#020120] lg:text-xl text-sm leading-[30px]">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-[#020120] lg:text-xl text-sm leading-[30px]">
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

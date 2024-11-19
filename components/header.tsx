import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <div className="lg:px-[148px] md:px-[100px] px-5 py-[18px] border border-b-[#F3F3F3]">
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-10 lg:w-[626px]">
          <div>
            <Link href="/" className="text-2xl text-[#353535] font-semibold leading-[31.78px]">
              NQB8
            </Link>
          </div>
          <nav>
            <ul className="md:flex hidden gap-6">
              <li className="text-sm text-black text-center tracking-[-0.15px]">
                <Link href="/">Services</Link>
              </li>
              <li className="text-sm text-black text-center tracking-[-0.15px]">
                <Link href="/about">About us</Link>
              </li>
              <li className="text-sm text-black text-center tracking-[-0.15px]">
                <Link href="/careers">Careers</Link>
              </li>
              <li className="text-sm text-black text-center tracking-[-0.15px]">
                <Link href="/">Testimonials</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Button className="md:flex hidden">Let’s Talk</Button>
        </div>
        <div className="md:hidden flex">
          <Sheet>
            <SheetTrigger>
              <Menu className="size-8" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <nav>
                    <ul className="flex flex-col gap-6 mt-10">
                      <li className="text-sm text-black text-center tracking-[-0.15px]">
                        <Link href="/">Services</Link>
                      </li>
                      <li className="text-sm text-black text-center tracking-[-0.15px]">
                        <Link href="/about">About us</Link>
                      </li>
                      <li className="text-sm text-black text-center tracking-[-0.15px]">
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li className="text-sm text-black text-center tracking-[-0.15px]">
                        <Link href="/">Testimonials</Link>
                      </li>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

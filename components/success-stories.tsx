import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { NextLevel } from "./next-level";

const items = [
  {
    image: "/testimonial-1.png",
    alt: "testimonial image 1",
    name: "Ifeoluwa",
    company: "General Electric",
    text: "Lorem ipsum dolor sit amet consectetur. Faucibus vitae nisl tincidunt quam eget aenean mauris arcu quisque. Purus in mi sit enim hendrerit in ultrices volutpat sit. Viverra in praesent diam in morbi. Sit elementum a nulla venenatis mollis. Id vestibulum.",
    height: 200, // Optional, for grid-row-end calculation
  },
  {
    image: "/victor.png",
    alt: "testimonial image 2",
    name: "Victor",
    company: "Nintendo",
    text: "Lorem ipsum dolor sit amet consectetur. Tristique fringilla magnis dictumst erat ultrices. Augue cursus sit viverra massa felis.",
    height: 150, // Optional
  },
  {
    image: "/kingsley.png",
    alt: "testimonial image 3",
    name: "Kingsley",
    company: "Gillette",
    text: "Lorem ipsum dolor sit amet consectetur. Tristique semper placerat vestibulum arcu arcu tristique lacus. Vivamus nisl turpis sollicitudin proin nec non. Eget porttitor pellentesque pellentesque dolor scelerisque tincidunt. Orci.",
    height: 200, // Optional
  },
  {
    image: "/gladys.png",
    alt: "testimonial image 5",
    name: "Gladys",
    company: "Starbucks",
    text: "Lorem ipsum dolor sit amet consectetur. Aliquet pharetra porttitor id enim tristique imperdiet est sapien. Elementum enim pharetra facilisis sit lobortis bibendum elit non nulla. Interdum vel volutpat dignissim quis nulla dictum aliquam molestie. Est lacus blandit et duis aliquam leo lorem accumsan.",
    height: 300, // Optional
  },
  {
    image: "/abubakar.png",
    alt: "testimonial image 4",
    name: "Abubakar",
    company: "IBM",
    text: "Lorem ipsum dolor sit amet consectetur. Lectus vivamus lorem quis tortor id auctor sed. Id.",
    height: 120, // Optional
  },
  {
    image: "/adefolake.png",
    alt: "testimonial image 6",
    name: "Adefolake",
    company: "The Walt Disney Company",
    text: "Lorem ipsum dolor sit amet consectetur. Tristique proin diam eget commodo ornare dignissim accumsan pellentesque. Nam nisi.",
    height: 180, // Optional
  },
];

export const SuccessStories = () => {
  return (
    <main className="lg:px-[148px] md:px-[100px] px-5">
      <div className="flex md:flex-row flex-col justify-between mt-[87px] gap-20">
        <div>
          <h1 className="lg:text-[81.45px] md:text-5xl text-4xl font-normal max-w-[695px] lg:leading-[89.1px]">
            Success Stories
          </h1>
          <p className="my-5 max-w-[534.34px] lg:text-[25.92px] md:text-xl text-base font-normal lg:leading-[37.4px]">
            Discover inspiring stories of how businesses like yours have
            leveraged to overcome challenges, drive growth, and achieve
            remarkable results.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto mt-[100px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#F5FAFF] p-4 rounded-xl"
            style={{ gridRowEnd: `span ${Math.ceil(item.height / 50)}` }}
          >
            <div className="flex gap-4 items-center">
              <Image
                src={item.image}
                alt={item.alt}
                width={62.27}
                height={62.27}
                className="rounded-full"
              />
              <div>
                <h2 className="text-[#6F6F6F] text-lg font-bold">
                  {item.name}
                </h2>
                <p className="text-[#767676] text-sm">{item.company}</p>
              </div>
            </div>
            <p className="text-[#8D8D8D] mt-4">{item.text}</p>
          </div>
        ))}
      </div>

      <NextLevel />
    </main>
  );
};

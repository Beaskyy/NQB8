import Image from "next/image";

const services = [
  {
    title: "Ideation",
    content: `Sophia was born from a vision to simplify healthcare and make it
      accessible to everyone, no matter where they are. Tired of
      complicated systems and disconnected care, we knew there had to be
      a better way.`,
    image: "/service-1.jpeg",
  },
  {
    title: "Traction & Funding",
    content: `Sophia was born from a vision to simplify healthcare and make it
      accessible to everyone, no matter where they are. Tired of
      complicated systems and disconnected care, we knew there had to be
      a better way.`,
    image: "/service-2.jpeg",
  },
  {
    title: "Pivoting & Scaling",
    content: `Sophia was born from a vision to simplify healthcare and make it
      accessible to everyone, no matter where they are. Tired of
      complicated systems and disconnected care, we knew there had to be
      a better way.`,
    image: "/service-3.jpeg",
  },
];

export const Services = () => {
  return (
    <div className="lg:px-[148px] md:px-[100px] lg:mt-24 px-5 py-[18px]">
      <h1 className="lg:text-[55.45px] md:text-5xl text-[27px] text-[#020120] md:leading-[68px] tracking-[-1px] max-w-[825px]">
        Steering your business toward real growth and measurable success.
      </h1>
      <div
        className="flex flex-col gap-6 mt-[18px]"
      >
        {services.map(({title, content, image}) => (
          <div className="flex lg:flex-row flex-col gap-12 bg-white" style={{ position: "sticky", top: 0 }}>
          <Image
            src={image}
            alt="service"
            width={687}
            height={562}
            className="rounded-2xl"
          />
          <div className="max-w-[444.37px]">
            <h2 className="text-[#020120] text-[44px] leading-[68px] tracking-[-1px]">
              {title}
            </h2>
            <p className="mt-11 text-lg text-[#020120]">
              {content}
            </p>
          </div>
        </div>
        ))}
      </div>
      {/* <div className="flex flex-col gap-7">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white w-full lg:w-[1032px] lg:px-[67px] px-5 py-7 rounded-[22px] lg:flex-row items-center"
            style={{ position: "sticky", top: 0 }}
          >
            <div>
              <h3 className="mb-[26px] text-[32px] text-black font-semibold tracking-[-0.32] w-[350px] leading-[43px]">
                {section.title}
              </h3>
              <div className="max-w-[388px]">
                <p className="mb-[26px] text-[15px] text-[#424242]">
                  {section.description1}
                </p>
                <p className="text-[15px] text-[#424242] mb-8">
                  {section.description2}
                </p>
                <div className="flex gap-3 pb-7"></div>
              </div>
            </div>
            <div>
              <Image
                src={section.imageSrc}
                alt={section.imageAlt}
                width={section.imageWidth}
                height={section.imageHeight}
                className="mt-3"
              />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

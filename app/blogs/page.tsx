import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogsData = [
  {
    title: "How Automating Your Invoice Process Can Boost Business Efficiency",
    date: "10 Oct, 2024",
    duration: "5 mins",
    image: "/blog-1.png",
  },
  {
    title: "Top 5 Payment Gateways to Streamline Payroll in 2024",
    date: "10 Oct, 2024",
    duration: "5 mins",
    image: "/blog-2.png",
  },
  {
    title: "How Technology is Reshaping Financial Workflows",
    date: "10 Oct, 2024",
    duration: "5 mins",
    image: "/blog-3.png",
  },
  {
    title: "How Automating Your Invoice Process Can Boost Business Efficiency",
    date: "10 Oct, 2024",
    duration: "5 mins",
    image: "/blog-1.png",
  },
  {
    title: "Top 5 Payment Gateways to Streamline Payroll in 2024",
    date: "10 Oct, 2024",
    duration: "5 mins",
    image: "/blog-2.png",
  },
  {
    title: "How Technology is Reshaping Financial Workflows",
    date: "10 Oct, 2024",
    duration: "5 mins",
    image: "/blog-3.png",
  },
];

const Blogs = () => {
  return (
    <main>
      <Header />
      <div className="lg:px-[148px] md:px-[100px] px-5">
        <div className="flex md:flex-row flex-col justify-between mt-[87px] gap-20">
          <div>
            <h1 className="lg:text-[81.45px] md:text-5xl text-4xl font-normal max-w-[695px] lg:leading-[89.1px]">
              NQB8 Blogs
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-[100px]">
          {blogsData.map(({ title, date, duration, image }, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div>
                <div
                  className={`bg-center bg-cover w-full h-[184px] rounded-[5px] mb-2.5`}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <p className="tracking-tight">{title}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EAEAEA] py-[5px] px-2.5 rounded-lg w-[58px] h-[25px]">
                  <p className="text-xs">{duration}</p>
                </div>
                <p className="text-xs text-[#61646B]">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Blogs;

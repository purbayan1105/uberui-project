import Link from "next/link";

const Body = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-24  mx-8 lg:mx-32 gap-16 items-center poppins">
        <div className="">
          <img src="/body-1.webp" alt="" />
        </div>
        <div className="">
          <div className="text-3xl lg:text-4xl font-semibold lg:mr-24 leading-[3rem]">
            Make money by renting out your car
          </div>
          <div className="mt-7 lg:mr-32">
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet management tools.
          </div>
          <div className="mt-7 inline-flex gap-5 items-center poppins font-light">
            <button className="bg-black text-white px-4 py-2.5 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

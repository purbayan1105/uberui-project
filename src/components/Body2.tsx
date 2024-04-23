import Link from "next/link";

const Body = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-24 mx-8 lg:mx-32 gap-10 items-center poppins">
        <div className="">
          <div className="text-3xl lg:text-5xl font-semibold lg:mr-24 lg:leading-[4rem]">
            The Uber you know, reimagined for business
          </div>
          <div className="mt-7 lg:mr-32">
            Uber for Business is a platform for managing global rides and meals,
            and local deliveries, for companies of any size.
          </div>
          <div className="mt-7 inline-flex gap-5 items-center poppins font-light">
            <button className="bg-black text-white px-4 py-2.5 rounded-md">
              Get Started
            </button>
            <div className="underline mb-4 hover:text-blue-600">
              <Link href="">Check out for solutions</Link>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/body-2.webp" alt="" className="w-80" />
        </div>
      </div>
    </>
  );
};

export default Body;

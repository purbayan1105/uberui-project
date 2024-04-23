import Link from "next/link";

const Body = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-24  mx-8 lg:mx-32 lg:gap-16 items-center poppins">
        <div className="">
          <img src="/body-1.webp" alt="" />
        </div>
        <div className="">
          <div className="text-3xl mt-5 lg:text-5xl font-semibold lg:mr-24 lg:leading-[4rem]">
            Drive when you want, make what you need
          </div>
          <div className="mt-7 lg:mr-32">
            Make money on your schedule with deliveries or rides—or both. You
            can use your own car or choose a rental through Uber.
          </div>
          <div className="mt-7 inline-flex gap-5 items-center poppins font-light">
            <button className="bg-black text-white px-4 py-2.5 rounded-md">
              Get Started
            </button>
            <div className="underline hover:text-blue">
              Already have an account? <Link href="">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

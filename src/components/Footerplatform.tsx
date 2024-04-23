const Footerplatform = () => {
  return (
    <>
      <div className="bg-black text-white px-8 lg:px-32 py-16">
        <div className=" flex gap-6 items-center">
          <button className="border-1 border-white border-solid inline-flex px-2 rounded-md items-center">
            <img src="/playstore.png" alt="" className="w-[3rem] p-0" />
            <div className="">
              <div className="text-xs">Get it on</div>
              <div className="text-sm poppins">Google Play</div>
            </div>
          </button>
          <button className="border-1 border-white border-solid inline-flex px-3 rounded-md items-center">
            <img src="/appstore.png" alt="" className="w-[3rem]" />
            <div className="">
              <div className="text-xs">Get it on</div>
              <div className="text-sm poppins">App Store</div>
            </div>
          </button>
        </div>

        <div className="text-white flex justify-between items-center mt-10 text-xs">
          <div className="">© 2024 Uber Technologies inc.</div>
          <div className="flex justify-center items-center gap-5">
            <div className="">Privacy</div>
            <div className="">Accessibility</div>
            <div className="">Terms</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerplatform;

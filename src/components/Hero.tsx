import { Navigation } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [typing, setTyping] = useState(false);

  const handleInputChange = (event: any) => {
    // Check if input value is empty
    if (event.target.value === "") {
      setTyping(false); // Typing has stopped
    } else {
      setTyping(true); // Typing has started
    }
  };

  return (
    <>
      <div className="bg-black text-white lg:h-[100dvh] relative">
        <div className="mx-8 lg:mx-48 grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-20 py-10">
          <div className="">
            <div className="text-4xl lg:text-5xl poppins font-semibold lg:leading-[70px]">
              Go anywhere with Uber
            </div>
            <div className="mt-3 text-xl poppins">Request a ride</div>
            <div className="inline-flex gap-3 bg-white items-center rounded-md px-3 mt-3">
              <input
                type="search"
                className="outline-none lg:w-[375px] h-[50px] px-3 py-2 text-black"
                placeholder="Enter your location"
                onChange={handleInputChange}
              />
              {!typing ? (
                <Navigation stroke="black" size="2rem" fill="black" />
              ) : (
                <Navigation aria-hidden />
              )}
            </div>
            <div className="mt-5">
              <input
                type="search"
                className="outline-none w-[310px] h-[50px] lg:w-[443px] lg:h-[50px] px-6 py-2 text-black rounded-md "
                placeholder="Enter your destination"
              />
            </div>
            <button className="bg-white text-black poppins px-5 py-3 rounded-md mt-5">
              See Prices
            </button>
          </div>
          <div className="sm:flex justify-center items-center">
            <img
              src="/Ride-with-Uber.webp"
              alt=""
              className="lg:h-[90vh] lg:w-[40vw] w-72 mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

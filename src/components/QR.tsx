import { ArrowRight } from "lucide-react";
import { useState } from "react";

const QR = () => {
  const [isHovered, setHovered] = useState(false);
  const [isHovered1, setHovered1] = useState(false);
  return (
    <>
      <div className="h-auto mt-24 px-4 lg:px-32 bg-gray-100 ">
        <div className="poppins font-semibold text-4xl pt-5">
          It’s easier in the apps
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10  lg:gap-10">
          <div
            className="lg:inline-flex items-center gap-10 bg-white p-5 lg:w-[600px]"
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseOut={() => {
              setHovered(false);
            }}>
            <img src="/qr1.webp" alt="" className="w-[100px] lg:w-40" />
            <div className="">
              <div className="text-2xl">Download the Uber app</div>
              <div className="">Scan to download</div>
            </div>
            {isHovered ? (
              <ArrowRight className="hover-effect" />
            ) : (
              <ArrowRight />
            )}
          </div>
          <div
            className="lg:inline-flex items-center gap-10 bg-white p-5 lg:w-[600px]"
            onMouseOver={() => {
              setHovered1(true);
            }}
            onMouseOut={() => {
              setHovered1(false);
            }}>
            <img src="/qr2.webp" alt="" className="w-[100px] lg:w-40" />
            <div className="">
              <div className="text-2xl">Download the Driver app</div>
              <div className="">Scan to download</div>
            </div>
            {isHovered1 ? (
              <ArrowRight className="hover-effect" />
            ) : (
              <ArrowRight />
            )}
          </div>
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default QR;

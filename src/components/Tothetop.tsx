import { ArrowBigUp } from "lucide-react";
import { useState } from "react";

const Tothetop = () => {
  const [isHovered, setHovered] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-black  flex justify-end text-xl px-5 pb-5">
        <div
          className="inline-flex items-center gap-2 bg-gray-300 rounded-3xl p-3"
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseOut={() => {
            setHovered(false);
          }}>
          {isHovered ? (
            <div className="flex items-center" onClick={scrollTop}>
              <div className="select-none text-sm font-semibold">
                Back To Top
              </div>
              <ArrowBigUp />
            </div>
          ) : (
            <div className="">
              <ArrowBigUp />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tothetop;

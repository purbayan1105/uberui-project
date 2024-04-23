import { ChevronDown, ChevronUp, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

import Dropdown from "./Dropdown";

const Navbar = () => {
  const [down, setDown] = useState(false);
  const toggleHandler = () => {
    if (!down) {
      setDown(true);
    } else {
      setDown(false);
    }
  };
  const [menuOpen, setmenuOpen] = useState(false);
  const menuHandler = () => {
    if (!menuOpen) {
      setmenuOpen(true);
    } else {
      setmenuOpen(false);
    }
  };

  return (
    <>
      <div className="bg-black  text-white font-semibold hidden lg:block">
        <div className="lg:mx-32 select-none grid grid-cols-2 h-14">
          <div className="flex justify-start gap-6 items-center">
            <img src="/uber.png" alt="" className="w-16 h-9" />
            <div className="hover:bg-slate-500 px-2 py-2 rounded-3xl">Ride</div>
            <div className="hover:bg-slate-500 px-2 py-2 rounded-3xl">
              Drive
            </div>
            <div className="hover:bg-slate-500 px-2 py-2 rounded-3xl">
              Business
            </div>
            <div className="hover:bg-slate-500 px-2 py-2 rounded-3xl">
              Uber Eats
            </div>

            <div
              className="inline-flex items-center gap-2 cursor-pointer"
              onClick={toggleHandler}>
              <span className="hover:bg-slate-500 px-2 py-2 rounded-3xl">
                <span>About </span>
                <span>
                  <button className="hover-effect:none">
                    {!down ? (
                      <ChevronUp size="1rem" />
                    ) : (
                      <ChevronDown size="1rem" />
                    )}
                  </button>
                </span>
              </span>
              {down ? <Dropdown /> : ""}
            </div>
          </div>

          <div className="flex justify-end gap-6 items-center">
            <div className="inline-flex items-center gap-1">
              <span>
                <Globe size="1rem" />
              </span>
              <span>EN</span>
            </div>
            <div className="">Help</div>
            <div className="">Log in</div>
            <div className="bg-white text-black px-3 py-2 rounded-3xl">
              Sign up
            </div>
          </div>
        </div>
      </div>
      {
        // Navvar for mobile
      }
      <div className="px-4 grid grid-cols-3 lg:hidden bg-black pt-3">
        <div className="">
          <img src="/uber.png" alt="" className="w-[4rem]" />
        </div>
        <div className="col-span-2 flex justify-center items-center gap-4">
          <div className="text-white text-">Log in</div>
          <div className="bg-white rounded-3xl p-2 px-3">Sign up</div>
          <div className="" onClick={menuHandler}>
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute z-10 bg-white w-full">
          <div className="text-2xl mx-8 space-y-5 py-5">
            <div className="">Ride</div>
            <div className="">Drive</div>
            <div className="">Business</div>
            <div className="">Uber Eats</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

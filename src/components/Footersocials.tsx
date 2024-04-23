import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Locate,
  MapPin,
  Twitter,
} from "lucide-react";

const Footersocials = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-8 lg:px-32 bg-black">
        <div className="flex justify-start gap-5 lg:gap-24">
          <Facebook color="white" />
          <Twitter color="white" />
          <Linkedin color="white" />
          <Instagram color="white" />
        </div>

        <div className="lg:flex justify-center items-center space-y-5 lg:gap-16">
          <div className="flex justify-center items-center ">
            <Globe color="white" />
            <span className="px-2 text-white">English </span>
          </div>
          <div className=" flex justify-center items-center ">
            <MapPin color="white" />
            <span className="px-2 text-white">English </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footersocials;

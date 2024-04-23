import Link from "next/link";

const Footermenu = () => {
  return (
    <>
      <div className="bg-black w-full px-8 lg:px-32 text-white py-16">
        <img src="/uber.png" alt="" className="lg:w-16 w-32" />
        <div className="mt-8">Help Center</div>
        <div className="grid lg:grid-cols-4 grid-cols-2 mt-10">
          <div className="">
            <div className="text-2xl mt-5">Company</div>
            <p className="link mt-3">About Us</p>
            <p className="link mt-3">Our Offerings</p>
            <p className="link mt-3">News Room</p>
            <p className="link mt-3">Investors</p>
            <p className="link mt-3">Blog</p>
            <p className="link mt-3">Careers</p>
            <p className="link mt-3">AI</p>
            <p className="link mt-3">Gift Codes</p>
          </div>
          <div className="">
            <div className="text-2xl mt-5">Products</div>
            <p className="link mt-3">Ride</p>
            <p className="link mt-3">Drive</p>
            <p className="link mt-3">Deliver</p>
            <p className="link mt-3">Eat</p>
            <p className="link mt-3">Uber for Business</p>
            <p className="link mt-3">Uber Freight</p>
          </div>
          <div className="">
            <div className="text-2xl mt-5">Global Citizenship</div>
            <p className="link mt-3">Safety</p>
            <p className="link mt-3">Diversity and Incluison</p>
            <p className="link mt-3">Sustainability</p>
          </div>
          <div className="">
            <div className="text-2xl mt-5">Travel</div>
            <p className="link mt-3">Reserve</p>
            <p className="link mt-3">Airports</p>
            <p className="link mt-3">Cities</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footermenu;

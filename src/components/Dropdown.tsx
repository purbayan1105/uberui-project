import Link from "next/link";

const Dropdown = () => {
  return (
    <>
      <div className="absolute z-30 bg-gray-100  w-[250px]  top-11 text-gray-500 flex flex-col mt-5 rounded-md pb-2 text-md font-normal">
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5 mt-1">
          About Us
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5">
          Our Offerings
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5">
          How Uber Works
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5">
          Impacts
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5">
          Diversity, Equity and Inclusion
        </Link>
        <Link href="" className="hover:bg-gray-200 px-3.5 py-1">
          News Room
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5">
          Investor Relations
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1 px-3.5">
          Blogs
        </Link>
        <Link href="" className="hover:bg-gray-200 py-1.5 px-3.5">
          Careers
        </Link>
      </div>
    </>
  );
};

export default Dropdown;

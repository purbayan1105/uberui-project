import Image from "next/image";

const newpage = () => {
  return (
    <>
      <div className="">
        <Image
          src="/uber.jpg"
          className=""
          alt="uber image"
          width={300}
          height={200}
        />
      </div>
    </>
  );
};

export default newpage;

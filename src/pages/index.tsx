import Body from "@/components/Body";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Body2 from "@/components/Body2";
import Body3 from "@/components/Body3";
import QR from "@/components/QR";
import Footermenu from "@/components/Footermenu";
import Footersocials from "@/components/Footersocials";
import Footerplatform from "@/components/Footerplatform";
import Tothetop from "@/components/Tothetop";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Body />
      <Body2 />
      <Body3 />
      <QR />
      <Footermenu />
      <Footersocials />
      <Footerplatform />
      <Tothetop />
    </>
  );
};

export default index;

import Image from "next/image";
import frontPic from "@/../public/image/front-pic.png";
import Button from "./button";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2  gap-y-10 items-center ">
      <div className="justify-self-center space-y-5 order-2 md:order-1">
        <h1 className="font-bold text-white text-5xl leading-snug">
          Hi, I am <br />
          Furqan Ali
        </h1>
        <p className="text-gray2">Frontend Developer</p>
        <div className="space-y-3 ">
          <Button text="Download CV" />
          <Button isOutline text="Learn More" />
        </div>
      </div>
      <div className="relative  lg:w-[500px] lg:h-[500px] min-w-[280px] min-h-[280px] border-[15px] border-gray overflow-hidden  rounded-full justify-self-center order-1 md:order-2">
        <Image alt="" src={frontPic} layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;

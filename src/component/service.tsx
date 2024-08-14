import Dev from "@/../public/icon/dev.svg";
import Vector from "@/../public/icon/vector.svg";
import Web from "@/../public/icon/web.svg";
import Card from "./card";

const Service = () => {
  return (
    <div id="service">
      <div>
        <h1 className="text-white font-bold text-5xl text-center">What I Do</h1>
      </div>
      <div className="h-[140px]" />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 items-center gap-20">
        <Card icon={Vector} text="Software" secText="Development" />
        <Card icon={Dev} text="Web" secText="Development" />
        <Card icon={Web} text="Web" secText="Design" />
      </div>
    </div>
  );
};

export default Service;

import Info from "./info";

const About = () => {
  return (
    <div id="about">
      <div>
        <h1 className="text-white font-bold text-5xl text-center">About</h1>
      </div>
      <div className="h-[140px]" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 items-center text-white gap-y-10">
        <Info discription="Furqan Ali" text="Full Name" />
        <Info text="Email Address" discription="shahfurqan668@gmail.com" />
        <Info text="Socail" discription="#" />
        <Info text="Phone" discription="03102270213" />
      </div>
    </div>
  );
};

export default About;

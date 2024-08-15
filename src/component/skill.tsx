import Lang from "./langcom";

const Skills = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-white font-bold text-5xl text-center">My Skills</h1>
      </div>
      <div className="h-[140px]" />
      <div className="bg-[#212121] w-full items-center py-5 min-h-60 grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <Lang percentage="50%" title="HTML" />
        <Lang percentage="20%" title="CSS" />
        <Lang percentage="10%" title="JAVASCRIPT" />
        <Lang percentage="2%" title="PHP" />
      </div>
    </div>
  );
};

export default Skills;

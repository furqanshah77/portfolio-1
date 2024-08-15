import Button from "./button";
import Input from "./input";

const Form = () => {
  return (
    <div id="contact">
      
        <h1 className="text-white font-bold text-5xl text-center">
          Get In Touch
        </h1>
      
      <div className="h-[140px]" />
      <div className="grid sm:grid-cols-2 gap-10 ">
        <Input placeholder="Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone number" />
        <textarea
          name=""
          id=""
          placeholder="Massage"
          className="bg-black text-sm font-bold border-2 block border-[#535353] text-[#535353] w-full col-span-2 placeholder:text-[#535353] p-3 h-28"
        ></textarea>
      </div>
      <div className="flex justify-center items-center m-8">
        <Button text="Submit now" className="!w-fit" />
      </div>
    </div>
  );
};

export default Form;

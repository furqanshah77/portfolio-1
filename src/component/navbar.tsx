import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between py-8">
      <h1 className="font-bold text-white text-center sm:text-start w-full sm:w-fit text-4xl">
        Furqan
      </h1>
      <div className="gap-6 text-white text-lg hidden sm:flex ">
        <Link href={"#about"}>About</Link>
        <Link href={"#service"}>Services</Link>
        <Link href={"#contact"}>Contact Me</Link>
      </div>
    </div>
  );
};

export default Navbar;

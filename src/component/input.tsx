interface Iinput {
  placeholder: string;
}

const Input = ({ placeholder }: Iinput) => {
  return (
    <div>
      <input
        type="text"
        name=""
        placeholder={placeholder}
        id=""
        className="bg-black outline-none text-sm font-bold border-b-2 block border-[#535353] text-[#535353] w-full placeholder:text-[#535353] py-3"
      />
    </div>
  );
};

export default Input;

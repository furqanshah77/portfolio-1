interface Iinfo {
  text: string;
  discription: string;
}

const Info = ({ text, discription }: Iinfo) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className=" bg-gray size-16 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-green" />
      </div>
      <div className="text-white text-center">
        <h3 className="font-bold text-xl">{text}</h3>
        <p className="font-normal text-lg">{discription}</p>
      </div>
    </div>
  );
};

export default Info;

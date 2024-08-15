import Image from "next/image";

interface Icard {
  icon: string;
  text: string;
  secText: string;
}

const Card = ({ icon, secText, text }: Icard) => {
  return (
    <div className="bg-[#212121] w-full min-h-[240px] h-full py-8 px-10 gap-y-4 flex flex-col hover:border-b-4 border-green">
      <Image alt="" src={icon} width={57} height={46} />
      <p className="text-gray font-semibold text-4xl">{text}</p>
      <p className="text-gray font-semibold text-4xl">{secText}</p>
    </div>
  );
};

export default Card;

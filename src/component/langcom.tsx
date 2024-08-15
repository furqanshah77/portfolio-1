interface Ilang {
  percentage: string;
  title: string;
}

const Lang = ({ percentage, title }: Ilang) => {
  return (
    <div className="w-40 h-32 text-center items-center space-y-2">
      <div className="text-gray font-bold text-7xl"> {percentage}</div>
      <div className="text-green font-bold text-2xl text-center">{title}</div>
    </div>
  );
};

export default Lang;

interface IButton {
  text: string;
  isOutline?: boolean;
}

const Button = ({ isOutline, text }: IButton) => {
  return (
    <button
      className={`min-w-36 w-full text-white h-[42px] ${
        isOutline ? "border border-white " : "bg-green"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

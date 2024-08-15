interface IButton {
  text: string;
  isOutline?: boolean;
  className?: string;
}

const Button = ({ isOutline, text, className }: IButton) => {
  return (
    <button
      className={`min-w-36 w-full text-white h-[42px] ${
        isOutline ? "border border-white " : "bg-green"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

interface IButtonProps {
  onClick: any, 
  text: string,
  className?: string, 
}

const CustomButton: React.FC<IButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${className}`}>
      {text}
    </button>
  );
};

export default CustomButton;

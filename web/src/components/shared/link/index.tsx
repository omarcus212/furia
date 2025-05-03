import { Link } from 'react-router-dom';

interface ILinkProps {
  to: string,
  text: string,
  className: string,
  onClick?: any
}

const CustomLink: React.FC<ILinkProps> = ({ to, text, className, onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {text}
    </Link>
  );
};

export default CustomLink;

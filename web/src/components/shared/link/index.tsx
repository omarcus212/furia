import { Link } from 'react-router-dom';

interface ILinkProps {
  to: string,      
  text: string,  
  className: string
}

const CustomLink: React.FC<ILinkProps> = ({ to, text, className }) => {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
};

export default CustomLink;

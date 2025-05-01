import { Link } from 'react-router-dom';

interface NavLink {
  label: string,
  to: string,
}

const leftLinks: NavLink[] = [
  { label: 'Meu Perfil', to: '/myprofile' },
  { label: 'Comunidade', to: '/home' },
  { label: 'Jogos', to: '/games' },
];

const rightLink: NavLink = { label: 'Sair', to: '/login' };

const HeaderNavbar = () => {

  const logout = () => {
    localStorage.removeItem('token');
  }
  
  return (
    <nav className="bg-[#0D0D0D] w-full text-white px-6 py-4 flex justify-between items-center">

      <div className="flex gap-6">
        {leftLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="hover:text-gray-200 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div>
        <Link to={rightLink.to} onClick={logout} className="hover:text-gray-200 transition-colors">
          {rightLink.label}
        </Link>
      </div>
    </nav>
  );
};

export default HeaderNavbar;

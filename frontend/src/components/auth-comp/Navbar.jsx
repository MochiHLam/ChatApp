import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'About us', path: '/about' },
    { label: 'Policies', path: '/policies' },
    { label: 'Helps', path: '/help' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-between px-6">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate('/login')}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/login')}
        role="button"
        tabIndex={0}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex items-center justify-center text-lg font-bold shadow-[0_2px_8px_rgba(79,70,229,0.3)]">
          C
        </div>
        <span className="text-xl font-bold text-[#1c1e21]">ChatApp</span>
      </div>

      <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-end">
        {navLinks.map((link) => (
          <button
            key={link.path}
            type="button"
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
              location.pathname === link.path
                ? 'text-indigo-600'
                : 'text-[#606770]'
            }`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </button>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-sm font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          onClick={() => navigate('/signup')}
        >
          Sign up
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-semibold rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600/10 transition-colors"
          onClick={() => navigate('/login')}
        >
          Log in
        </button>
      </div>
    </nav>
  );
}

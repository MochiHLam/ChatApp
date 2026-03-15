import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full h-[120px] min-h-[120px] max-h-[120px] py-3 pt-3 pb-2 flex-shrink-0 box-border flex flex-col justify-between">
      <div className="h-px bg-[#b0b5bb] mb-2.5 w-full" />
      <div className="grid grid-cols-5 text-sm justify-items-center text-[#606770]">
        <span />
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate('/about')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/about')}
          role="button"
          tabIndex={0}
        >
          About us
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate('/policies')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/policies')}
          role="button"
          tabIndex={0}
        >
          Policies
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate('/help')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/help')}
          role="button"
          tabIndex={0}
        >
          Helps
        </span>
        <span />
      </div>
      <p className="text-center text-xs text-gray-400">
        © 2026 ChatApp. All rights reserved.
      </p>
    </footer>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/auth-comp/Footer';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    navigate('/forgot-verify', { state: { email: email.trim() } });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f0f2f5] p-5">
      <div className="flex flex-col items-center flex-1">
        <div className="w-full flex justify-center pt-6 pb-43">
          <div className="w-full max-w-[540px] flex-shrink-0 bg-white rounded-lg p-10 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-center text-[#1c1e21] mb-2">
              Forgot password?
            </h2>
            <p className="text-sm text-[#606770] text-center mb-10">
              Enter your email and we&apos;ll send you a 6-digit code to reset your password.
            </p>
            <form
              className="flex flex-col w-full gap-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-1.5 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  required
                  className="peer pt-6 px-4 pb-4 rounded-xl border border-[#dddfe2] bg-white text-[#1c1e21] text-base outline-none transition-[border-color] duration-150 placeholder:text-transparent focus:border-indigo-600"
                />
                <label
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-[#90949c] pointer-events-none transition-all duration-200 ease-out
                    peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-indigo-600
                    peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600"
                >
                  Email address
                </label>
              </div>
              <button
                type="submit"
                className="px-3 py-2.5 text-base font-semibold rounded-full border-none bg-indigo-600 text-white cursor-pointer transition-colors duration-150 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!email.trim()}
              >
                Send reset code
              </button>
              <p className="text-sm text-[#606770] text-center">
                <button
                  type="button"
                  className="bg-transparent border-none text-indigo-600 font-semibold cursor-pointer hover:underline p-0"
                  onClick={() => navigate('/login')}
                >
                  Back to Login
                </button>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

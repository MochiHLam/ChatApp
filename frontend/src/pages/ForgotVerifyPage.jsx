import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/auth-comp/Footer';

export default function ForgotVerifyPage() {
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate('/forgot-password', { replace: true });
      return;
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (code.length !== 6 || !email) return;
    navigate('/reset-password', { state: { email, code } });
  };

  const handleResend = () => {
    if (timeLeft > 0) return;
    setTimeLeft(60);
    console.log('Resend code to', email);
  };

  if (!email) return null;

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f0f2f5] p-5">
      <div className="flex flex-col items-center flex-1">
        <div className="w-full flex justify-center pt-6 pb-41">
          <div className="w-full max-w-[540px] flex-shrink-0 bg-white rounded-lg p-10 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-center text-[#1c1e21] mb-2">
              Reset password
            </h2>
            <p className="text-sm text-[#606770] text-center mb-10">
              We sent a 6-digit code to your email. Enter it below.
            </p>
            <form
              className="flex flex-col w-full gap-8"
              onSubmit={handleVerify}
              noValidate
            >
              <div className="flex flex-col gap-1.5 relative">
                <input
                  type="text"
                  autoComplete="off"
                  value={code}
                  onChange={(e) =>
                    setCode(e.target.value.replace(/\D/g, '').slice(0, 6))
                  }
                  placeholder=" "
                  maxLength={6}
                  required
                  className="peer pt-6 px-4 pb-4 rounded-xl border border-[#dddfe2] bg-white text-[#1c1e21] text-2xl text-center tracking-[0.5em] outline-none transition-[border-color] duration-150 placeholder:text-transparent focus:border-indigo-600"
                />
                <label
                  className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-base text-[#90949c] pointer-events-none transition-all duration-200 ease-out
                    peer-focus:top-1.5 peer-focus:-translate-x-1/2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-indigo-600
                    peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:-translate-x-1/2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600"
                >
                  Verification code
                </label>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="bg-transparent border-none text-indigo-600 text-sm font-medium cursor-pointer hover:underline disabled:text-gray-400 disabled:cursor-not-allowed disabled:no-underline"
                  onClick={handleResend}
                  disabled={timeLeft > 0}
                >
                  Resend code
                </button>
                {timeLeft > 0 ? (
                  <span className="text-sm text-[#606770]">
                    Code expired in {timeLeft}s
                  </span>
                ) : null}
              </div>
              <button
                type="submit"
                className="px-3 py-2.5 text-base font-semibold rounded-full border-none bg-indigo-600 text-white cursor-pointer transition-colors duration-150 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={code.length !== 6 || timeLeft <= 0}
              >
                Verify
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/auth-comp/Footer';
import PasswordInput from '../components/auth-comp/PasswordInput';

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 76 }, (_, i) => 2025 - i);
const GENDERS = ['Male', 'Female', 'Other'];

const inputBase =
  'pt-6 px-4 pb-4 rounded-xl border border-[#dddfe2] bg-white text-[#1c1e21] text-base outline-none transition-[border-color] duration-150 placeholder:text-transparent focus:border-indigo-600';
const labelBase =
  'absolute left-4 top-1/2 -translate-y-1/2 text-base text-[#90949c] pointer-events-none transition-all duration-200 ease-out peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600';
const selectBase =
  'px-4 py-3.5 rounded-xl border border-[#dddfe2] bg-white text-[#1c1e21] text-base outline-none transition-[border-color] duration-150 focus:border-indigo-600';

export default function RegisterPage() {
  const [nickname, setNickname] = useState('');
  const [signature, setSignature] = useState('');
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'test@example.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword || !nickname || !gender || !day || !month || !year)
      return;
    console.log('Create account:', { email, nickname, gender, day, month, year, password });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f0f2f5] p-5">
      <div className="flex flex-col items-center flex-1">
        <div className="w-full flex justify-center pt-6 pb-10">
          <div className="w-full max-w-[540px] flex-shrink-0 bg-white rounded-lg p-10 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-center text-[#1c1e21] mb-2">
              Create account
            </h2>
            <form
              className="flex flex-col w-full gap-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-1.5 relative">
                <input
                  type="email"
                  value={email}
                  readOnly
                  placeholder=" "
                  className={`peer ${inputBase} bg-[#f3f4f6] text-[#6b7280] cursor-not-allowed`}
                />
                <label className={labelBase}>Email</label>
              </div>
              <div className="flex flex-col gap-1.5 relative">
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder=" "
                  required
                  className={`peer ${inputBase}`}
                />
                <label className={labelBase}>Nickname</label>
              </div>
              <div className="flex flex-col gap-1.5">
                <textarea
                  value={signature}
                  onChange={(e) => {
                    if (e.target.value.length <= 200) setSignature(e.target.value);
                  }}
                  placeholder="Say something about yourself... (Signature)"
                  rows={3}
                  className="w-full min-h-[90px] px-4 py-3 rounded-xl border border-[#dddfe2] bg-white text-[#1c1e21] text-[15px] leading-relaxed resize-none outline-none transition-[border-color] duration-150 placeholder:text-[#9ca3af] focus:border-indigo-600"
                />
                <span className="block text-right mt-1 text-xs text-[#9ca3af]">
                  {signature.length}/200
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className={selectBase}
                >
                  <option value="">Gender</option>
                  {GENDERS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                  className={`flex-1 ${selectBase} py-3 px-2`}
                >
                  <option value="">Day</option>
                  {DAYS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                  className={`flex-1 ${selectBase} py-3 px-2`}
                >
                  <option value="">Month</option>
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className={`flex-1 ${selectBase} py-3 px-2`}
                >
                  <option value="">Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <PasswordInput value={password} onChange={setPassword} label="Password" autoComplete="new-password" />
              <PasswordInput value={confirmPassword} onChange={setConfirmPassword} label="Confirm password" autoComplete="new-password" />
              <button
                type="submit"
                className="px-3 py-2.5 text-base font-semibold rounded-full border-none bg-indigo-600 text-white cursor-pointer transition-colors duration-150 hover:bg-indigo-700 active:bg-indigo-800"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

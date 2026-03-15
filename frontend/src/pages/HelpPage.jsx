import { useState } from 'react';

const FAQS = [
  {
    q: 'How do I create an account?',
    a: "Click \"Sign up\" on the login page, enter your email address and follow the verification steps. You'll receive a 6-digit code in your inbox.",
  },
  {
    q: "I didn't receive the verification code. What should I do?",
    a: 'Check your spam or junk folder. If it\'s not there, wait 60 seconds and use the "Resend code" button on the verification page.',
  },
  {
    q: 'How do I change my password?',
    a: "Go to your profile settings and select \"Change password\". You'll need to enter your current password before setting a new one.",
  },
  {
    q: 'Can I delete my account?',
    a: 'Yes. Go to Settings → Account → Delete Account. Note that this action is permanent and all your data will be removed.',
  },
  {
    q: 'Is ChatApp free to use?',
    a: 'Yes, ChatApp is completely free. We may introduce optional premium features in the future, but core messaging will always be free.',
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1c1e21] leading-tight mb-3">
          Help <span className="text-indigo-600">Center</span>
        </h1>
        <p className="text-lg text-[#606770]">
          Find answers to the most common questions below.
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-14">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl px-6 py-5 cursor-pointer transition-shadow duration-150 shadow-[0_1px_4px_rgba(0,0,0,0.07)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.1)] ${
              openIndex === i ? 'shadow-[0_3px_10px_rgba(79,70,229,0.15)]' : ''
            }`}
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <span className="text-base font-semibold text-[#1c1e21]">
                {item.q}
              </span>
              <span className="text-[15px] text-indigo-600 flex-shrink-0 ml-4">
                {openIndex === i ? '▲' : '▼'}
              </span>
            </div>
            {openIndex === i && (
              <p className="mt-3 text-[15px] text-[#606770] leading-relaxed">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="py-10 px-6 md:px-8 bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.07)] mb-4">
        <h2 className="text-[22px] font-bold text-[#1c1e21] mb-2.5 text-center">
          Still need help?
        </h2>
        <p className="text-[15px] text-[#606770] mb-6 text-center">
          Our support team is available Monday – Friday, 9am – 6pm.
        </p>
        <p className="text-[15px]font-semibold text-[#606770] mb-3 text-left">
          Contact us at:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="space-y-2">
            <p className="text-[15px] text-[#1c1e21]">
              <span className="text-[#606770]">Email:</span> nhoanglam2309@gmail.com
            </p>
            <p className="text-[15px] text-[#1c1e21]">
              <span className="text-[#606770]">Phone:</span> 0911876754
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[15px] text-[#1c1e21]">
              <span className="text-[#606770]">Address:</span> 1, Vo Van Ngan Street, Linh Chung, Thu Duc, Ho Chi Minh City
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

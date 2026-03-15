const SECTIONS = [
  {
    title: '1. Information We Collect',
    content:
      'When you register, we collect your email address, nickname, date of birth and gender. We also collect usage data such as login times and message metadata (not message content) to improve our service.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'Your information is used to provide and improve ChatApp services, verify your identity, send important account notifications, and personalise your experience. We do not sell your personal data to any third party.',
  },
  {
    title: '3. Data Storage & Security',
    content:
      'All data is stored on secure servers with industry-standard encryption. Passwords are hashed and never stored in plain text. We use HTTPS for all data in transit.',
  },
  {
    title: '4. Cookies',
    content:
      'We use essential cookies to keep you logged in and remember your preferences. We do not use advertising or tracking cookies. You can disable cookies in your browser settings, but some features may not work correctly.',
  },
  {
    title: '5. Third-Party Services',
    content:
      'ChatApp may integrate with third-party services such as Google Sign-In. These services have their own privacy policies. We are not responsible for how third parties handle your data.',
  },
  {
    title: '6. Your Rights',
    content:
      'You have the right to access, correct or delete your personal data at any time through your account settings. You may also request a full export of your data by contacting our support team.',
  },
  {
    title: "7. Children's Privacy",
    content:
      "ChatApp is not intended for users under the age of 13. If we become aware that a child under 13 has registered, we will promptly delete their account and associated data.",
  },
  {
    title: '8. Changes to This Policy',
    content:
      'We may update these policies from time to time. When we do, we will notify you via email or an in-app notice. Continued use of ChatApp after changes constitutes your acceptance of the updated policy.',
  },
];

export default function PoliciesPage() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1c1e21] leading-tight mb-3">
          Privacy <span className="text-indigo-600">Policies</span>
        </h1>
        <p className="text-lg text-[#606770]">Last updated: 15th, February 2026</p>
      </div>

      <div className="bg-white rounded-xl px-7 py-6 mb-7 shadow-[0_1px_4px_rgba(0,0,0,0.07)] text-[15px] text-[#606770] leading-relaxed">
        <p>
          At ChatApp, we value your privacy. This policy explains what data we
          collect, how we use it, and the choices you have. Please read it
          carefully.
        </p>
      </div>

      <div className="flex flex-col gap-5 mb-14">
        {SECTIONS.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl px-7 py-6 shadow-[0_1px_4px_rgba(0,0,0,0.07)]"
          >
            <h3 className="text-base font-bold text-[#1c1e21] mb-2.5">
              {s.title}
            </h3>
            <p className="text-[15px] text-[#606770] leading-[1.7]">
              {s.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

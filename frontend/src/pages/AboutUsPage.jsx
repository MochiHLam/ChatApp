export default function AboutUsPage() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1c1e21] leading-tight mb-3">
          About <span className="text-indigo-600">ChatApp</span>
        </h1>
        <p className="text-lg text-[#606770]">
          Connecting people, one message at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        <div className="bg-white rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="text-lg font-bold text-[#1c1e21] mb-2.5">
            Our mission
          </h3>
          <p className="text-[15px] text-[#606770] leading-relaxed">
            ChatApp was built with a simple goal — to make communication feel
            natural, fast and secure for everyone. Whether you're catching up
            with friends or collaborating with teammates, we've got you covered.
          </p>
        </div>
        <div className="bg-white rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-lg font-bold text-[#1c1e21] mb-2.5">
            Our story
          </h3>
          <p className="text-[15px] text-[#606770] leading-relaxed">
            Founded in 2026 by a small team of passionate developers, ChatApp
            started as a university project and grew into a platform used by
            thousands. We believe great communication starts with great tools.
          </p>
        </div>
        <div className="bg-white rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-lg font-bold text-[#1c1e21] mb-2.5">
            Privacy first
          </h3>
          <p className="text-[15px] text-[#606770] leading-relaxed">
            We take your privacy seriously. All messages are encrypted and
            your data is never sold to third parties. You control what you
            share, always.
          </p>
        </div>
        <div className="bg-white rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="text-3xl mb-3">🌍</div>
          <h3 className="text-lg font-bold text-[#1c1e21] mb-2.5">
            Global community
          </h3>
          <p className="text-[15px] text-[#606770] leading-relaxed">
            With users across dozens of countries, ChatApp brings people
            together across borders and time zones. Join our growing community
            today.
          </p>
        </div>
      </div>

      <div className="text-center mb-14">
        <h2 className="text-2xl font-bold text-[#1c1e21] mb-7">
          Meet the team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex items-center justify-center text-xl font-bold">
              HL
            </div>
            <p className="text-[15px] font-semibold text-[#1c1e21]">
              Hoang Lam
            </p>
            <p className="text-[13px] text-[#606770]">Leader</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex items-center justify-center text-xl font-bold">
              HL
            </div>
            <p className="text-[15px] font-semibold text-[#1c1e21]">
              Hoang Long
            </p>
            <p className="text-[13px] text-[#606770]">Co-Leader</p>
          </div>
        </div>
      </div>
    </>
  );
}

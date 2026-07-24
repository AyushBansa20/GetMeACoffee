import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pb-12">

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center mt-8 sm:mt-16 md:mt-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight leading-tight">
          Get Me A Coffee! ☕
        </h1>

        <p className="text-gray-300 text-center w-[90%] sm:w-[80%] md:w-[60%] text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
          A crowdfunding platform for creators to fund their projects and connect directly with their supporters.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg mt-6 sm:mt-8">
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 sm:px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95">
            Get Started
          </Link>

          <Link href="/about" className="bg-green-700 hover:bg-green-800 text-white font-medium px-5 sm:px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95">
            About
          </Link>
        </div>
      </section>

      <hr className="border-t-2 border-gray-800 my-10 sm:my-14 max-w-5xl mx-auto px-4" />

      {/* Features Section */}
      <section className="flex flex-col items-center gap-6 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
          Your supporters are ready to help 🤝
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl mt-4">

          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800/40 border border-gray-800 rounded-2xl shadow-sm hover:border-gray-700 transition-all">
            <img
              src="https://cdn.dribbble.com/userupload/20915764/file/original-47e16e35505d9830353b1e0b8c42f2af.gif"
              alt="Supporters help"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full bg-black p-1 mb-4"
              loading="lazy"
            />
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Supporters want to help
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Your supporters are available to help fund your projects anytime.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800/40 border border-gray-800 rounded-2xl shadow-sm hover:border-gray-700 transition-all">
            <img
              src="https://cdn.dribbble.com/userupload/19717488/file/original-ab2b706145078367c875f2922b392c20.gif"
              alt="Community love"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-4"
              loading="lazy"
            />
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Direct Contributions
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Receive direct contributions safely via your integrated payment gateway.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-800/40 border border-gray-800 rounded-2xl shadow-sm hover:border-gray-700 transition-all sm:col-span-2 md:col-span-1">
            <img
              src="https://cdn.dribbble.com/userupload/19734437/file/original-e5136d98e0d810356e5d5d32474ccf76.gif"
              alt="Build together"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-4"
              loading="lazy"
            />
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Grow Your Community
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Build a loyal fan base that supports your journey step by step.
            </p>
          </div>

        </div>
      </section>

      <hr className="border-t-2 border-gray-800 my-10 sm:my-14 max-w-5xl mx-auto px-4" />

      {/* Video Section */}
      <section className="flex flex-col items-center gap-6 justify-center w-full px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
          Learn more about how it works 🎥
        </h2>

        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <iframe 
            className="w-full h-full" 
            src="https://www.youtube.com/embed/ls0UVO_mJt0?si=w9CpWCZ7gLJ9kLzR"
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen 
          ></iframe>
        </div>
      </section>

    </main>
  );
}

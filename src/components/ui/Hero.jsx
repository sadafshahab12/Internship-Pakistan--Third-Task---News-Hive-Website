const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-slate-800 text-center max-w-4xl p-6 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-red-800">
          Breaking News: AI Revolution in Web Development
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl font-Karla font-medium">
          Discover how AI is transforming frontend development, making design
          and code more efficient than ever before.
        </p>
        <a
          href="/news/ai-revolution"
          className="text-sm inline-block px-6 py-3 bg-red-800 text-white text-lg font-medium rounded-md shadow-lg hover:bg-slate-800 transition-all duration-300"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default Hero;

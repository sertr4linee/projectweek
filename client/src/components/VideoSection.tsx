'use client'

export default function VideoSection() {
  return (
    <div className="relative mt-24 sm:mt-32 md:mt-40">
      {/* Vidéo Ona */}
      <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] absolute -top-[200px] sm:-top-[250px] md:-top-[300px] left-1/2 -translate-x-1/2">
        <div className="absolute inset-0 rounded-full bg-[#FF7900] opacity-10 blur-2xl"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/ona complet mouv fond noir.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative max-w-[600px] w-full z-10">
        {/* Fond blanc décoratif */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-8 sm:h-12 bg-white/5 blur-lg rounded-b-[40px]"></div>
        
        {/* Fond avec effet de verre */}
        <div className="relative bg-black border border-white/20 rounded-[30px] sm:rounded-[40px] p-4 sm:p-8 text-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 sm:mb-3">
            Bonjour, je suis Ona™ 
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90">
            Comment puis-je vous aidez ?
          </p>
        </div>
      </div>
    </div>
  )
} 
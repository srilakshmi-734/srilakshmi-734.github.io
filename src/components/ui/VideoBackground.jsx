import React from "react";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#F9FAFB] dark:bg-[#0B0F19] transition-colors duration-500">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-50 dark:opacity-40 blur-[2px] scale-105"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/40" />
      
      {/* Gradient Vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/30" />
    </div>
  );
};

export default VideoBackground;
"use client";

import React, { useState, useRef, useEffect } from "react";

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt to autoplay on load (muted)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section className="relative w-full py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        {/* Header Text */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <h2 className="text-[56px] font-normal leading-[1.1] tracking-[-0.01em] text-[#1A1A1A] mb-6 font-display">
            See It Work
          </h2>
          <p className="text-[20px] leading-[1.5] text-[#7D7D7D] font-display">
            Watch ZeroDrift catch a violation before it goes out. The sender fixes
            it instantly. Compliance never has to chase it down. This is how it
            should work.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full max-w-[1080px] mx-auto group">
          {/* Card Frame with Grid Pattern */}
          <div className="relative bg-white border border-[#E6E6E6] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Background Grid Pattern (Matching Globals and High Level Design) */}
            <div 
              className="absolute inset-0 opacity-[0.4] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #EBEBEB 1px, transparent 1px), linear-gradient(to bottom, #EBEBEB 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Video Wrapper */}
            <div className="relative z-10 p-8 flex items-center justify-center min-h-[500px]">
              <div className="w-full h-full rounded-[8px] overflow-hidden bg-white/10 backdrop-blur-sm">
                <video
                  ref={videoRef}
                  className="w-full h-auto object-cover rounded-[8px]"
                  src="https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219%2F698a2c65de3709d7e9a5188b_guard_mp4.mp4"
                  poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6981490c51c1e151d4cb9219_2F698a2c65de3709d7e9a5188-19.jpg"
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Controls Overlay */}
            <div className="absolute bottom-6 right-6 z-20">
              <button
                onClick={togglePlay}
                className="px-4 py-2 bg-white border border-[#E6E6E6] rounded-[4px] text-[12px] font-medium tracking-[0.05em] uppercase text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
              >
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
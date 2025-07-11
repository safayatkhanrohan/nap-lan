import React, { useState, useRef, useEffect } from "react";
import sparkleUp from "../../assets/icons/sparkle-up.png";
import sparkleDown from "../../assets/icons/sparkle-down.png";
import bookIcon from "../../assets/icons/book.png";

const VideoPlayer = () => {
     const [isPlaying, setIsPlaying] = useState(false);
     const [currentTime, setCurrentTime] = useState(0);
     const [duration, setDuration] = useState(0);
     const [progress, setProgress] = useState(0);
     const [volume, setVolume] = useState(0.8);
     const [isMuted, setIsMuted] = useState(false);
     const [isFullscreen, setIsFullscreen] = useState(false);
     const videoRef = useRef<HTMLVideoElement>(null);
     const containerRef = useRef<HTMLDivElement>(null);

     // Load video metadata
     useEffect(() => {
          if (videoRef.current) {
               const video = videoRef.current;

               const handleLoadedMetadata = () => {
                    setDuration(video.duration);
               };

               const handleTimeUpdate = () => {
                    setCurrentTime(video.currentTime);
                    setProgress((video.currentTime / video.duration) * 100);
               };

               video.addEventListener("loadedmetadata", handleLoadedMetadata);
               video.addEventListener("timeupdate", handleTimeUpdate);

               // Cleanup
               return () => {
                    video.removeEventListener("loadedmetadata", handleLoadedMetadata);
                    video.removeEventListener("timeupdate", handleTimeUpdate);
               };
          }
     }, []);

     // Fullscreen change handler
     useEffect(() => {
          const handleFullscreenChange = () => {
               setIsFullscreen(
                    document.fullscreenElement === containerRef.current ||
                         (document as any).webkitFullscreenElement === containerRef.current
               );
          };

          document.addEventListener("fullscreenchange", handleFullscreenChange);
          document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

          return () => {
               document.removeEventListener("fullscreenchange", handleFullscreenChange);
               document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
          };
     }, []);

     // Play/pause toggle
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

     // Seek functionality
     const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (videoRef.current) {
               const newTime = (parseFloat(e.target.value) / 100) * duration;
               videoRef.current.currentTime = newTime;
               setProgress(parseFloat(e.target.value));
          }
     };

     // Volume control
     const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newVolume = parseFloat(e.target.value);
          setVolume(newVolume);
          if (videoRef.current) {
               videoRef.current.volume = newVolume;
          }
     };

     // Toggle mute
     const toggleMute = () => {
          if (videoRef.current) {
               videoRef.current.muted = !isMuted;
               setIsMuted(!isMuted);
          }
     };

     // Toggle fullscreen
     const toggleFullscreen = () => {
          if (!containerRef.current) return;

          if (!isFullscreen) {
               if (containerRef.current.requestFullscreen) {
                    containerRef.current.requestFullscreen();
               } else if ((containerRef.current as any).webkitRequestFullscreen) {
                    (containerRef.current as any).webkitRequestFullscreen();
               }
          } else {
               if (document.exitFullscreen) {
                    document.exitFullscreen();
               } else if ((document as any).webkitExitFullscreen) {
                    (document as any).webkitExitFullscreen();
               }
          }
     };

     // Format time in MM:SS
     const formatTime = (time: number): string => {
          if (isNaN(time)) return "0:00";

          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);
          return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
     };

     // Handle keyboard shortcuts
     useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
               if (!videoRef.current) return;

               switch (e.key) {
                    case " ":
                         togglePlay();
                         e.preventDefault();
                         break;
                    case "f":
                         toggleFullscreen();
                         e.preventDefault();
                         break;
                    case "m":
                         toggleMute();
                         e.preventDefault();
                         break;
                    case "ArrowLeft":
                         videoRef.current.currentTime = Math.max(
                              0,
                              videoRef.current.currentTime - 5
                         );
                         break;
                    case "ArrowRight":
                         videoRef.current.currentTime = Math.min(
                              duration,
                              videoRef.current.currentTime + 5
                         );
                         break;
                    case "ArrowUp":
                         setVolume((prev) => Math.min(1, prev + 0.1));
                         break;
                    case "ArrowDown":
                         setVolume((prev) => Math.max(0, prev - 0.1));
                         break;
                    case "Escape":
                         // If we're in fullscreen, exit fullscreen when ESC is pressed
                         if (isFullscreen) {
                              toggleFullscreen();
                         }
                         break;
               }
          };

          window.addEventListener("keydown", handleKeyDown);
          return () => {
               window.removeEventListener("keydown", handleKeyDown);
          };
     }, [isPlaying, isMuted, volume, duration, isFullscreen]);

     return (
          <div className="relative w-max mx-auto">
               {/* sparkle up */}
               <div className="absolute -left-20 -top-20 z-10">
                    <img src={sparkleUp} alt="Sparkle Up" className="w-32 h-32" />
               </div>
               {/* sparkle down */}
               <div className="absolute -right-20 -bottom-20 z-10">
                    <img src={sparkleDown} alt="Sparkle Up" className="w-32 h-32" />
               </div>

               <div className="w-[220px] h-[100px] rounded-[20px] flex justify-center items-center flex-col shadow-lg absolute top-24 right-0 translate-x-1/2 bg-white z-10">
                    <div className="relative h-full w-full">
                         <div className="absolute top-1 left-2 -translate-1/2 w-14 h-14 bg-[#ffa558] flex justify-center items-center shadow-md rounded-full">
                              <img src={bookIcon} alt="Book Icon" className="w-10 h-10" />
                         </div>
                    </div>
                    Hello
               </div>
               <div className="w-[220px] h-[100px] rounded-[20px] flex justify-center items-center flex-col shadow-lg absolute bottom-24 -left-0 -translate-x-1/2 bg-white z-10">
                    <div className="relative h-full w-full">
                         <div className="absolute">
                              <img src={bookIcon} alt="Book Icon" className="w-10 h-10" />
                         </div>
                    </div>
                    Hello
               </div>

               <div
                    ref={containerRef}
                    className="max-w-[1060px] mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative group">
                         {/* Video container */}
                         <div className="relative aspect-video bg-black">
                              <video
                                   ref={videoRef}
                                   className="w-full h-full object-cover"
                                   poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80">
                                   <source src="/videos/intro.mp4" type="video/mp4" />
                                   Your browser does not support the video tag.
                              </video>

                              {/* Central play button */}
                              {!isPlaying && (
                                   <button
                                        onClick={togglePlay}
                                        className="absolute inset-0 flex items-center justify-center w-full h-full group-hover:opacity-100 opacity-90 transition-opacity">
                                        <div className="bg-black/40 rounded-full p-4 backdrop-blur-sm">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-20 w-20 text-white"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor">
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        </div>
                                   </button>
                              )}
                         </div>

                         {/* Controls overlay */}
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              {/* Progress bar */}
                              <div className="flex items-center mb-3">
                                   <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={handleSeek}
                                        className="w-full h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                   />
                              </div>

                              <div className="flex items-center justify-between">
                                   <div className="flex items-center space-x-4">
                                        {/* Play/Pause button */}
                                        <button onClick={togglePlay} className="text-white">
                                             {isPlaying ? (
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-6 w-6"
                                                       viewBox="0 0 20 20"
                                                       fill="currentColor">
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                       />
                                                  </svg>
                                             ) : (
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-6 w-6"
                                                       viewBox="0 0 20 20"
                                                       fill="currentColor">
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                            clipRule="evenodd"
                                                       />
                                                  </svg>
                                             )}
                                        </button>

                                        {/* Volume control */}
                                        <div className="flex items-center space-x-2">
                                             <button onClick={toggleMute} className="text-white">
                                                  {isMuted || volume === 0 ? (
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                 fillRule="evenodd"
                                                                 d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                                                 clipRule="evenodd"
                                                            />
                                                       </svg>
                                                  ) : (
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                 fillRule="evenodd"
                                                                 d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z"
                                                                 clipRule="evenodd"
                                                            />
                                                       </svg>
                                                  )}
                                             </button>
                                             <input
                                                  type="range"
                                                  min="0"
                                                  max="1"
                                                  step="0.01"
                                                  value={volume}
                                                  onChange={handleVolumeChange}
                                                  className="w-20 h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                             />
                                        </div>

                                        {/* Time display */}
                                        <div className="text-white text-sm font-mono">
                                             {formatTime(currentTime)} / {formatTime(duration)}
                                        </div>
                                   </div>
                                   {/* Fullscreen button */}
                                   <button
                                        onClick={toggleFullscreen}
                                        className="text-white">
                                        {isFullscreen ? (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-5 w-5"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor">
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        ) : (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-5 w-5"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor">
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 9a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        )}
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default VideoPlayer;

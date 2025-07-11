import VideoPlayer from "../../videoplayer/VideoPlayer";

function VideoIntro() {
    return (
         <div className="max-w-7xl mx-auto mt-24 relative">
              <div
                   className="absolute w-[500px] h-[500px] -left-[250px] -top-[120px] bg-[#2AF595] opacity-30 blur-[200px] "
              />
              <div
                   className="absolute w-[500px] h-[500px] -right-[250px] -bottom-[250px] bg-[#e6700b] opacity-15 blur-[200px]"
              />
              <h2 className="text-center text-5xl font-bold mb-20 leading-tight">
                   Boost Your Child's <br /> <span className="text-[#ff7777]">NAPLAN</span>{" "}
                   Performance
              </h2>
              <div className="relative">
                   <VideoPlayer />
              </div>
         </div>
    );
}

export default VideoIntro;
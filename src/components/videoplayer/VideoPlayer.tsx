import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import './player.css'

const VideoPlayer = ({videoSrc}: {videoSrc: string}) => {
     return (
          <div className='rounded-[20px] overflow-hidden shadow-lg mx-auto'>
               <Plyr
                    source={{
                         type: 'video',
                         sources: [
                              {
                                   src: videoSrc,
                                   type: 'video/mp4',
                              },
                         ],
                    }}
               />
          </div>
     );
}

export default VideoPlayer;

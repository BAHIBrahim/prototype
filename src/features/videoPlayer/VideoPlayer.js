import testvid from "../../assets/videos/testvid.mp4"

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ClosedCaptionOffRoundedIcon from '@mui/icons-material/ClosedCaptionOffRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined';

const VideoPlayer = () => {
   

  return(
    <div>
      <div className="group flex relative items-center justify-center w-11/12 max-w-5xl">
        <div className={"absolute right-0 left-0 bottom-0 bg-black opacity-0 h-16 transition ease-in-out delay-150 group-hover:opacity-10" /* +paused?"opacity-10":"" */}> {/*video controls*/}
        </div>  
        <div className="absolute right-0 left-0 bottom-0 flex items-center justify-between group-hover:opacity-100 opacity-10 h-16 transition ease-in-out delay-150 text-white"> {/* buttons */}
          <div className="flex items-center mx-4 gap-3">
            <SkipPreviousRoundedIcon sx={{fontSize: 32}}></SkipPreviousRoundedIcon>
            <PlayArrowRoundedIcon sx={{fontSize: 32}}></PlayArrowRoundedIcon>
            <SkipNextRoundedIcon sx={{fontSize: 32}}></SkipNextRoundedIcon>
            <VolumeUpRoundedIcon sx={{fontSize: 26}}></VolumeUpRoundedIcon>
          </div>
          <div className="flex items-center mx-4 gap-3">
            <ClosedCaptionOffRoundedIcon></ClosedCaptionOffRoundedIcon>
            <SettingsRoundedIcon></SettingsRoundedIcon>

          </div>
        </div>
        {/* video player */}
        <video src={testvid} className=""></video>
      </div>
    </div>
  )
}

export default VideoPlayer
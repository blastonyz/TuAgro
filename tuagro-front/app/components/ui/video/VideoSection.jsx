import './video.css'

const VideoSection = () => {
  return (
    <div className="videoMain">
    <video src="https://res.cloudinary.com/doatjpkkh/video/upload/v1743744967/tuagro-backvideo_onrtry.mp4" autoPlay={true} muted loop playsInline className='video'></video>
</div>
  )
}

export default VideoSection
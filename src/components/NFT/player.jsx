import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
// import screenfull from "screenfull";

function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitEnterFullScreen) {
    element.webkitEnterFullScreen();
  }
}

const EddaPlayer = ({
  url,
  playing,
  volume,
  muted,
  width,
  onEnded,
  controls,
}) => {
  const ref = useRef();
  // const [internalPlaying, setInternalPlaying] = useState(playing);
  const onPlayingClick = () => {
    const video = ref.current.getInternalPlayer();
    // video.fullscreenEnabled =
    //   video.fullscreenEnabled ||
    //   video.mozFullScreenEnabled ||
    //   video.documentElement?.webkitRequestFullScreen;
    // console.log(video);
    // return video.fullscreenEnabled && requestFullscreen(video);
    requestFullscreen(video);
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: "100%",
          position: "absolute",
          zIndex: 5,
          cursor: "pointer",
        }}
        onClick={onPlayingClick}
      />
      <div className="player-fullscreen" onClick={onPlayingClick}>
        <img src="/nft/view.svg" alt="" />
      </div>
      <ReactPlayer
        url={url}
        // playing={playing}
        volume={volume}
        muted={muted}
        width={width}
        // onEnded={() => {
        //   ref.current.seekTo(0, "seconds");
        //   onEnded();
        // }}
        controls={controls}
        ref={ref}
        style={{ borderRadius: "16px" }}
      />
    </div>
  );
};

export default EddaPlayer;

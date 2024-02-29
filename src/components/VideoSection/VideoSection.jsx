import React from "react";
import Button from "../Button/Button";
import "./VideoSection.css";
import "../../App.css";

const VideoSection = () => {
  return (
    <div className="videoContainer">
      <video src="../../../../Videos/video.mp4" autoPlay loop muted />
      <h1>주임님이 넣고 싶은 내용과 영상</h1>
      <p>인트로 페이지</p>
      <div className="videoButtons">
        <Button
          className="vidButton"
          buttonStyle="btn_outline"
          buttonSize="btn_large"
        >
          링크 1
        </Button>

        <Button
          className="vidButton"
          buttonStyle="btn_primary"
          buttonSize="btn_large"
        >
          링크 2 <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default VideoSection;

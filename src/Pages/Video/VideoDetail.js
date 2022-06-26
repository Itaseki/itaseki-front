import React from 'react';
import {useParams} from "react-router-dom";

const VideoDetail = () => {
  const videoId = useParams().id;

  return <div>{videoId}</div>
};

export default VideoDetail;
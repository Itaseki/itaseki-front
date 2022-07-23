import React from "react";
import {useParams} from "react-router-dom";

const PlaylistDetail = () => {
  const plyId = useParams().id;

  return <div>{plyId} 상세 플레이리스트 게시판</div>

}

export default PlaylistDetail;
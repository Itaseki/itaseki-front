import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
// Style
import { Line, SortBox, Wrapper } from "../../Style/Video";
import {
  FourListWrapper,
  FourList,
  OnePlyWrapper,
  PlyContainer,
  PlyInfo,
} from "../../Style/Playlist";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Assets
import BestPly from "../../Assets/Best_Ply.png";
import Line_info from "../../Assets/Line_info.png";
import Add_New_Ply from "../../Assets/Add_New_Ply.png";
import Stored_Ply from "../../Assets/Stored_Ply.png";
import Ply_Count_Icon from "../../Assets/Ply_Count_Icon.png";
import Ply_preview from "../../Assets/Ply_preview.png";

// 플레이리스트 한개
const OnePly = (ply) => {
  const colors = light.colors;

  return (
    <OnePlyWrapper>
      <PlyContainer>
        <img id="thumbnail" src={ply.titleImageUrl} alt="썸네일" />
        <img id="cover" src={Ply_preview} alt="썸네일 커버" />
      </PlyContainer>
      <div>
        <PlyInfo>
          <span id="title">{ply.title}</span>
          <div id="info-right">
            <StyledBtn>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "80%",
                  color: "#D9767C",
                  marginLeft: "auto",
                }}
              />
            </StyledBtn>
            <span style={{ color: "#D9767C" }}>{ply.likeCount}</span>
            <img
              src={Ply_Count_Icon}
              alt="저장된 카운트"
              style={{ width: "22px", height: "13px", marginLeft: "4px" }}
            />
            <span>{ply.saveCount}</span>
          </div>
        </PlyInfo>
        <div style={{ fontSize: "small" }}>
          <span>{ply.writerNickname}</span>
          <img src={Line_info} alt="line" style={{ margin: "0 10px" }} />
          <span style={{ color: colors.reservColor }}>
            총 {ply.videoCount}개 영상
          </span>
        </div>
      </div>
    </OnePlyWrapper>
  );
};

export default OnePly;

import React, { useState } from "react";
import {
  AddNewPlyBtn,
  AutoFrame,
  MakeNewPlyBtn,
  NewPlyInput,
  OneSelectItemWrapper,
  OneVideoWrapper,
  SwitchBtnLabel,
  ToggleScrollWrapper,
  VideoContainer,
  VideoInfo,
  XButton,
} from "../../Style/Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../../Style/StyledBtn";
import preURL from "../../preURL/preURL";
import axios from "axios";
import PlayListIcon from "../../Assets/Playlist_mini.png";
import { Link } from "react-router-dom";
import useInput from "../../Hooks/useInput";

// 각 비디오
const OneVideo = (video) => {
  const [playlistToggleDisplay, setPlaylistToggleDisplay] = useState(false); // 플레이리스트 모달창 보이기
  const [playlistList, setPlaylistList] = useState([]); // 받아온 내 플레이리스트 목록
  const [clickedPlyId, setClickedPlyId] = useState(-1); // 클릭한 플레이리스트 아이콘 id

  // 새로운 플레이리스트
  const [addNewPly, setAddNewPly] = useState(false);
  const [newPlyName, onChangeNewPlyName, setNewPlyName] = useInput("");
  const [newPlyPublic, setNewPlyPublic] = useState(false);

  const videoId = video.id;

  // 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlaylistToggleDisplay((prev) => !prev);
  };

  // 플레이리스트 토글 리스트
  const PlayList = playlistList.map((onePlayList) => {
    return (
      <OneSelectItemWrapper>
        <input
          type="checkbox"
          id={onePlayList.id}
          value={onePlayList.title}
          // onChange={selectPlayList}
        />
        <label>{onePlayList.title}</label>
        <div>
          {onePlayList.isPublic ? (
            <SwitchBtnLabel>
              <span
                className="active"
                id={onePlayList.id}
                onClick={onClickPublic}
              >
                공개
              </span>
            </SwitchBtnLabel>
          ) : (
            <SwitchBtnLabel>
              <span id={onePlayList.id} onClick={onClickPublic}>
                비공개
              </span>
            </SwitchBtnLabel>
          )}
        </div>
      </OneSelectItemWrapper>
    );
  });

  // 플레이리스트 공개/비공개
  const onClickPublic = (prop) => {
    const Target = prop.target;
    const id = Target.id;
    axios
      .patch(preURL.preURL + `/boards/playlist/${id}`)
      .then((res) => {
        console.log("👍플레이리스트 공개/비공개 수정 성공");
        if (res.status === 200) {
          prop.target.parentNode.classList.toggle("active");
          Target.classList.toggle("active");
          // console.log(prop.target.parentNode.classList)
          // console.log(Target);
          if (Target.innerText === "비공개") Target.innerText = "공개";
          else Target.innerText = "비공개";
        } else if (res.status === 403) alert("수정 권한이 없습니다.");
      })
      .catch((err) => {
        console.log("🧨플레이리스트 공개/비공개 수정 실패", err);
      });
  };

  // 새 플레이리스트 생성
  const onClickMakePly = () => {
    axios
      .post(preURL.preURL + "/boards/playlist", {
        title: newPlyName,
        isPublic: newPlyPublic,
      })
      .then((res) => {
        console.log("👍새 플레이리스트 생성 성공", res.data);
        setNewPlyName("");
        setNewPlyPublic(false);
        setAddNewPly(false);
      })
      .catch((err) => {
        console.log("🧨새 플레이리스트 생성 실패", err);
      });
  };

  let videolistURL = `/videolist/${videoId}`;
  return (
    <OneVideoWrapper>
      <Link to={videolistURL}>
        <VideoContainer>
          <img
            src={video.thumbnailUrl}
            alt="썸네일"
            style={{ width: "240px", height: "135px" }}
          />
        </VideoContainer>
      </Link>
      <div>
        <VideoInfo>
          <Link to={videolistURL}>
            <span id="title">{video.title}</span>
          </Link>
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
            <span style={{ color: "#D9767C" }}>{video.likeCount}</span>
            <img
              src={PlayListIcon}
              alt="플레이리스트에 추가"
              id={videoId}
              onClick={onClickAddToPlaylist}
              style={{ marginLeft: "4px", cursor: "pointer" }}
            />
            {clickedPlyId ===
              videoId /*클릭한 아이콘과 id가 동일한 모달창에만 적용되도록*/ && (
              <AutoFrame
                display={playlistToggleDisplay}
                style={{ marginTop: "200px" }}
              >
                <XButton
                  onClick={() => {
                    setPlaylistToggleDisplay((prev) => !prev);
                    setAddNewPly(false);
                  }}
                >
                  &times;
                </XButton>
                <span>플레이리스트에 담기</span>
                <hr />
                <ToggleScrollWrapper>{PlayList}</ToggleScrollWrapper>
                <div style={{ alignSelf: "center" }}>
                  {addNewPly ? (
                    <>
                      <NewPlyInput
                        type="text"
                        placeholder="플레이리스트 이름"
                        value={newPlyName}
                        onChange={onChangeNewPlyName}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          margin: "10px 0",
                        }}
                      >
                        {newPlyPublic ? (
                          <SwitchBtnLabel style={{ margin: 0 }}>
                            <span
                              className="active"
                              onClick={() => setNewPlyPublic((prev) => !prev)}
                            >
                              공개
                            </span>
                          </SwitchBtnLabel>
                        ) : (
                          <SwitchBtnLabel style={{ margin: 0 }}>
                            <span
                              onClick={() => setNewPlyPublic((prev) => !prev)}
                            >
                              비공개
                            </span>
                          </SwitchBtnLabel>
                        )}
                        <MakeNewPlyBtn onClick={onClickMakePly}>
                          만들기
                        </MakeNewPlyBtn>
                      </div>
                    </>
                  ) : (
                    <AddNewPlyBtn onClick={() => setAddNewPly((prev) => !prev)}>
                      새 플레이리스트 만들기
                    </AddNewPlyBtn>
                  )}
                </div>
              </AutoFrame>
            )}
          </div>
        </VideoInfo>
        <span style={{ fontSize: "small", color: "var(--main-color)" }}>
          {video.writerNickname}
        </span>
      </div>
    </OneVideoWrapper>
  );
};

export default OneVideo;

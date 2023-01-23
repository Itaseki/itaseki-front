import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
import {UserContext} from "../../_contextAPI/UserContext";
import Token from "../Token";
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import {AutoFrame, OneSelectItemWrapper, ToggleScrollWrapper} from "../../Style/Video";
import {XButton} from "./AddVideoToPlaylistModal";
import {SwitchBtnLabel} from "./NewPlaylistModal";

const SavePlyModal = ({plyId, show, setShow}) => {
  const token = Token();

  const [user, setUser] = useContext(UserContext);
  const [myPlayListResponse, setMyPlayListResponse] = useState([]); // 내 플레이리스트 목록
  const [storedResponse, setStoredResponse] = useState([]); // 저장한 플레이리스트 목록


  // 사용자 플레이리스트 조회(TODO 코드 중복)
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/user/${user.id}`, {
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          setMyPlayListResponse(res.data);
          console.log("👍내 플레이리스트 조회 성공", res.data);
        })
        .catch((err) => {
          console.log("🧨내 플레이리스트 조회 실패", err);
        })
  },[]);

  // 저장한 플레이리스트 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + '/boards/playlist/saved', {
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          setStoredResponse(res.data);
          console.log("👍저장한 플레이리스트 조회 성공", res);
        })
        .catch((err) => {
          console.log("🧨저장한 플레이리스트 조회 실패", err);
        })
  },[]);

  // 플레이리스트 저장하기
  const onClickSavePly = () => {
    axios
        .post(preURL.preURL + '/boards/playlist/saved', {
          playlistId: plyId
        },{
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          console.log("👍플레이리스트 저장 성공", res);
          if(res.status === 201)
            alert("플레이리스트를 저장하였습니다.");
          else alert("이미 저장한 플레이리스트입니다.");  // TODO
        })
        .catch((err) => {
          console.log("🧨플레이리스트 저장 실패", err);
        })
  }


  // 모달창 닫기
  const onCloseModal = (e) => {
      e.preventDefault();
      setShow(prev => !prev)
  };

  // 플레이리스트 공개/비공개(TODO 코드 중복)
  const onClickPublic = (prop) => {
    const Target = prop.target;
    const id = Target.id;
    axios
        .patch(preURL.preURL + `/boards/playlist/${id}`,{},{
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          console.log("👍플레이리스트 공개/비공개 수정 성공");
          if(res.status === 200) {
            prop.target.parentNode.classList.toggle('active');
            Target.classList.toggle('active');
            // console.log(prop.target.parentNode.classList)
            // console.log(Target);
            if(Target.innerText === "비공개") Target.innerText = "공개";
            else Target.innerText = "비공개";
          }
          else if(res.status === 403) alert("수정 권한이 없습니다.");  // TODO
        })
        .catch((err) => {
          console.log("🧨플레이리스트 공개/비공개 수정 실패", err);
        })
  }

  // 내 플레이리스트 목록
  const MyPlaylist = myPlayListResponse.map((onePlayList) => {
    return (
        <OneSelectItemWrapper>
          <label>
            {onePlayList.title}
          </label>
          <div>
            {onePlayList.isPublic
                ?
                <SwitchBtnLabel>
                  <span className="active" id={onePlayList.id} onClick={onClickPublic}>공개</span>
                </SwitchBtnLabel>
                :
                <SwitchBtnLabel>
                  <span id={onePlayList.id} onClick={onClickPublic}>비공개</span>
                </SwitchBtnLabel>
            }
          </div>
        </OneSelectItemWrapper>
    )
  });

  // 저장한 플레이리스트 목록
  const StoredPlaylist = storedResponse.map((onePlayList) => {
    return (
        <OneSelectItemWrapper>
          <label style={{width: "80%"}}>
            {onePlayList.title}
          </label>
        </OneSelectItemWrapper>
    )
  })


  return (
      <AutoFrame
          display={show}
          style={{height: "400px", marginBottom: "50px"}}>
          <XButton onClick={onCloseModal}>&times;</XButton>
          <span>플레이리스트 저장하기</span>
          <hr/>
          <Title>내 플레이리스트</Title>
          <ToggleScrollWrapper style={{height: "25%"}}>
            {MyPlaylist}
          </ToggleScrollWrapper>
          <hr/>
          <Title>저장한 플레이리스트</Title>
          <ToggleScrollWrapper style={{height: "60px"}}>
            {StoredPlaylist}
          </ToggleScrollWrapper>
          <SaveBtn onClick={onClickSavePly}>플레이리스트 저장하기</SaveBtn>
      </AutoFrame>
  )
}

export default SavePlyModal;

const Title = styled(StyledBtn)`
  box-sizing: border-box;
  width: 170px;
  height: 33px;
  background-color: black;
  border: 2px dashed white;
  border-radius: 29px;
  padding: 5px;
  color: white;
  align-self: center;
`

const SaveBtn = styled(StyledBtn)`
  box-sizing: border-box;
  width: 170px;
  height: 33px;
  background-color: white;
  border: 2px dashed black;
  border-radius: 29px;
  padding: 5px;
  align-self: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
`
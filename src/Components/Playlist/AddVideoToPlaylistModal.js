import React, {useEffect, useState} from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Token from "../Token";
// Style
import { AutoFrame, OneSelectItemWrapper, ToggleScrollWrapper} from "../../Style/Video";
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import NewPlaylistModal, {SwitchBtnLabel} from "./NewPlaylistModal";

const token = Token();

const AddVideoToPlaylistModal = ({videoId, show, setShow}) => {

  const [playListList, setPlayListList] = useState([]); // 받아온 내 플레이리스트 목록
  /* 등록 처리 필요 */
  const [playList, setPlayList] = useState([]);
  const [selectedPlayListId, setSelectedPlayListId] = useState([]);
  const [addNewPly, setAddNewPly] = useState(false);


  // 사용자 플레이리스트 조회(코드 중복)
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/user/${1}`)  /*사용자 id*/
        .then((res) => {
          setPlayListList(res.data);
          console.log("👍내 플레이리스트 조회 성공", res.data);
        })
        .catch((err) => {
          console.log("🧨내 플레이리스트 조회 실패", err);
        })
  },[]);

  // 플레이리스트에 추가
  const selectPlayList = (prop) => {
    const selected = {id: prop.target.id, name: prop.target.value};
    const boolChecked = prop.target.checked;
    console.log(selected, boolChecked);

    // 1. 선택 항목을 리스트로 만듦
    let newPlaylist, newPlaylistId;
    if(boolChecked) {
      newPlaylist = [...playList, selected.name];
      newPlaylistId = [...selectedPlayListId, selected.id];
      setPlayList(newPlaylist);
      setSelectedPlayListId(newPlaylistId);
    }
    else {
      newPlaylist = playList.filter(playList => playList !== selected.name);
      newPlaylistId = selectedPlayListId.filter(selectedPlayList => selectedPlayList !== selected.id)
      setPlayList(newPlaylist);
      setSelectedPlayListId(newPlaylistId);
    }

    // 임시 오류 방지 - 수정 필요
    if(!videoId) return

    // 선택항목 한개씩 바로 추가
    axios
        .post(preURL.preURL + `/boards/playlist/${selected.id}`,{
          videoId: videoId,
        },{
          headers: {
            'itasekki': token
          }
        })
        .then((res) => {
          console.log("👍플레이리스트에 영상 추가 성공", res);
          if(res.status === 201)
            alert(`${selected.name}에 영상을 추가하였습니다.`);
          else if(res.status === 403)
            alert("권한이 없습니다.");
          else if(res.status === 409) /*작동 안됨 수정 필요*/
            alert(`이미 ${selected.name}에 영상이 있습니다.`);
        })
        .catch((err) => {
          console.log("🧨플레이리스트에 영상 추가 실패", err);
        })
  }

  // 플레이리스트 공개/비공개(코드 중복)
  const onClickPublic = (prop) => {
    const Target = prop.target;
    const id = Target.id;
    axios
        .patch(preURL.preURL + `/boards/playlist/${id}`)
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
          else if(res.status === 403) alert("수정 권한이 없습니다.");
        })
        .catch((err) => {
          console.log("🧨플레이리스트 공개/비공개 수정 실패", err);
        })
  }

  const onCloseToggle = (e) => {
    e.preventDefault();
    setShow(prev => !prev)
  };

  // 토글의 리스트
  const PlayList = playListList.map((onePlayList) => {
    return(
        <OneSelectItemWrapper>
          <input
              type="checkbox"
              id={onePlayList.id}
              value={onePlayList.title}
              onChange={selectPlayList}
          />
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

  return (
      <AutoFrame display={show}>
        <XButton onClick={onCloseToggle}>&times;</XButton>
        <span>플레이리스트에 담기</span>
        <hr/>
        <ToggleScrollWrapper>
          {PlayList}
        </ToggleScrollWrapper>
        <div style={{alignSelf: "center"}}>
          {addNewPly
              ?
              <NewPlaylistModal show={addNewPly} setAddNewPly={setAddNewPly}/>
              :
              <AddNewPlyBtn onClick={() => setAddNewPly(prev => !prev)}>
                새 플레이리스트 만들기
              </AddNewPlyBtn>
          }
        </div>
      </AutoFrame>
  )
}

export default AddVideoToPlaylistModal;

const AddNewPlyBtn = styled(StyledBtn)`
  box-sizing: border-box;
  width: 170px;
  height: 33px;
  background-color: black;
  border: 2px dashed white;
  border-radius: 29px;
  color: white;
  align-self: center;
`

export const XButton = styled(StyledBtn)`
  color: #E35D12;
  display: block;
  align-self: end;
  margin-right: 10px;
  font-size: x-large;
`
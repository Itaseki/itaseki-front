import React, {useState} from "react";
import useInput from "../Hooks/useInput";
import { AutoFrame, OneSelectItemWrapper, ToggleScrollWrapper} from "../Style/Video";
import axios from "axios";
import preURL from "../preURL/preURL";
import styled from "styled-components";
import StyledBtn from "../Style/StyledBtn";

const PlaylistToggle = ({show, setShow, playListList, playList, setPlayList, selectedPlayListId, setSelectedPlayListId}) => {

  // 새로운 플레이리스트
  const [addNewPly, setAddNewPly] = useState(false);
  const [newPlyName, onChangeNewPlyName, setNewPlyName] = useInput("");
  const [newPlyPublic, setNewPlyPublic] = useState(false);

  // 플레이리스트에 추가
  const selectPlayList = (prop) => {
    const selected = {id: prop.target.id, name: prop.target.value};
    const boolChecked = prop.target.checked;
    console.log(selected, boolChecked);

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
  }

  // 플레이리스트 공개/비공개
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

  // 새 플레이리스트 생성
  const onClickMakePly = () => {
    axios
        .post(preURL.preURL + '/boards/playlist', {
          title: newPlyName,
          isPublic: newPlyPublic
        })
        .then((res) => {
          console.log("👍새 플레이리스트 생성 성공", res.data);
          setNewPlyName("");
          setNewPlyPublic(false);
          setAddNewPly(false);
        })
        .catch((err) => {
          console.log("🧨새 플레이리스트 생성 실패", err);
        })
  };

  const onCloseToggle = (e) => {
    e.preventDefault();
    setShow(prev => !prev)
    setAddNewPly(false);
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
              <>
                <NewPlyInput type="text" placeholder="플레이리스트 이름" value={newPlyName} onChange={onChangeNewPlyName}/>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "10px 0"}}>
                  {newPlyPublic
                      ?
                      <SwitchBtnLabel style={{margin: 0}}>
                        <span className="active" onClick={() => setNewPlyPublic(prev => !prev)}>공개</span>
                      </SwitchBtnLabel>
                      :
                      <SwitchBtnLabel style={{margin: 0}}>
                        <span onClick={() => setNewPlyPublic(prev => !prev)}>비공개</span>
                      </SwitchBtnLabel>
                  }
                  <MakeNewPlyBtn onClick={onClickMakePly}>만들기</MakeNewPlyBtn>
                </div>
              </>
              :
              <AddNewPlyBtn onClick={() => setAddNewPly(prev => !prev)}>
                새 플레이리스트 만들기
              </AddNewPlyBtn>
          }
        </div>
      </AutoFrame>
  )
}

export default PlaylistToggle;

const AddNewPlyBtn = styled(StyledBtn)`
  box-sizing: border-box;
  width: 170px;
  height: 33px;
  background-color: black;
  border: 2px dashed #FFFFFF;
  border-radius: 29px;
  color: white;
  align-self: center;
`

const MakeNewPlyBtn = styled(StyledBtn)`
  box-sizing: border-box;
  width: 70px;
  height: 30px;
  background: black;
  border: 2px dashed white;
  border-radius: 29px;
  color: white;
`

const NewPlyInput = styled.input`
  box-sizing: border-box;
  width: 170px;
  height: 33px;
  background: white;
  border: 2px dashed #000000;
  border-radius: 29px;
  display: block;
  align-self: center;
  padding: 0 4px;
`

// 플레이리스트 공개/비공개 토글 버튼
const SwitchBtnLabel = styled.label`
  width: 60px;
  height: 25px;
  display: inline-block;
  position: relative;
  border-radius: 71px;
  background-color: black;
  cursor: pointer;
  transition: all 0.2s ease-in;
  & > span{
    width: 45px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 71px;
    background-color: #E35D12;
    font-size: small;
    font-weight: bold;
    text-align: center;
    transition: all 0.2s ease-in;
  }
  :active{  // 동작X
    background-color: #E35D12;
  }
  & > span.active{
    background-color: black;
    color: #E35D12;
    left: calc(100% - 50px);
  }
`

const XButton = styled(StyledBtn)`
  color: #E35D12;
  display: block;
  align-self: end;
  margin-right: 10px;
  font-size: x-large;
`
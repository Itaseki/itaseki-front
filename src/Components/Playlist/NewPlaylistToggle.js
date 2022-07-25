import React, {useState} from "react";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
import axios from "axios";
import preURL from "../../preURL/preURL";
import StyledBtn from "../../Style/StyledBtn";

const NewPlaylistToggle = ({show, setAddNewPly}) => {
    // 새로운 플레이리스트 생성
    const [newPlyName, onChangeNewPlyName, setNewPlyName] = useInput("");
    const [newPlyPublic, setNewPlyPublic] = useState(false);


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
                setAddNewPly && setAddNewPly(false);
                alert(`${newPlyName}을 생성하였습니다.`);
            })
            .catch((err) => {
                console.log("🧨새 플레이리스트 생성 실패", err);
            })
    };


    if(!show) return

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default NewPlaylistToggle;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  box-sizing: border-box;
  border: 3px dashed black;
  border-radius: 29px;
  margin-right: 140px;
  padding: 20px;
  background-color: white;
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
 export const SwitchBtnLabel = styled.label`
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

const MakeNewPlyBtn = styled(StyledBtn)`
  box-sizing: border-box;
  width: 70px;
  height: 30px;
  background: black;
  border: 2px dashed white;
  border-radius: 29px;
  color: white;
`
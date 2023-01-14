import styled from 'styled-components';
import StyledBtn from "./StyledBtn";
import {light} from "./Color"

//================================AddNewVideo====================================
export const PreInform = styled.div`
  width: 65%;
  margin: 2% auto;
  border: 4px dashed #000000;
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  & > b {
    text-align: center;
    margin-top: 2%;
  }
`

export const PreInformContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 10%;
  & > #agree {
    align-self: self-end;
    & > input {
      transform: scale(1.5);
    }
  }
`

export const AddVideoForm = styled.form`
  width: 65%;
  margin: 0 auto 10% auto;
  display: flex;
  flex-direction: column;
`

export const NewUrlForm = styled.div`
  width: 100%;
  & > input {
    background: rgba(255, 255, 255, 0.65);
    border: 3px dashed #000000;
    border-radius: 29px;
    padding: 5px 5px 5px 10px;
    box-sizing: border-box;
    width: 93%;
    height: 50px;
  }
  & > #verify-btn {
    width: 60px;
    height: 35px;
    border-radius: 17px;
    padding: 3px;
    margin-left: 5px;
    text-align: center;
    background: black;
    color: ${light.colors.mainColor};
  }
`

export const OneRowWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0;
`

export const Series = styled.div`
  width: 40%;
  & > input {
    width: 90%;
    height: 25px;
    background: rgba(255, 255, 255, 0.65);
    border: 3px dashed black;
    border-radius: 29px;
    padding: 5px 5px 5px 10px;
  }
`

export const AutoFrame = styled.div`
  display: ${props => props.display? "flex" : "none"};
  flex-direction: column;
  //align-items: flex-start;
  box-sizing: border-box;
  width: 220px;
  height: 280px;
  background: white;
  border: 5px dashed black;
  border-radius: 29px;
  padding: 5px;
  position: absolute;
  z-index: 2;
  :hover{
    display: flex
  }
  & > span{
    align-self: center;
    font-weight: bold;
    margin-top: 5px;
  }
  & > hr{
    width: 150px;
    border-top: 3px dashed;
  }
`

export const OneSelectItemWrapper = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > label{
    width: 100px;
  }
`

export const ToggleScrollWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  margin: 5px 0 10px 0;
`

export const OneSeries = styled(StyledBtn)`
  background-color: transparent;
  margin: 5px;
  display: block;
  text-align: left;
`

export const Introduce = styled.div`
  width: 100%;
  & > input {
    width: 97%;
    height: 25px;
    background: white;
    border: 3px dashed black;
    border-radius: 29px;
    padding: 5px 5px 5px 10px;
  }
`

export const Round = styled.div`
  width: 28%;
  & > input {
    width: 90%;
    height: 25px;
    background: white;
    border: 4px dashed black;
    border-radius: 29px;
    padding: 5px 5px 5px 10px;
  }
`

export const HashTag = styled.div`
  width: 36%;
  margin-left: 8px;
  & > input {
    width: 95%;
    height: 25px;
    background: rgba(255, 255, 255, 0.65);
    border: 3px dashed black;
    border-radius: 29px;
    padding: 5px 5px 5px 10px;
    margin-bottom: 2px;
  }
`

export const AddToPlayList = styled.div`
  width: 28%;
  & > input {
    width: 90%;
    height: 25px;
    background: white;
    border: 4px dashed black;
    border-radius: 29px;
    padding: 5px 5px 5px 10px;
  }
`

export const AddVideoBtn = styled(StyledBtn)`
  margin-left: auto;
  align-self: flex-end;
  & > img{
    width: 400px;
  }
`

//================================AllVideo====================================
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  width: 70%;
`

export const VideoListWrapper = styled.div`
  width: 100%;
`

export const BestTitleLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const VideoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2% 0;
`

export const Line = styled.div`
  width: 100%;
  border-bottom: 3px dashed black;
`

/*정렬 버튼*/
export const SortBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & p{
    margin-right: 4px;
    font-size: 11px;
  }
`


//================================VideoDetail====================================
export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;
`

export const TitleUploader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0;
  & > #title{
    font-weight: 600;
    font-size: 18px;
    :hover{
      cursor: default;
    }
  }
  & > #uploader{
    font-size: 12px;
    //color: #505050;
  }
`

export const IFrame = styled.div`
  width: 720px;
  height: 405px;
  background-color: gray;
`

export const VideoDetailInfo = styled.div`
  width: 45%;
  margin: 2% 0;
  & #head{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
  }
  & #line1{
    border-left: thick dashed black;
    height: 140px;
  }
  & #line2{
    border: solid black;
    border-width: medium 0 0 0;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`

export const AInfo = styled.div`
  display: flex;
  & > #key{
    width: 75px;
    margin-right: 100px;
    font-size: 18px;
    font-weight: 600;
    color: ${light.colors.mainColor};
  }
  & > #value{
    margin-right: 100px;
  }
  & > #tag{
    background: black;
    border-radius: 29px;
    padding: 7px 20px;
    margin-right: 10px;
    color: white;
  }
`
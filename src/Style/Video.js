import styled from 'styled-components';
import StyledBtn from "./StyledBtn";
import styledBtn from "./StyledBtn";

//================================AddNewVideo====================================
export const PreInform = styled.div`
  width: 65%;
  margin: 2% auto;
  background-color: #E0BFE6;
  display: flex;
  flex-direction: column;
  & > b {
    text-align: center;
    margin-top: 2%;
  }
`

export const PreInformContent = styled.div`
  display: flex;
  justify-content: space-between;
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
  & > input {
    background: var(--tag-select);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
    width: 90%;
  }
  & > #verify-btn {
    width: 79px;
    background: var(--sub-color);
    border-radius: 17px;
    padding: 3px;
    margin-left: 3px;
    text-align: center;
    color: white;
  }
`

export const Series = styled.div`
  width: 40%;
  & > input {
    width: 60%;
    background: var(--tag-select);
    border: 0;
    border-radius: 17px;
    padding: 5px 5px 5px 10px;
  }
`

export const AutoFrame = styled.div`
  display: ${props => props.display? "flex" : "none"};
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  width: 170px;
  height: 182px;
  background: var(--main-color);
  border-radius: 12px;
  padding: 5px;
  overflow-y: scroll;
  position: absolute;
  z-index: 2;
  :hover{
    display: flex
  }
`

export const OneSeries = styled(StyledBtn)`
  background-color: transparent;
  margin: 2px;
  color: white;
  text-align: left;
`

export const Introduce = styled.div`
  width: 100%;
  & > input {
    width: 100%;
    background: var(--sub-color);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const Round = styled.div`
  width: 30%;
  & > input {
    width: 60%;
    background: var(--sub-color);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const HashTag = styled.div`
  width: 30%;
  margin-right: 5%;
  & > input {
    width: 90%;
    background: var(--tag-select);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
    margin-bottom: 2px;
  }
`

export const AddToPlayList = styled.div`
  width: 30%;
  & > input {
    width: 60%;
    background: var(--sub-color);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const AddVideoBtn = styled(StyledBtn)`
  font-size: 20px;
  margin-left: auto;
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

export const VideoList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 0;
`

export const OneVideoWrapper = styled.div`
  width: 25%;
`

// 영상 썸네일
export const VideoContainer = styled.div`
  width: 224px;
  height: 126px;
  background: var(--sub-color);
  cursor: pointer;
`

// 영상 썸네일 하단 정보
export const VideoInfo = styled.div`
  width: 224px;
  display: flex;
  justify-content: space-between;
  & > #title {
    cursor: pointer;
  }
  & > #info-right {
    display: flex;
    align-items: center;
  }
`

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #9C9C9C;
`

/*정렬 버튼*/
export const SortBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & p{
    margin-right: 4px;
    color: #9E8FA8;
    font-size: 11px;
  }
`

/*페이지네이션*/
export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
`

export const PageNum = styled(styledBtn)`
  font-size: 20px;
  padding: 10.5px;
`

//================================VideoDetail====================================
export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;
`

export const TitleUploader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  & > #title{
    font-weight: 600;
    font-size: 20px;
    :hover{
      cursor: default;
    }
  }
  & > #uploader{
    font-size: 16px;
  }
`

export const IFrame = styled.div`
  width: 672px;
  height: 392px;
  background-color: var(--sub-color);
`

export const VideoInfo = styled.div`
  width: 45%;
  margin: 2% 0;
  & #head{
    //font-family: 'Work Sans';
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
    color: var(--main-color);
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
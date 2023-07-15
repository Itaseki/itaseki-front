import styled from "styled-components";
import StyledBtn from "./StyledBtn";
import { light } from "./Color";

//================================AddNewVideo====================================
export const PreInform = styled.div`
  width: 65%;
  margin: 6.25rem auto 0;
  border: 0.25rem dashed #000000;
  border-radius: 1.875rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  & > b {
    text-align: center;
    margin-top: 2%;
  }
`;

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
`;

export const AddVideoForm = styled.form`
  width: 65%;
  margin: 0 auto 10% auto;
  display: flex;
  flex-direction: column;
`;

export const NewUrlForm = styled.div`
  width: 100%;
  & > input {
    background: rgba(255, 255, 255, 0.65);
    border: 0.1875rem dashed #000000;
    border-radius: 1.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
    box-sizing: border-box;
    width: 93%;
    height: 3.125rem;
  }
  & > #verify-btn {
    width: 3.75rem;
    height: 2.1875rem;
    border-radius: 0.8125rem;
    padding: 0.1875rem;
    margin-left: 0.3125rem;
    text-align: center;
    background: black;
    color: ${light.colors.mainColor};
  }
`;

export const OneRowWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0.3125rem 0;
`;

export const Series = styled.div`
  width: 40%;
  & > input {
    width: 90%;
    height: 1.5625rem;
    background: rgba(255, 255, 255, 0.65);
    border: 0.1875rem dashed black;
    border-radius: 1.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
  }
`;

export const AutoFrame = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  //align-items: flex-start;
  box-sizing: border-box;
  width: 13.75rem;
  height: 17.5rem;
  background: white;
  border: 0.3125rem dashed black;
  border-radius: 1.8125rem;
  padding: 0.3125rem;
  position: absolute;
  z-index: 2;
  :hover {
    display: flex;
  }
  & > span {
    align-self: center;
    font-weight: bold;
    margin-top: 0.3125rem;
  }
  & > hr {
    width: 9.375rem;
    border-top: 0.1875rem dashed;
  }
`;

export const OneSelectItemWrapper = styled.div`
  margin: 0.3125rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > label {
    width: 6.25rem;
  }
`;

export const ToggleScrollWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  margin: 0.3125rem 0 0.625rem 0;
`;

export const OneSeries = styled(StyledBtn)`
  background-color: transparent;
  margin: 0.3125rem;
  display: block;
  text-align: left;
`;

export const Introduce = styled.div`
  width: 100%;
  & > input {
    width: 97%;
    height: 1.5625rem;
    background: white;
    border: 0.1875rem dashed black;
    border-radius: 1.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
  }
`;

export const Round = styled.div`
  width: 28%;
  & > input {
    width: 90%;
    height: 1.5625rem;
    background: white;
    border: 0.25rem dashed black;
    border-radius: 1.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
  }
`;

export const HashTag = styled.div`
  width: 36%;
  margin-left: 0.5rem;
  & > input {
    width: 95%;
    height: 1.5625rem;
    background: rgba(255, 255, 255, 0.65);
    border: 0.1875rem dashed black;
    border-radius: 1.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
    margin-bottom: 0.125rem;
  }
`;

export const AddToPlayList = styled.div`
  width: 28%;
  & > input {
    width: 90%;
    height: 1.5625rem;
    background: white;
    border: 0.25rem dashed black;
    border-radius: 1.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
  }
`;

export const AddVideoBtn = styled(StyledBtn)`
  margin-left: auto;
  align-self: flex-end;
  & > img {
    width: 25rem;
  }
`;

//================================AllVideo(AllPly)====================================
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto;
  width: 95%;
`;

export const TopWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 11.5rem;
`;

export const VideoListWrapper = styled.div`
  width: 100%;
`;

export const MainLogo = styled.img`
  width: 25rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const NewPost = styled(StyledBtn)`
  box-sizing: border-box;

  position: absolute;
  right: 2%;
  bottom: 20%;
  width: 14.375rem;
  height: 3.125rem;

  background: ${(props) => (props.board === "video" ? "#D7E0E4" : "#E8CDCD")};
  border: 0.125rem solid #000000;
  box-shadow: 0.3125rem -0.3125rem 0px #000000;

  font-family: "EF_Diary";
  font-size: 1.125rem;
  line-height: 1.4375rem;
  letter-spacing: -0.02em;

  :active,
  :hover {
    background: ${(props) => (props.board === "video" ? "#82AFC8" : "#E4AFAF")};
  }
`;

export const MainBox = styled.div`
  width: 90%;
  padding: 3%;

  background: #f4f3ee;
  border: 0.125rem solid #000000;
  box-shadow: 0.9375rem -0.9375rem 0px #000000;
`;

export const HOT = styled.span`
  font-family: "EF_Diary";
  font-size: 2.4375rem;
  line-height: 2.875rem;
  letter-spacing: -0.02em;
  -webkit-text-stroke: 0.1875rem #000000;
`;

export const VideoList = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  margin: 0.625rem 0;
  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 0.1875rem dashed black;
`;

/*정렬 버튼*/
export const SortBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > #sort-btn {
    font-family: "EF_Diary";
    font-size: 0.625rem;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.5);
  }
  & p {
    margin: 0 0.625rem;
    font-size: 0.6875rem;
  }
`;

//================================VideoDetail(PlyDetail)====================================
export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.25rem 0;
`;

export const TitleUploader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.125rem 0;

  & > #title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;

    :hover {
      cursor: default;
    }
  }
  & > #uploader {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    letter-spacing: -0.02em;
    color: #505050;
  }
`;

export const IFrame = styled.div`
  width: 45rem;
  height: 25.3125rem;
  background-color: gray;
`;

export const VideoDetailInfo = styled.div`
  width: 45rem;
  margin: 2% 0;

  font-family: "EF_Diary";
  letter-spacing: -0.02em;

  & #head {
    font-size: 2rem;
    line-height: 2.375rem;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 8.75rem;

  & > #left-line {
    border-left: 0.375rem dashed black;
    height: 100%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 0.625rem;

  & > #line {
    border: solid black;
    border-width: medium 0 0 0;
  }
`;

export const AInfo = styled.div`
  display: flex;
  & > #key {
    width: 4.6875rem;
    margin-right: 6.25rem;
    font-size: 1.125rem;
    color: ${light.colors.mainColor};
  }
  & > #value {
    margin-right: 6.25rem;
  }
  & > #tag {
    background: black;
    border-radius: 1.8125rem;
    padding: 0.4375rem 1.25rem;
    margin-right: 0.3125rem;
    color: white;
  }
`;

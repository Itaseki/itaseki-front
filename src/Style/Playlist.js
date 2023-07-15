import styled from "styled-components";

export const TopBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TopBtns = styled.div`
  margin-right: 9.375rem;
  & img {
    margin: 0 0.3125rem;
    width: 12.5rem;
  }
`;

////////////////////// SubscribedPly ////////////////////////
export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 1.875rem;
`;

export const OneAccountWrapper = styled.div`
  margin: 2% 0;
`;

export const AccountName = styled.div`
  height: 1.5625rem;
  display: inline-block;
  background: black;
  border: 0.1875rem dashed white;
  border-radius: 1.8125rem;
  padding: 0.3125rem 0.625rem;
  margin-bottom: 0.625rem;
  color: white;
  text-align: center;
  line-height: 1.5625rem;
  font-size: small;
  font-weight: bold;
`;

/////////////////////////// Playlistdetail //////////////////////////
export const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.25rem 0;
  width: 60%;
  & > #line {
    border-left: 0.25rem dashed black;
  }
`;

export const VideosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OneVideoInPly = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  cursor: pointer;
`;

export const VideoNum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 0.625rem;

  font-family: "EF_Diary";
  font-size: 1.4375rem;
  line-height: 1.6875rem;
  text-align: center;
  letter-spacing: -0.02em;
  font-weight: bold;
`;

// 영상 썸네일
export const VideoContainer = styled.div`
  width: 20rem;
  height: 11.25rem;
  background: gray;
  cursor: pointer;
  & > img {
    width: 20rem;
    height: 11.25rem;
    object-fit: cover;
  }
`;

export const PlyVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2%;

  & #title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;

    margin: 0 2% 2% 0;
  }

  & > span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;
    letter-spacing: -0.02em;

    margin: 0.1875rem 0;
  }
`;

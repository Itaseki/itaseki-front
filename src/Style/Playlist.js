import styled from "styled-components";

export const TopBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const TopBtns = styled.div`
  margin-right: 150px;
  & img {
    margin: 0 5px;
    width: 200px;
  }
`

////////////////////// SubscribedPly ////////////////////////
export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`

export const OneAccountWrapper = styled.div`
  margin: 2% 0;
`

export const AccountName = styled.div`
  height: 25px;
  display: inline-block;
  background: black;
  border: 3px dashed white;
  border-radius: 29px;
  padding: 5px 10px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  line-height: 25px;
  font-size: small;
  font-weight: bold;
`

/////////////////////////// Playlistdetail //////////////////////////
export const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  width: 60%;
  & > #line {
    border-left: 4px dashed black;
  }
`

export const VideosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const OneVideoInPly = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  cursor: pointer;
`

export const VideoNum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin-right: 2%;
  
  font-family: 'EF_Diary';
  font-size: 23px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.02em;
  font-weight: bold;
`

// 영상 썸네일
export const VideoContainer = styled.div`
  width: 320px;
  height: 180px;
  background: gray;
  cursor: pointer;
  & > img{
    width: 320px;
    height: 180px;
    object-fit: cover;
  }
`

export const PlyVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2%;
  
  & #title{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;

    margin: 0 2% 2% 0;
  }

  & > span{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    
    margin: 3px 0;
  }
`

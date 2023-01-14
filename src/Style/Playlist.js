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
  padding: 20px;
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
  margin: 10px;
  cursor: pointer;
`

export const VideoNum = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px 0 5px;
  align-items: center;
  font-weight: bold;
`

// 영상 썸네일
export const VideoContainer = styled.div`
  width: 336px;
  height: 189px;
  background: gray;
  cursor: pointer;
  & > img{
    width: 336px;
    height: 189px;
  }
`

export const PlyVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  & > span{
    font-size: small;
  }
  & #title{
    font-size: large;
    font-weight: bold;
    margin-right: 5px;
  }
`

import styled from 'styled-components';
import styledBtn from "./StyledBtn";

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
  width: 222px;
  height: 135px;
  background: #C4C4C4;
`

// 영상 썸네일 하단 정보
export const VideoInfo = styled.div`
  width: 222px;
`

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #9C9C9C;
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
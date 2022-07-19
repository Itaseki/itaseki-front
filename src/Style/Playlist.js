import styled from "styled-components";

export const TopBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 150px;
  & > img {
    margin: 0 5px;
  }
`

export const FourListWrapper = styled.div`
  width: 100%;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

export const FourList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 0;
`

export const OnePlyWrapper = styled.div`
  width: 25%;
`

export const PlyContainer = styled.div`
  background-color: gray;
  width: 240px;
  height: 135px;
  & > img {
    width: 240px;
    height: 135px;
  }
`

// 플레이리스트 하단 정보
export const PlyInfo = styled.div`
  width: 240px;
  margin: 3px 0;
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
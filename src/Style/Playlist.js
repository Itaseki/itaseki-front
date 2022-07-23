import styled from "styled-components";

export const TopBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 150px;
  & > img {
    margin: 0 5px;
  }
`

export const MainLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const FourListWrapper = styled.div`
  width: 100%;
`

export const FourList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 0;
`

////////////////////// SubscribedPly ////////////////////////
export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
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

export const OneAccountPlysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
`

export const FourPlysWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
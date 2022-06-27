import styled from 'styled-components';

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

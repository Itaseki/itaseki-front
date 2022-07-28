import React from "react";
import styled from "styled-components";

const ChatPresenter = ({contents, writer, writerImg}) => {

  return (
      <div>
        {contents.map((content) => {
          return (
              writer === content.writer
                  ? ( // 나
                      <MyWrapper>
                        <ProfileImg src={writerImg}/>
                        <Content isMine={true}>{content.message}</Content>
                      </MyWrapper>
                  ) : ( // 다른 사람
                      <OtherWrapper>
                        <ProfileImg src={content.profileUrl}/>
                        <Content isMine={false}>{content.message}</Content>
                      </OtherWrapper>
                  )
          )
        })}
      </div>

  )
}

export default ChatPresenter;

const MyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 2px;
`

const OtherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
`

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 3px;
  border-radius: 50%;
  background-color: gray;
`

const Content = styled.span`
  margin: 3px;
  background-color: ${props => props.isMine ? "#F9DCA7" : "#E8E8E8"};
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
`
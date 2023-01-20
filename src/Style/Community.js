import styled from "styled-components";
import StyledBtn from "./StyledBtn";
import {light} from "./Color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

/*Best 잡담 게시글 목록*/
export const BestPostsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 27px;
`

export const BestRankNum = styled.p`
  margin: 0;
  color: ${light.colors.mainColor};
  font-size: 13px;
  padding: 5px 10px;
`

/*잡담 게시글 목록*/
export const PostsWrapper = styled.div`
  display: flex;
  padding-top: 25px;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;
`

export const Title = styled.div`
  padding: 5px 10px;
  margin: 0;
  border: none;
  font-size: 13px;
  color: black;
  & > #comment-cnt {
    font-weight: bold;
    color: ${light.colors.mainColor};
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  & p{
    font-size: 12px;
    text-align: center;
    margin: 0 5px;
  }
`

export const Line = styled.div`
  border-bottom: 2px solid black;
`

/*게시글 리스트*/
export const PostLists = styled.div`
  display: flex;
  flex-direction: column;
`

/*정렬 버튼*/
export const SortBox = styled.div`
  width: 805px;
  display: flex;
  justify-content: flex-end;
  & p{
    margin-right: 4px;
    //color: #9E8FA8;
    font-size: 11px;
  }
`


////////////////////////////////////////////////////////
// 새 게시물 작성 모달

export const InputTitle = styled.input`
  width: 792px;
  height: 60px;
  margin: 10px auto;
  padding: 0 10px;
  background: rgba(255, 255, 255, 0.65);
  border: 4px solid;
  border-radius: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`

export const ImgInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: 60px;
  padding: 0 20px;
  & > label {
    width: 146px;
    height: 90%;
    background: rgba(255, 255, 255, 0.65);
    border: 3px dashed;
    border-radius: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & > input {
    margin: 0 10px;
  }
`

export const TextArea = styled.textarea`
  width: 792px;
  height: 270px;
  margin: 10px 0;
  padding: 10px;
  border: 4px dashed;
  border-radius: 29px;
  resize: none;
  ::placeholder {
    font-weight: 600;
    font-size: 20px;
    line-height: 19px;
    align-items: center;
    text-align: center;
  }
`

export const SubmitBtn = styled.input`
  width: 750px;
  height: 70px;
  margin: 10px 0;
  cursor: pointer;
`

///////////////////////////////////////////////////////////////
// CommunityDetail

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 15px;
  width: 800px;
`

export const DetailTitle = styled.div`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  display: flex;
  letter-spacing: -0.02em;
  justify-content: space-between;
  & > #del{
    padding: 2%;
    //color: #505050;
  }
`

export const DetailInfo = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  & p{
    font-size: 16px;
    margin: 4px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 15px 0;
`

export const ContentImg = styled.img`
  max-width: 600px;
`

export const CommentsWrapper = styled(Wrapper)`

`

export const CommentsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentHeader = styled.div`
  font-weight: bold;
  font-size: x-large;
  & > #count {
    color: ${light.colors.mainColor};
  }
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  & > #comment-content {
    margin: 10px 4px;
  }
`

export const CommentReplyImg = styled.img`
  width: 15px;
  height: 19px;
  padding: 10px;
  vertical-align: middle;
`

export const ReplyBtn = styled(StyledBtn)`
  width: 47px;
  height: 19px;
  margin: 6px 4px;
  background: black;
  border-radius: 29px;
  color: white;
`

export const NewCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;
  & #nickname {
    color: ${light.colors.mainColor};
    font-weight: bold;
  }
`

export const NewCommentBox = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
`

export const NewCommentInput = styled.textarea`
  padding: 10px 70px 10px 10px;
  width: 720px;
  height: 80px;
  border-radius: 17px;
  border: 2px solid;
  resize: none;
  font-size: large;
  font-weight: bold;
  ::placeholder{
    font-size: xx-large;
  }
`

export const ExitReplybtn = styled.img`
  width: 35px;
  margin: 10px;
  position: absolute;
  align-self: center;
  right: 0;
  top: 0;
  cursor: pointer;
`

export const EnterBtn = styled.input`
  width: 45px;
  margin: 10px;
  position: absolute;
  align-self: center;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

export const AdditionalBtns = styled.div`
  display: flex;
  margin: 20px;
`

export const AButton = styled(StyledBtn)`
  width: 120px;
  height: 45px;
  background: white;
  border: 3px dashed black;
  border-radius: 29px;
  margin: 0 60px;
  font-weight: bold;
`
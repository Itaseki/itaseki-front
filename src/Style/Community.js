import styled from "styled-components";
import styledBtn from "./StyledBtn";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

/*Best 잡담 게시글 목록*/
export const BestPostsWrapper = styled.div`
  display: flex;
  height: 150px;
  padding-top: 44px;
  padding-bottom: 27px;
`

export const BestRankNum = styled.p`
  margin: 0;
  color: #532A6B;
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
  border-bottom: 1px solid #9C9C9C;
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
    color: #9E8FA8;
    font-size: 11px;
  }
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

////////////////////////////////////////////////////////
// 새 게시물 작성 모달

export const Input = styled.input`
  width: 792px;
  height: 58px;
  margin: 10px 0;
  background: #FFFFFF;
  border-radius: 14px;
  font-size: 16px;
  ::placeholder {
    font-weight: 600;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #532A6B;
  }
`

export const ImgInput = styled.input`
  text-align: initial;
`

export const TextArea = styled.textarea`
  width: 792px;
  height: 270px;
  margin: 10px 0;
  background: #FFFFFF;
  border-radius: 14px;
  resize: none;
  ::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #532A6B;
  }
`

export const SubmitBtn = styled(styledBtn)`
  width: 792px;
  height: 58px;
  margin: 10px 0;
  background: #6B5F73;
  border-radius: 14px;
  color: white;
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
  font-size: 40px;
  display: flex;
  letter-spacing: -0.02em;
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

export const CommentsWrapper = styled(Wrapper)`

`

export const CommentsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  & > #comment-content {
    margin: 10px 4px;
  }
  & > #comment-btn {
    width: 47px;
    height: 19px;
    margin: 6px 4px;
    background: #C4C4C4;
    border-radius: 29px;
    color: white;
  }
`

export const NewCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;
`

export const NewCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  & > textarea {
    padding: 10px;
    width: 807px;
    height: 101px;
    background: #ECECEC;
    border-radius: 17px;
    resize: none;
  }
  & > #submit-btn {
    width: 56px;
    height: 29px;
    margin: 5px;
    background: #9E8FA8;
    border-radius: 29px;
    color: white;
    align-self: flex-end;
  }
`

export const AdditionalBtns = styled.div`
  display: flex;
  margin: 20px;
`

export const AButton = styled(styledBtn)`
  width: 146px;
  height: 58px;
  color: white;
  border-radius: 29px;
  margin: 0 30px;
`
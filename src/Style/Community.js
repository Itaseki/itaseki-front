import styled from "styled-components";
import StyledBtn from "./StyledBtn";
import { light } from "./Color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto;
  width: 95%;
`;

/*Best 잡담 게시글 목록*/
export const BestPostsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.69rem;
`;

export const BestRankNum = styled.p`
  margin: 0;
  color: ${light.colors.mainColor};
  font-size: 0.81rem;
  padding: 0.31rem 0.63rem;
`;

/*잡담 게시글 목록*/
export const PostsWrapper = styled.div`
  display: flex;
  padding-top: 1.56rem;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.88rem;
  align-items: center;
`;

export const Title = styled.div`
  padding: 0.31rem 0.63rem;
  margin: 0;
  border: none;
  font-size: 0.81rem;
  color: black;
  & > #comment-cnt {
    font-weight: bold;
    color: ${light.colors.mainColor};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  & p {
    font-size: 0.75rem;
    text-align: center;
    margin: 0 0.31rem;
  }
`;

export const Line = styled.div`
  border-bottom: 0.13rem solid black;
`;

/*게시글 리스트*/
export const PostLists = styled.div`
  display: flex;
  flex-direction: column;
`;

/*정렬 버튼*/
export const SortBox = styled.div`
  width: 50.31rem;
  display: flex;
  justify-content: flex-end;
  & p {
    margin-right: 0.25rem;
    font-size: 0.6875rem;
  }
`;

////////////////////////////////////////////////////////
// 새 게시물 작성 모달

export const InputTitle = styled.input`
  width: 49.5rem;
  height: 3.75rem;
  margin: 0.625rem auto;
  padding: 0 0.625rem;
  background: rgba(255, 255, 255, 0.65);
  border: 0.25rem solid;
  border-radius: 1.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5625rem;
  font-weight: bold;
`;

export const ImgInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: 3.75rem;
  padding: 0 1.25rem;
  & > label {
    width: 9.125rem;
    height: 90%;
    background: rgba(255, 255, 255, 0.65);
    border: 0.1875rem dashed;
    border-radius: 1.8125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & > input {
    margin: 0 0.625rem;
  }
`;

export const TextArea = styled.textarea`
  width: 49.5rem;
  height: 13.125rem;
  margin: 0.625rem 0;
  padding: 0.625rem;
  border: 0.25rem dashed;
  border-radius: 1.8125rem;
  resize: none;
  ::placeholder {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.1875rem;
    align-items: center;
    text-align: center;
  }
`;

export const SubmitBtn = styled.input`
  width: 46.875rem;
  height: 8.75rem;
  margin: 0.625rem 0;
  cursor: pointer;
`;

///////////////////////////////////////////////////////////////
// CommunityDetail

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 0.9375rem;
  width: 34.375rem;
`;

export const DetailTitle = styled.div`
  margin: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
  letter-spacing: -0.02em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > #del {
    padding: 2%;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem;

  & p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    margin: 0.25rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: 0.9375rem 0;
`;

export const ContentImg = styled.img`
  max-width: 37.5rem;
`;

export const CommentsWrapper = styled(Wrapper)`
  font-family: "Pretendard";
  font-style: normal;
  letter-spacing: -0.02em;
`;

export const CommentsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentHeader = styled.div`
  margin: 0.625rem 0;

  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.1875rem;
  & > #count {
    color: ${light.colors.mainColor};
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Pretendard";
  font-style: normal;
  letter-spacing: -0.02em;

  & > #comment-content {
    margin: 0.625rem 0.25rem;
  }
`;

export const CommentReplyImg = styled.img`
  width: 0.9375rem;
  height: 1.1875rem;
  padding: 0.625rem;
  vertical-align: middle;
`;

export const ReplyBtn = styled(StyledBtn)`
  width: 3.125rem;
  height: 1.1875rem;
  margin: 0.375rem 0.25rem;
  background: black;
  border-radius: 1.8125rem;
  color: white;

  :hover {
    background-color: gray;
  }
`;

export const NewCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.375rem 0;
  & #nickname {
    color: ${light.colors.mainColor};
    font-weight: bold;
  }
`;

export const NewCommentBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NewCommentInput = styled.textarea`
  padding: 0.625rem;
  width: 48.75rem;
  height: 6.25rem;
  border-radius: 1.0625rem;
  border: 0.125rem solid;
  resize: none;
  font-size: large;
  font-weight: bold;
  ::placeholder {
    font-size: xx-large;
  }
`;

export const EnterBtn = styled.button`
  box-sizing: border-box;

  width: 3.9375rem;
  height: 2.125rem;

  margin-top: 0.625rem;
  border: 0.125rem solid #000000;
  box-shadow: 0.9375rem 0.9375rem 0px #000000;
  border-radius: 0.75rem;

  background: #f0cbcd;
  cursor: pointer;

  :hover {
    background-color: #e4afaf;
  }
`;

export const AdditionalBtns = styled.div`
  display: flex;
  margin: 1.25rem 0;
`;

export const AButton = styled(StyledBtn)`
  width: 7.5rem;
  height: 2.8125rem;

  margin: 0 3.75rem;
  //border: 1px solid black;
  border-radius: 1.8125rem;
  background: white;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 0.125rem,
    rgba(6, 24, 44, 0.65) 0px 0.25rem 0.375rem -0.0625rem,
    rgba(255, 255, 255, 0.08) 0px 0.0625rem 0px inset;

  font-family: "EF_Diary";
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: -0.02em;

  :hover {
    background-color: ${light.colors.lightOrange};
  }
  :active {
    box-shadow: rgb(204, 219, 232) 0.1875rem 0.1875rem 0.375rem 0px inset,
      rgba(255, 255, 255, 0.5) -0.1875rem -0.1875rem 0.375rem 0.0625rem inset;
  }
`;

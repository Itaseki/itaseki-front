import styled from "styled-components";

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

export const Title = styled.button`
  background-color: white;
  padding: 5px 10px;
  margin: 0;
  border: none;
  font-size: 13px;
  cursor: pointer;
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

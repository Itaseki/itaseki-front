import React, {useCallback, useEffect, useState} from 'react';
import preURL from "../../preURL/preURL";
import axios from "axios";
import {
  BestPostsWrapper,
  BestRankNum, Contents, ImgInput, Info, Input,
  Line, PageNum, Pages, Pagination,
  PostLists,
  PostsWrapper,
  SortBox, SubmitBtn, TextArea,
  Title,
  Wrapper
} from "../../Style/Community";
import Header from "../../Components/Header";
import BestCommu from "../../Assets/BEST_Commu.png";
import AddPost from "../../Assets/Add_Post.png";
import StyledBtn from "../../Style/StyledBtn";
import {faCaretLeft, faCaretRight, faHeart, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Modal from "../../Components/Modal";
import {Link} from "react-router-dom";
import useInput from "../../Hooks/useInput";

const Community = () => {

  const [bestPosts, setBestPosts] = useState([
    {id: 1, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 2, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 3, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 4, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 5, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
  ]);
  const [posts, setPosts] = useState([
    {id: 1, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 2, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 3, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 4, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 5, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 6, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 7, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 8, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 9, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    {id: 10, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
  ]);
  const [totalPage, setTotalPage] = useState(6);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [showAddNewPostModal, setShowAddNewPostModal] = useState(false);
  const [newTitle, onChangeNewTitle, setNewTitle] = useInput("");
  const [newContent, onChangeNewContent, setNewContent] = useInput("");
  const [newImages, onChangeNewImages, setNewImages] = useInput([]);
  const [showGoLeftPages, setShowGoLeftPages] = useState(false);
  const [showGoRightPages, setShowGoRightPages] = useState(true);

  // 베스트 게시글 조회
  useEffect(() => {
    axios.get(preURL.preURL + '/boards/community/best')
        .then((res) => {
          console.log("👍베스트 게시글 조회 성공");
          setBestPosts(res.data);
        })
        .catch((err) => {
          console.log("🧨베스트 게시글 조회 실패", err)
        })
  }, []);

  // 전체 게시글 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/community?page=${page}&size=10&sort=${sort}&sort=id,DESC&q=${search}`)
        .then((res) => {
          console.log("👍전체 게시글 조회 성공");
          const data = res.data;
          const totalPage = data["totalPageCount"];
          const posts = data["boardsResponses"];
          setPosts(posts);
          setTotalPage(totalPage);
          let list = [];
          if(totalPage >= 5) list = [1,2,3,4,5];
          else {
            for(let i=1; i<=totalPage; i++) list.push(i);
          }
          setPages(list);
        })
        .catch((err) => {
          console.log("🧨전체 게시글 조회 실패", err);
        })
  }, [sort]);

  // 새 게시물 작성 버튼 클릭 -> 모달 창 open
  const onClickAddNewPost = useCallback(() => {
    setShowAddNewPostModal(true);
    console.log("새 게시물 쓰기: " + showAddNewPostModal);
  }, []);

  // 모달 창 close
  const onCloseModal = useCallback(() => {
    setShowAddNewPostModal(false);
    console.log("새 게시물 쓰기 모달창 닫기");
  }, []);

  // 새 게시물 작성 submit
  const onAddNewPost = useCallback((e) => {
    e.preventDefault();
    axios
        .post(preURL.preURL + '/boards/community', {
          title: newTitle,
          content: newContent,
          files: newImages,
        })
        .then((res) => {
          console.log("👍잡담글 등록 성공 ", res.data);
          setNewTitle("");
          setNewContent("");
          setNewImages([]);
        })
        .catch((err) => {
          console.log("🧨잡담글 등록 에러 ", err);
          console.log(newTitle);
          console.log(newContent);
          console.log(newImages);
        })
  }, [newTitle, newContent, newImages]);

  // 최신순
  const onClickSortNewest = useCallback(() => {
    setSort("");
    console.log("최신순 정렬");
  }, []);

  // 좋아요순
  const onClickSortLike = useCallback(() => {
    setSort("likeCount,DESC");
    console.log("좋아요순 정렬");
  }, []);

  // 조회순
  const onClickSortView = useCallback(() => {
    setSort("viewCount,DESC");
    console.log("조회순 정렬");
  }, []);

  // 페이지 클릭
  const onClickPage = (e) => {
    setPage(e.target.innerHTML-1);
    console.log("페이지 클릭", e.target.innerHTML);
  };

  // 페이지 넘기기
  const onClickNextPages = useCallback((e) => {
    console.log("페이지 넘기기");
    console.log("페이지:" + pages);
    if(pages.length < 5) return;
    let list = [];
    for(let i=0; i<5; i++){
      list[i] = pages[i]+5;
      if(list[i] >= totalPage) {
        setShowGoRightPages(false);
        break;
      }
    }
    setPages(list);
    setShowGoLeftPages(true);
  }, [pages]);

  // 페이지 돌아가기
  const onClickPreviousPages = useCallback((e) => {
    console.log("페이지 돌아가기");
    console.log("페이지: " + pages);
    if(pages.length < 5){
      for(let i=0; i<5; i++) pages[i] = pages[0]+i;
    }
    let list = [];
    for(let i=4; i>=0; i--){
      list[i] = pages[i]-5;
      if(list[i] <= 1) {
        setShowGoLeftPages(false);
        break;
      }
    }
    setPages(list);
    setShowGoRightPages(true);
  },[]);

  // 베스트 게시물 목록
  let rank = 1;
  const bestPostList = bestPosts.map((bestPost) => {
    const url = `/community/${bestPost.id}`;
    return (
        <div style={{width: "524px"}}>
          <Contents>
            <BestRankNum>{rank++}</BestRankNum>
            <Link to={url} style={{textDecorationLine: "none"}}>
              <Title style={{color: "#532A6B"}}>
                {bestPost.title}
              </Title>
            </Link>
            <Info>
              <StyledBtn>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "80%", color: "#D9767C", marginLeft: "auto" }}
                />
              </StyledBtn>
              <p style={{color: "#D9767C", width: "20px"}}>
                {bestPost.likeCount}
              </p>
            </Info>
          </Contents>
          <Line />
        </div>
    )
  });

  // 전체 게시물 목록
  const postList = posts.map((post) => {
    const url = `/community/${post.id}`
    return (
        <div style={{width: "805px"}}>
          <Contents>
            <Link to={url} style={{textDecorationLine: "none"}}>
              <Title>{post.title}</Title>
            </Link>
            <Info>
              <p style={{marginRight: 10}}>{post.createdTime}</p>
              <p style={{marginRight: 0}}>조회</p>
              <p style={{marginRight: 10}}>{post.viewCount}</p>
              <StyledBtn>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "80%", color: "#D9767C", marginLeft: "auto" }}
                />
              </StyledBtn>
              <p style={{color: "#D9767C"}}>{post.likeCount}</p>
            </Info>
          </Contents>
          <Line />
        </div>
    )
  });

  // 페이지 번호
  const showPages = pages.map((page) => {
    return (
        <PageNum style={{fontSize: "20px", padding: "10.5px"}} onClick={onClickPage}>
          {page}
        </PageNum>
    )
  });

  return (
      <div>
        <Header />
        <Wrapper>
          <StyledBtn
              id="add-new-post"
              style={{display: "flex", marginLeft: "60%"}}
              onClick={onClickAddNewPost}
          >
            <img src={AddPost} alt="새 게시글 쓰기"/>
          </StyledBtn>
          {/*새 게시글 쓰기 모달창*/}
          <Modal show={showAddNewPostModal} onCloseModal={onCloseModal}>
            <form onSubmit={onAddNewPost}>
              <Input placeholder="제목을 입력하세요." value={newTitle} onChange={onChangeNewTitle}/>
              <ImgInput>
                <label for="img-input">
                  <FontAwesomeIcon for="img-input" icon={faPlus} style={{ fontSize: "150%", color: "white" }} />
                </label>
                <input id="img-input" type="file" accept="image/*" multiple value={newImages} onChange={onChangeNewImages} style={{display: "none"}}/> {/*이미지 여러개 배열로 해야됨*/}
                {/*<input value="선택된 파일 없음" disabled="disabled" />*/}
              </ImgInput>
              <TextArea placeholder="내용" value={newContent} onChange={onChangeNewContent}/>
              <SubmitBtn type="submit">확인</SubmitBtn>
            </form>
          </Modal>
          <BestPostsWrapper>
            <img src={BestCommu} alt="Best 잡담 게시글"/>
            <PostLists style={{paddingLeft: "25px"}}>
              {bestPostList}
            </PostLists>
          </BestPostsWrapper>
          <PostsWrapper>
            <PostLists>{postList}</PostLists>
          </PostsWrapper>
          <SortBox>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "876px"}}
                onClick={onClickSortNewest}
            >
              최신순
            </StyledBtn>
            <p>|</p>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "941px"}}
                onClick={onClickSortLike}
            >
              좋아요순
            </StyledBtn>
            <p>|</p>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "1010px"}}
                onClick={onClickSortView}
            >
              조회순
            </StyledBtn>
          </SortBox>
          <Pagination>
            {showGoLeftPages &&
                <StyledBtn id="previous-page" onClick={onClickPreviousPages}>
                  <FontAwesomeIcon
                      icon={faCaretLeft}
                      style={{
                        fontSize: "20px",
                        color: "#9C9C9C",
                        marginLeft: "10.5px",
                      }}
                  />
                </StyledBtn>
            }
            <Pages>{showPages}</Pages>
            {showGoRightPages &&
                <StyledBtn id="next-page" onClick={onClickNextPages}>
                  <FontAwesomeIcon
                      icon={faCaretRight}
                      style={{
                        fontSize: "20px",
                        color: "#9C9C9C",
                        marginLeft: "10.5px",
                      }}
                  />
                </StyledBtn>
            }
          </Pagination>
        </Wrapper>
      </div>
  )
}

export default Community;
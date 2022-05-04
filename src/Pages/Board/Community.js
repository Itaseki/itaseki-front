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
import {faCaretRight, faHeart} from "@fortawesome/free-solid-svg-icons";
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
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([0, 1, 2, 3, 4]);
  const [sort, setSort] = useState("id,DESC");
  const [search, setSearch] = useState("");
  const [showAddNewPostModal, setShowAddNewPostModal] = useState(false);
  const [newTitle, onChangeNewTitle, setNewTitle] = useInput("");
  const [newContent, onChangeNewContent, setNewContent] = useInput("");
  const [newImages, onChangeNewImages, setNewImages] = useInput([]);

  // 베스트 게시글 조회
  useEffect(() => {
    axios.get(preURL.preURL + '/boards/community/best')
        .then((res) => {
          console.log("베스트 게시글 조회");
          setBestPosts(res.data);
        })
        .catch((err) => {
          console.log(err)
        })
  }, []);

  // 전체 게시글 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/community?page=${page}&size=10&sort=${sort}&q=${search}`)
        .then((res) => {
          console.log("전체 게시글 조회");
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }, []);

  // 새 게시물 작성 버튼 클릭
  const onClickAddNewPost = useCallback(() => {
    setShowAddNewPostModal(true);
    console.log("add new post btn click")
  }, []);

  // 모달 창 close
  const onCloseModal = useCallback(() => {
    setShowAddNewPostModal(false);
    console.log("close modal");
  }, []);

  // 새 게시물 작성 submit
  const onAddNewPost = useCallback((e) => {
    axios
        .post(preURL.preURL + '/boards/community', {
          title: newTitle,
          content: newContent,
          images: newImages,
        })
        .then((res) => {
          console.log("잡담글 등록", res.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }, []);

  // 최신순
  const onClickSortNewest = useCallback(() => {
    setSort("id,DESC");
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
  const onClickPage = useCallback((e) => {
    setPage(e.target.innerHTML);
    console.log("페이지 클릭", e.target.innerHTML);
  }, []);

  // 페이지 넘기기
  const onClickNextPages = useCallback((e) => {
    console.log("페이지 넘기기");
  }, [pages]);


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
          {page + 1}
        </PageNum>
    )
  })

  return (
      <div>
        <Header />
        <Wrapper>
          <StyledBtn
              id="add-new-post"
              style={{display: "flex", marginLeft: "60%"}}
              onClick={onClickAddNewPost}
          >
            <img src={AddPost} />
          </StyledBtn>
          <Modal show={showAddNewPostModal} onCloseModal={onCloseModal}>
            <form onSubmit={onAddNewPost}>
              <Input placeholder="제목을 입력하세요." value={newTitle} onChange={onChangeNewTitle}/>
              <ImgInput type="file" accept="image/*" multiple value={newImages} onChange={onChangeNewImages}/> {/*이미지 여러개 배열로 해야됨*/}
              <TextArea placeholder="내용" value={newContent} onChange={onChangeNewContent}/>
              <SubmitBtn type="submit">확인</SubmitBtn>
            </form>
          </Modal>
          <BestPostsWrapper>
            <img src={BestCommu}/>
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
            <Pages>{showPages}</Pages>
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
          </Pagination>
        </Wrapper>
      </div>
  )
}

export default Community;
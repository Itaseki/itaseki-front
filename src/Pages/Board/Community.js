import React, {useCallback, useEffect, useState} from 'react';
import preURL from "../../preURL/preURL";
import axios from "axios";
import {
  BestPostsWrapper,
  BestRankNum, Contents, ImgInput, Info, Input,
  Line, Pages, Pagination,
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
import CommunityDetail from "./CommunityDetail";

const Community = () => {

  const [bestPosts, setBestPosts] = useState([
    {rank: 1, title: "best1", heart: 10},
    {rank: 2, title: "best2", heart: 9},
    {rank: 3, title: "best3", heart: 8},
    {rank: 4, title: "best4", heart: 7},
    {rank: 5, title: "best5", heart: 6},
  ]);
  const [posts, setPosts] = useState([
    {title: "post1", time: "1:05", views: 2, heart: 1},
    {title: "post2", time: "1:04", views: 2, heart: 1},
    {title: "post3", time: "1:03", views: 2, heart: 1},
    {title: "post4", time: "1:02", views: 2, heart: 1},
    {title: "post5", time: "1:01", views: 2, heart: 1},
    {title: "post6", time: "1:00", views: 2, heart: 1},
    {title: "post7", time: "12:59", views: 2, heart: 1},
    {title: "post8", time: "12:58", views: 2, heart: 1},
    {title: "post9", time: "12:49", views: 2, heart: 1},
    {title: "post10", time: "12:30", views: 2, heart: 1},
  ]);
  const [pages, setPages] = useState([0, 1, 2, 3, 4]);
  const [sort, setSort] = useState("id,DESC");
  const [search, setSearch] = useState("");
  const [showAddNewPostModal, setShowAddNewPostModal] = useState(false);

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
    axios.get(preURL.preURL + `/boards/community?page=${pages}&size=10&sort=${sort}&q=${search}`)
        . then(res => {
          console.log("전체 게시글 조회");
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }, []);

  // 상세 게시물 조회
  const onClickDetail = useCallback(() => {
    console.log("상세 게시물 조회");
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
  const onAddNewPost = useCallback(() => {
    console.log("새 게시물 작성 완료");
  }, [])


  // 베스트 게시물 목록
  const bestPostList = bestPosts.map((bestPost) => {
    return (
        <div style={{width: "524px"}}>
          <Contents>
            <BestRankNum>{bestPost.rank}</BestRankNum>
            <Link to="/community/상세게시글" style={{textDecorationLine: "none"}}>
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
                {bestPost.heart}
              </p>
            </Info>
          </Contents>
          <Line />
        </div>
    )
  });

  // 전체 게시물 목록
  const postList = posts.map((post) => {
    return (
        <div style={{width: "805px"}}>
          <Contents>
            <Link to="/community/상세게시물" style={{textDecorationLine: "none"}}>
              <Title>{post.title}</Title>
            </Link>
            <Info>
              <p style={{marginRight: 10}}>{post.time}</p>
              <p style={{marginRight: 0}}>조회</p>
              <p style={{marginRight: 10}}>{post.views}</p>
              <StyledBtn>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "80%", color: "#D9767C", marginLeft: "auto" }}
                />
              </StyledBtn>
              <p style={{color: "#D9767C"}}>{post.heart}</p>
            </Info>
          </Contents>
          <Line />
        </div>
    )
  });

  // 페이지 번호
  const showPages = pages.map((page) => {
    return (
        <StyledBtn style={{fontSize: "20px", padding: "10.5px"}}>
          {page + 1}
        </StyledBtn>
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
              <Input placeholder="제목을 입력하세요."/>
              <ImgInput type="file" accept="image/*"/>
              <TextArea placeholder="내용"/>
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
            >
              최신순
            </StyledBtn>
            <p>|</p>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "941px"}}
            >
              좋아요순
            </StyledBtn>
            <p>|</p>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "1010px"}}
            >
              조회순
            </StyledBtn>
          </SortBox>
          <Pagination>
            <Pages>{showPages}</Pages>
            <StyledBtn id="next-page">
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
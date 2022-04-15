import React, {useCallback, useEffect, useState} from 'react';
import preURL from "../../preURL/preURL";
import axios from "axios";
import {
  BestPostsWrapper,
  BestRankNum, Contents, Info,
  Line, Pages, Pagination,
  PostLists,
  PostsWrapper,
  SortBox,
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
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [showAddNewPostModal, setShowAddNewPostModal] = useState(false);

  useEffect(() => {
    axios.get(preURL.preURL + '/boards/community/best')
        .then(res => {
          setBestPosts(res.data);
        });
  }, []);

  useEffect(() => {
    axios.get(preURL.preURL + `/boards/community?page=${0}&size=${10}&sort=${'id'},DESC&q=${'검색어'}`)
        . then(res => {
          setPosts(res.data);
        });
  }, []);

  const onClickAddNewPost = useCallback(() => {
    setShowAddNewPostModal(true);
    console.log("add new post btn click");
  }, []);

  const onCloseModal = useCallback(() => {
    setShowAddNewPostModal(false);
  }, []);


  const bestPostList = bestPosts.map((bestPost) => {
    return (
        <div style={{width: "524px"}}>
          <Contents>
            <BestRankNum>{bestPost.rank}</BestRankNum>
            <Title style={{color: "#532A6B"}}>
              {bestPost.title}
            </Title>
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

  const postList = posts.map((post) => {
    return (
        <div style={{width: "805px"}}>
          <Contents>
            <Title>{post.title}</Title>
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

  const showPages = pages.map((page) => {
    return (
        <StyledBtn style={{fontSize: "20px", padding: "10.5px"}}>
          {page}
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
          <Modal show={showAddNewPostModal} onCloseModal={onCloseModal}>Modal</Modal>
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
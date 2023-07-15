import React, { useCallback, useEffect, useState } from "react";
import preURL from "../../preURL/preURL";
import axios from "axios";
import { Link } from "react-router-dom";
// Hooks
import useInput from "../../Hooks/useInput";
// Components
import Header from "../../Components/Header";
import Modal from "../../Components/Modal";
import Pagination from "../../Components/Pagination";
// Style
import {
  BestPostsWrapper,
  BestRankNum,
  Contents,
  ImgInput,
  Info,
  InputTitle,
  Line,
  PostLists,
  PostsWrapper,
  SortBox,
  SubmitBtn,
  TextArea,
  Title,
  Wrapper,
} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import BestCommu from "../../Assets/Best_Commu.png";
import AddPost from "../../Assets/Add_Post.png";
import Enter from "../../Assets/Add_video_submit.png";

const Community = () => {
  const [bestPosts, setBestPosts] = useState([
    // {id: 1, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 2, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 3, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 4, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 5, title: "best1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
  ]);
  const [posts, setPosts] = useState([
    // {id: 1, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 2, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 3, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 4, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 5, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 6, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 7, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 8, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 9, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
    // {id: 10, title: "post1", writerNickname: "배고파", createdTime: "1:05", viewCount: 2, likeCount: 1, commentCount: 3},
  ]);
  const [totalPage, setTotalPage] = useState(6);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [showAddNewPostModal, setShowAddNewPostModal] = useState(false);
  const [newTitle, onChangeNewTitle, setNewTitle] = useInput("");
  const [newContent, onChangeNewContent, setNewContent] = useInput("");
  const [newImages, setNewImages] = useState([]);
  const [showNewImgs, setShowNewImgs] = useState([]);

  // 베스트 게시글 조회
  useEffect(() => {
    axios
      .get(preURL.preURL + "/boards/community/best")
      .then((res) => {
        console.log("👍베스트 게시글 조회 성공");
        setBestPosts(res.data);
      })
      .catch((err) => {
        console.log("🧨베스트 게시글 조회 실패", err);
      });
  }, []);

  // 전체 게시글 조회
  useEffect(() => {
    axios
      .get(
        preURL.preURL +
          `/boards/community?page=${page}&size=10&sort=${sort}&sort=id,DESC&q=${search}`
      )
      .then((res) => {
        console.log("👍전체 게시글 조회 성공", res.data);
        const data = res.data;
        const totalPage = data["totalPageCount"];
        const posts = data["boardsResponses"];
        setPosts(posts);
        setTotalPage(totalPage);
        let list = [];
        if (totalPage >= 5) list = [1, 2, 3, 4, 5];
        else {
          for (let i = 1; i <= totalPage; i++) list.push(i);
        }
        setPages(list);
      })
      .catch((err) => {
        console.log("🧨전체 게시글 조회 실패", err);
      });
  }, [sort, page]);

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

  // 이미지 인풋 onChange
  const onChangeNewImages = (e) => {
    const files = e.target.files;
    // console.log(files);
    let list = [];
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onload = () => {
        list[i] = reader.result;
        setShowNewImgs([...list]);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  // 새 게시물 작성 submit
  const onAddNewPost = useCallback(
    (e) => {
      if (!newTitle) {
        alert("제목을 입력하세요");
        e.preventDefault();
        return;
      }
      if (!newContent) {
        alert("내용을 입력하세요");
        e.preventDefault();
        return;
      }
      const formData = new FormData();
      let variables = {
        title: newTitle,
        content: newContent,
      };
      formData.append(
        "communityBoardDto",
        new Blob([JSON.stringify(variables)], { type: "application/json" })
      );
      for (let i = 0; i < newImages.length; i++) {
        formData.append("files", newImages[i]);
      }
      axios
        .post(
          preURL.preURL + "/boards/community",
          // title: newTitle,
          // content: newContent,
          // files: newImages,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
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
          // formData 내용 확인
          console.log("formData: ");
          for (let value of formData.values()) {
            console.log(value);
          }
        });
    },
    [newTitle, newContent, newImages]
  );

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

  // 베스트 게시물 목록
  let rank = 1;
  const bestPostList = bestPosts.map((bestPost) => {
    const url = `/community/${bestPost.id}`;
    return (
      <div style={{ width: "450px" }}>
        <Contents>
          <BestRankNum>{rank++}</BestRankNum>
          <Link to={url} style={{ textDecorationLine: "none" }}>
            <Title>
              <span>{bestPost.title}</span>&nbsp;
              {bestPost.commentCount !== 0 && (
                <span id="comment-cnt">{bestPost.commentCount}</span>
              )}
            </Title>
          </Link>
          <Info>
            <StyledBtn>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "80%",
                  color: `${light.colors.mainColor}`,
                  marginLeft: "auto",
                }}
              />
            </StyledBtn>
            <p style={{ color: `${light.colors.mainColor}`, width: "20px" }}>
              {bestPost.likeCount}
            </p>
          </Info>
        </Contents>
        <Line style={{ borderBottom: "dashed" }} />
      </div>
    );
  });

  // 전체 게시물 목록
  const postList = posts.map((post) => {
    const url = `/community/${post.id}`;
    return (
      <div style={{ width: "805px" }}>
        <Contents>
          <Link to={url} style={{ textDecorationLine: "none" }}>
            <Title>
              <span>{post.title}</span>&nbsp;
              {post.commentCount !== 0 && (
                <span id="comment-cnt">{post.commentCount}</span>
              )}
            </Title>
          </Link>
          <Info>
            <p style={{ marginRight: 10 }}>{post.createdTime}</p>
            <p style={{ marginRight: 0 }}>조회</p>
            <p style={{ marginRight: 10 }}>{post.viewCount}</p>
            <StyledBtn>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "80%",
                  color: `${light.colors.mainColor}`,
                  marginLeft: "auto",
                }}
              />
            </StyledBtn>
            <p style={{ color: `${light.colors.mainColor}` }}>
              {post.likeCount}
            </p>
          </Info>
        </Contents>
        <Line />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <Wrapper>
        <StyledBtn
          id="add-new-post"
          style={{ display: "flex", marginLeft: "60%" }}
          onClick={onClickAddNewPost}
        >
          <img src={AddPost} alt="새 게시글 쓰기" />
        </StyledBtn>
        {/*새 게시글 쓰기 모달창*/}
        <Modal show={showAddNewPostModal} onCloseModal={onCloseModal}>
          <form encType="multipart/form-data" onSubmit={onAddNewPost}>
            <InputTitle
              value={newTitle}
              onChange={onChangeNewTitle}
              placeholder="| 제목을 입력하세요."
            />
            <ImgInput>
              <label htmlFor="img-input">
                <FontAwesomeIcon
                  for="img-input"
                  icon={faPlus}
                  style={{ fontSize: "150%" }}
                />
              </label>
              <input
                id="img-input"
                type="file"
                accept="image/*"
                multiple
                onChange={onChangeNewImages}
                style={{ display: "none" }}
              />
              {showNewImgs &&
                showNewImgs.map((imgUrl) => {
                  return (
                    <img
                      src={imgUrl}
                      alt="이미지 미리보기"
                      style={{ height: "90%" }}
                    />
                  );
                })}
            </ImgInput>
            <TextArea
              placeholder="내용"
              value={newContent}
              onChange={onChangeNewContent}
            />
            <SubmitBtn type="image" src={Enter} />
          </form>
        </Modal>
        <BestPostsWrapper>
          <img src={BestCommu} alt="Best 잡담 게시글" />
          <PostLists>{bestPostList}</PostLists>
        </BestPostsWrapper>
        <PostsWrapper>
          <PostLists>{postList}</PostLists>
        </PostsWrapper>
        <SortBox>
          <StyledBtn
            id="sort-btn"
            style={{ fontSize: "10px", marginRight: 4, left: "876px" }}
            onClick={onClickSortNewest}
          >
            최신순
          </StyledBtn>
          <p>|</p>
          <StyledBtn
            id="sort-btn"
            style={{ fontSize: "10px", marginRight: 4, left: "941px" }}
            onClick={onClickSortLike}
          >
            좋아요순
          </StyledBtn>
          <p>|</p>
          <StyledBtn
            id="sort-btn"
            style={{ fontSize: "10px", marginRight: 4, left: "1010px" }}
            onClick={onClickSortView}
          >
            조회순
          </StyledBtn>
        </SortBox>
        <Pagination
          pages={pages}
          setPages={setPages}
          setPage={setPage}
          totalPageCount={totalPage}
        />
      </Wrapper>
    </div>
  );
};

export default Community;

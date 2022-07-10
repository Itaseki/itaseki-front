import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {
  AddNewPlyBtn,
  AutoFrame,
  Line, MakeNewPlyBtn, NewPlyInput, OneSelectItemWrapper,
  OneVideoWrapper,
  SortBox, SwitchBtnLabel,
  ToggleScrollWrapper,
  VideoContainer,
  VideoInfo,
  VideoList,
  VideoListWrapper,
  Wrapper,
  XButton
} from "../../Style/Video";
import TV from '../../Assets/TV.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../../Style/StyledBtn";
import preURL from "../../preURL/preURL";
import axios from "axios";
import PlayListIcon from "../../Assets/Playlist_mini.png";
import {useNavigate} from "react-router-dom";
import Add_New_Video from "../../Assets/Add_new_video.png";
import useInput from "../../Hooks/useInput";
import Pagination from "../../Components/Pagination";

const AllVideo = () => {
  const navigate = useNavigate();

  const [bestVideos, setBestVideos] = useState([
    {id: 1, title: "베스트 영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    {id: 2, title: "베스트 영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    {id: 3, title: "베스트 영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    {id: 4, title: "베스트 영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""}
  ]);
  const [videos, setVideos] = useState([
    {id: 1, title: "영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    {id: 2, title: "영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    {id: 3, title: "영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    {id: 4, title: "영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""}
  ]);
  const [totalPageCount, setTotalPageCount] = useState(0);  // 총 페이지 수
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC
  const [playlistToggleDisplay, setPlaylistToggleDisplay] = useState(false);  // 플레이리스트 모달창 보이기
  const [playlistList, setPlaylistList] = useState([]); // 받아온 내 플레이리스트 목록
  const [clickedPlyId, setClickedPlyId] = useState(-1); // 클릭한 플레이리스트 아이콘 id
  // 새로운 플레이리스트
  const [addNewPly, setAddNewPly] = useState(false);
  const [newPlyName, onChangeNewPlyName, setNewPlyName] = useInput("");
  const [newPlyPublic, setNewPlyPublic] = useState(false);
  // 검색
  const [searchHashtag1, setSearchHashtag1] = useState("");
  const [searchHashtag2, setSearchHashtag2] = useState("");
  const [searchNickname, setSearchNickname] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 베스트 영상 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + '/boards/video/best')
        .then((res) => {
          console.log("👍베스트 영상 조회 성공", res.data);
          setBestVideos(res.data);
        })
        .catch((err) => {
          console.log("🧨베스트 영상 조회 실패", err);
        })
  }, []);

  // 전체 영상 조회
  useEffect(() => {
    axios
        .get(preURL.preURL +
            `/boards/video?page=${page}&sort=${sort}&sort=id,DESC`) /*검색 - &tag=${searchHashtag1}%2C${searchHashtag2}&nickname=${searchNickname}&q=${searchKeyword}*/
        .then((res) => {
          console.log("👍전체 영상 조회 성공", res.data);
          const data = res.data;
          const totalPage = data["totalPageCount"];
          const allVideo = data["videosResponses"];
          setTotalPageCount(totalPage);
          setVideos(allVideo);
          let list = [];
          if(totalPage < 5) {
            for(let i=1; i<=totalPage; i++)
              list.push(i);
            setPages(list);
          }
        })
        .catch((err) => {
          console.log("🧨전체 영상 조회 실패", err);
        })
  }, [sort, page]);

  // 사용자 플레이리스트 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/user/${1}`)  /*사용자 id*/
        .then((res) => {
          setPlaylistList(res.data);
          console.log("👍내 플레이리스트 조회 성공", res.data);
        })
        .catch((err) => {
          console.log(err);
          console.log("🧨내 플레이리스트 조회 실패", err);
        })
  },[playlistToggleDisplay]);

  // 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlaylistToggleDisplay(prev => !prev);
  };

  // 플레이리스트 공개/비공개
  const onClickPublic = (prop) => {
    const Target = prop.target;
    const id = Target.id;
    axios
        .patch(preURL.preURL + `/boards/playlist/${id}`)
        .then((res) => {
          console.log("👍플레이리스트 공개/비공개 수정 성공");
          if(res.status === 200) {
            prop.target.parentNode.classList.toggle('active');
            Target.classList.toggle('active');
            // console.log(prop.target.parentNode.classList)
            // console.log(Target);
            if(Target.innerText === "비공개") Target.innerText = "공개";
            else Target.innerText = "비공개";
          }
          else if(res.status === 403) alert("수정 권한이 없습니다.");
        })
        .catch((err) => {
          console.log("🧨플레이리스트 공개/비공개 수정 실패", err);
        })
  };

  // 새 플레이리스트 생성
  const onClickMakePly = () => {
    axios
        .post(preURL.preURL + '/boards/playlist', {
          title: newPlyName,
          isPublic: newPlyPublic
        })
        .then((res) => {
          console.log("👍새 플레이리스트 생성 성공", res.data);
          setNewPlyName("");
          setNewPlyPublic(false);
          setAddNewPly(false);
        })
        .catch((err) => {
          console.log("🧨새 플레이리스트 생성 실패", err);
        })
  };

  // 플레이리스트 토글 리스트
  const PlayList = playlistList.map((onePlayList) => {
    return(
        <OneSelectItemWrapper>
          <input
              type="checkbox"
              id={onePlayList.id}
              value={onePlayList.title}
              // onChange={selectPlayList}
          />
          <label>
            {onePlayList.title}
          </label>
          <div>
            {onePlayList.isPublic
                ?
                <SwitchBtnLabel>
                  <span className="active" id={onePlayList.id} onClick={onClickPublic}>공개</span>
                </SwitchBtnLabel>
                :
                <SwitchBtnLabel>
                  <span id={onePlayList.id} onClick={onClickPublic}>비공개</span>
                </SwitchBtnLabel>
            }
          </div>
        </OneSelectItemWrapper>
    )
  });

  // 최신순 정렬
  const onClickSortNewest = () => {
    console.log("최신순 정렬");
    setSort("");
  };

  // 좋아요순 정렬
  const onClickSortLike = () => {
    console.log("좋아요순 정렬");
    setSort("likeCount,DESC");
  };


  // 각 비디오
  const OneVideo = (video) => {
    const videoId = video.id;
    return (
        <OneVideoWrapper>
          <VideoContainer onClick={()=>navigate(`/videolist/${videoId}`)}>
            <img src={video.thumbnailUrl} alt="썸네일" style={{width: "240px", height: "135px"}}/>
          </VideoContainer>
          <div>
            <VideoInfo>
              <span id="title" onClick={()=>navigate(`/videolist/${videoId}`)}>
                {video.title}
              </span>
              <div id="info-right">
                <StyledBtn>
                  <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "80%", color: "#D9767C", marginLeft: "auto" }}
                  />
                </StyledBtn>
                <span style={{color: "#D9767C"}}>{video.likeCount}</span>
                <img
                    src={PlayListIcon}
                    alt="플레이리스트에 추가"
                    id={videoId}
                    onClick={onClickAddToPlaylist}
                    style={{marginLeft: "4px", cursor: "pointer"}}/>
                {clickedPlyId === videoId &&   /*클릭한 아이콘과 id가 동일한 모달창에만 적용되도록*/
                    <AutoFrame display={playlistToggleDisplay} style={{marginTop: "200px"}}>
                      <XButton onClick={() => {
                        setPlaylistToggleDisplay(prev => !prev)
                        setAddNewPly(false);
                      }}>&times;</XButton>
                      <span>플레이리스트에 담기</span>
                      <hr/>
                      <ToggleScrollWrapper>
                        {PlayList}
                      </ToggleScrollWrapper>
                      <div style={{alignSelf: "center"}}>
                        {addNewPly
                            ?
                            <>
                              <NewPlyInput type="text" placeholder="플레이리스트 이름" value={newPlyName} onChange={onChangeNewPlyName}/>
                              <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "10px 0"}}>
                                {newPlyPublic
                                    ?
                                    <SwitchBtnLabel style={{margin: 0}}>
                                      <span className="active" onClick={() => setNewPlyPublic(prev => !prev)}>공개</span>
                                    </SwitchBtnLabel>
                                    :
                                    <SwitchBtnLabel style={{margin: 0}}>
                                      <span onClick={() => setNewPlyPublic(prev => !prev)}>비공개</span>
                                    </SwitchBtnLabel>
                                }
                                <MakeNewPlyBtn onClick={onClickMakePly}>만들기</MakeNewPlyBtn>
                              </div>
                            </>
                            :
                            <AddNewPlyBtn onClick={() => setAddNewPly(prev => !prev)}>
                              새 플레이리스트 만들기
                            </AddNewPlyBtn>
                        }
                      </div>
                    </AutoFrame>
                }
              </div>
            </VideoInfo>
            <span style={{fontSize: "small", color: "var(--main-color)"}}>{video.writerNickname}</span>
          </div>
        </OneVideoWrapper>
    )
  };


  return (
      <div>
        <Header />
        <img
            src={Add_New_Video}
            alt="새 영상글 쓰기"
            style={{display: "block", marginLeft: "auto", marginRight: "200px", cursor: "pointer"}}
            onClick={() => navigate("/addvideo")}
        />
        <Wrapper>
          {(page===0) &&
              <VideoListWrapper>
                <img src={TV} alt="Best Videos" />
                <VideoList style={{marginTop: "5%"}}>
                  {bestVideos.map((bestVideo) => {
                    return OneVideo(bestVideo)
                  })}
                </VideoList>
              </VideoListWrapper>
          }
          <Line />
          <VideoListWrapper>
            <VideoList>
              {videos.map((video) => {
                return OneVideo(video)
              })}
            </VideoList>
          </VideoListWrapper>
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
          </SortBox>
          {/*페이지네이션*/}
          <Pagination pages={pages} setPages={setPages} setPage={setPage} totalPageCount={totalPageCount} />
        </Wrapper>
      </div>
  )
}

export default AllVideo;
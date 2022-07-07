import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {
  AddToPlayList, AddVideoBtn,
  AddVideoForm,
  AutoFrame, HashTag,
  Introduce,
  NewUrlForm, OneSelectItemWrapper, OneSeries,
  PreInform,
  PreInformContent, Round,
  Series, SwitchBtnLabel, SwitchBtnSpan, ToggleScrollWrapper
} from "../../Style/Video";
import StyledBtn from "../../Style/StyledBtn";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
import useInput from "../../Hooks/useInput";
import YoutubeAPI from "../../Components/Video/YoutubeAPI";

const AddNewVideo = () => {
  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);
  const [verified, setVerified] = useState(false);
  const [seriesList, setSeriesList] = useState([{id: 0, name: ""}]);
  const [searchSeries, onChangeSearchSeries, setSearchSeries] = useInput("");
  const [hashTagsList, setHashTagsList] = useState([{id: 0, name: ""}]);
  const [hashTag1, setHashTag1] = useState([]);
  const [playListList, setPlayListList] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [seriesToggleDisplay, setSeriesToggleDisplay] = useState(false);
  const [hashTagToggleDisplay, setHashTagToggleDisplay] = useState(false);
  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);
  // 영상 등록시 전송 데이터
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput("");
  const [videoTitle, setVideoTitle] = useState("");
  const [runtime, setRuntime] = useState("");
  const [introduction, onChangeIntroduction,setIntroduction] = useInput("");
  const [selectedSeriesId, setSelectedSeriesId] = useState(0);
  const [episode, onChangeEpisode, setEpisode] = useInput("");  // Int
  const [selectedHashtagId, setSelectedHashtagId] = useState([]);
  const [hashTag2, onChangeHashTag2, setHashTag2] = useInput("");
  const [selectedPlayListId, setSelectedPlayListId] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoUploader, setVideoUploader] = useState("");

  // 토글 정보 불러오기
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/video/info/${1}`) /*{userId}*/
        .then((res) => {
          console.log("👍시리즈, 해시태그, 플레이리스트 조회 성공", res.data);
          setSeriesList(res.data['series']);
          setHashTagsList(res.data['hashtags']);
          // setPlayListList(res.data['playlists']);
        })
        .catch((err) => {
          console.log("🧨시리즈, 해시태그, 플레이리스트 조회 실패", err);
        })
  }, []);

  // 사용자 플레이리스트 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/user/${1}`)  /*사용자 id*/
        .then((res) => {
          setPlayListList(res.data);
          console.log("👍내 플레이리스트 조회 성공", res.data);
        })
        .catch((err) => {
          console.log(err);
          console.log("🧨내 플레이리스트 조회 실패", err);
        })
  },[]);

  // 유튜브 데이터 불러오기
  async function callYoutube() {
    const youtubeData = await YoutubeAPI(newUrl);
    console.log("youtubeData: ", youtubeData);
    return youtubeData;
  }

  // url 검증
  const onClickUrlCheck = useCallback((e) => {
    e.preventDefault();
    console.log("newUrl: " + newUrl);
    axios
        .get(preURL.preURL + `/boards/video/verify?url=${newUrl}`)
        .then((res) => {
          console.log("👍url 검증 성공: ", res.data);
          if(res.data === "등록 가능") {
            alert("등록 가능한 영상입니다.");
            setVerified(true);
            // 영상 데이터 불러오기
            callYoutube()
                .then((res) => {
                  console.log("👍영상 데이터 불러오기 성공");
                  setVideoTitle(res[0]);
                  setVideoUploader(res[1]);
                  setThumbnailUrl(res[2]);
                  setRuntime(res[3]);
                })
                .catch((err) => {
                  console.log("🧨영상 데이터 불러오기 실패",err);
                });
          }
          else if(res.data === "등록 불가능") {
            alert("등록 불가능한 영상입니다.");
          }
        })
        .catch((err) => {
          console.log("🧨url 검증 실패", err);
        })
  }, [newUrl]);

  // 시리즈 검색
  useEffect(() => {
    if(searchSeries.length % 2 !== 0) return; // 2글자씩 검색 가능
    console.log("검색어: ", searchSeries);
    axios
        .get(preURL.preURL + `/boards/video/series/search?q=${searchSeries}`)
        .then((res) => {
          console.log("👍시리즈 검색 요청 성공", res);
          setSeriesList(res.data);
        })
        .catch((err) => {
          console.log("🧨시리즈 검색 요청 실패", err);
        })
  },[searchSeries]);

  // 시리즈 토글에서 선택
  const onClickOneSeries = (e) => {
    e.preventDefault();
    let selected = {id: e.target.name, name: e.target.innerHTML};
    console.log(selected);
    setSearchSeries(selected.name);
    setSelectedSeriesId(selected.id);
  };

  // 해시태그1 개수 3개 제한
  useEffect(() => {
    let box = document.getElementsByName("hashtag1");
    let cnt = 0;
    for(let i=0; i<box.length; i++)
      if(box[i].checked) cnt++;

    if(cnt >= 3) box.forEach(one => one.checked? one : one.disabled = true);
    else box.forEach(one => one.disabled = false);
  }, [hashTag1]);

  // 해시태그1 토글에서 선택
  const selectHashTag1 = (prop) => {
    const selected = {id: prop.target.id, name: prop.target.value};
    const boolChecked = prop.target.checked;
    console.log(selected, boolChecked);

    let newHashTag1, newHashTag1Id;
    if(boolChecked) {
      newHashTag1 = [...hashTag1, selected.name];
      newHashTag1Id = [...selectedHashtagId, selected.id];
      setHashTag1(newHashTag1);
      setSelectedHashtagId(newHashTag1Id);
    }
    else {
      newHashTag1 = hashTag1.filter(hashTag1 => hashTag1 !== selected.name);
      newHashTag1Id = selectedHashtagId.filter(selectedHashtagId => selectedHashtagId !== selected.id)
      setHashTag1(newHashTag1);
      setSelectedHashtagId(newHashTag1Id);
    }
  };

  // 플레이리스트에 추가
  const selectPlayList = (prop) => {
    const selected = {id: prop.target.id, name: prop.target.value};
    const boolChecked = prop.target.checked;
    console.log(selected, boolChecked);

    let newPlaylist, newPlaylistId;
    if(boolChecked) {
      newPlaylist = [...playList, selected.name];
      newPlaylistId = [...selectedPlayListId, selected.id];
      setPlayList(newPlaylist);
      setSelectedPlayListId(newPlaylistId);
    }
    else {
      newPlaylist = playList.filter(playList => playList !== selected.name);
      newPlaylistId = selectedPlayListId.filter(selectedPlayList => selectedPlayList !== selected.id)
      setPlayList(newPlaylist);
      setSelectedPlayListId(newPlaylistId);
    }
  }

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
  }

  // 영상 등록
  const onSubmitNewVideo = (e) => {
    // 영상 등록 불가능 조건 처리
    if(!agree){
      alert("유의사항에 동의해주세요.");
      e.preventDefault();
      return;
    }
    else if(!verified){
      alert("영상 검증을 완료해주세요.");
      e.preventDefault();
      return;
    }
    else if(!introduction){
      alert("영상 소개를 작성해주세요.");
      e.preventDefault();
      return;
    }
    else if(!hashTag1 || !hashTag2){
      alert("해시태그를 입력해주세요.");
      e.preventDefault();
      return;
    }

    // 영상 등록
    axios
        .post(preURL.preURL + '/boards/video', {
          url: newUrl,
          title: videoTitle,
          runtime: runtime,
          description: introduction,
          series: selectedSeriesId,
          episode: episode,
          hashtags: selectedHashtagId,
          keywords: [hashTag2],
          playlists: selectedPlayListId,
          thumbnailUrl: thumbnailUrl,
          videoUploader: videoUploader,
        })
        .then((res) => {
          console.log("👍영상 등록 성공");
          alert("영상을 등록하였습니다!");
          navigate('/videolist');
        })
        .catch((err) => {
          console.log("🧨영상 등록 실패", err);
          alert("영상 등록을 실패하였습니다.");
        })

    e.preventDefault();
  };

  // 시리즈 토글 리스트
  const SeriesList = seriesList.map((oneSeries) => {
    return (
        <OneSeries name={oneSeries.id} onClick={onClickOneSeries}>
          {oneSeries.name}
        </OneSeries>
    )
  });

  // 해시태그1 토글 리스트
  const HashTagList = hashTagsList.map((oneHashTag) => {
    return (
        <OneSelectItemWrapper>
          <input
              type="checkbox"
              id={oneHashTag.id}
              name="hashtag1"
              value={oneHashTag.name}
              onChange={selectHashTag1}
          />
          <label>
            {oneHashTag.name}
          </label>
        </OneSelectItemWrapper>
    )
  });

  // 플레이리스트 토글 리스트
  const PlayList = playListList.map((onePlayList) => {
    return(
        <OneSelectItemWrapper>
          <input
              type="checkbox"
              id={onePlayList.id} // 해시태그1과 id 중복 발생 -> 수정
              value={onePlayList.title}
              onChange={selectPlayList}
          />
          <label>
            {onePlayList.title}
          </label>
          {onePlayList.isPublic
              ?
              <SwitchBtnLabel>
                <span class="active" id={onePlayList.id} onClick={onClickPublic}>공개</span>
              </SwitchBtnLabel>
              :
              <SwitchBtnLabel>
                <span id={onePlayList.id} onClick={onClickPublic}>비공개</span>
              </SwitchBtnLabel>
          }
        </OneSelectItemWrapper>
    )
  });

  return (
      <div>
        <Header />
        <PreInform>
          <b>영상 등록시 유의사항</b>
          <PreInformContent>
            <span id="content">
              <p>1. 공지사항입니다</p>
              <p>2. 공지사항입니다</p>
            </span>
            <span id="agree">
              <input id="agree-check" type="checkbox" onChange={(e) => e.target.checked ? setAgree(true) : setAgree(false)}/>
              <label for="agree-check">동의합니다</label>
            </span>
          </PreInformContent>
        </PreInform>
        <AddVideoForm onSubmit={onSubmitNewVideo}>
          <NewUrlForm>
            <p>URL 입력</p>
            <input type="text" value={newUrl} onChange={onChangeNewUrl}/>
            <StyledBtn id="verify-btn" onClick={onClickUrlCheck}>검증</StyledBtn>
          </NewUrlForm>
          <div style={{display: "flex"}}>
            <Series>
              <p>시리즈</p>
              <input
                  type="text"
                  value={searchSeries}
                  onChange={onChangeSearchSeries}
                  onFocus={()=>setSeriesToggleDisplay(true)}
                  onBlur={()=>setSeriesToggleDisplay(false)}
              />
              <AutoFrame display={seriesToggleDisplay}>
                <span>시리즈</span>
                <hr/>
                <ToggleScrollWrapper>
                  {SeriesList}
                </ToggleScrollWrapper>
              </AutoFrame>
            </Series>
            <Introduce>
              <p>영상을 간단하게 소개한다면? (20자 이내)</p>
              <input type="text" value={introduction} onChange={onChangeIntroduction} maxLength="20"/>
            </Introduce>
          </div>
          <div style={{display: "flex"}}>
            <Round>
              <p>회차</p>
              <input type="number" value={episode} onChange={onChangeEpisode}/>
            </Round>
            <HashTag>
              <p>해시태그1 (장르, 상황)</p>
              <input
                  type="text"
                  value={hashTag1}
                  onFocus={()=>setHashTagToggleDisplay(true)}
                  onBlur={()=>setHashTagToggleDisplay(false)}
              />
              <AutoFrame display={hashTagToggleDisplay}>
                <span>해시태그1</span>
                <hr/>
                <ToggleScrollWrapper>
                  {HashTagList}
                </ToggleScrollWrapper>
              </AutoFrame>
            </HashTag>
            <HashTag>
              <p>해시태그2 (키워드)</p>
              <input type="text" value={hashTag2} onChange={onChangeHashTag2}/>
            </HashTag>
          </div>
          <AddToPlayList>
            <p>내 플레이리스트에 추가</p>
            <input
                type="text"
                value={playList}
                onFocus={()=>setPlayListToggleDisplay(true)}
                onBlur={()=>setPlayListToggleDisplay(false)}
            />
            <AutoFrame display={playListToggleDisplay}>
              <span>플레이리스트에 담기</span>
              <hr/>
              <ToggleScrollWrapper>
                {PlayList}
              </ToggleScrollWrapper>
            </AutoFrame>
          </AddToPlayList>
          <AddVideoBtn type="submit">등록하기</AddVideoBtn>
        </AddVideoForm>
      </div>
  )
}

export default AddNewVideo;
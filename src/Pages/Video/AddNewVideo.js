import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import useInput from "../../Hooks/useInput";
import preURL from "../../preURL/preURL";
import axios from "axios";
import {UserContext} from "../../_contextAPI/UserContext";
// Components
import Token from "../../Components/Token";
import Header from "../../Components/Header";
import YoutubeAPI from "../../Components/Video/YoutubeAPI";
import AddVideoToPlaylistModal from "../../Components/Playlist/AddVideoToPlaylistModal";
// Style
import {
  AddToPlayList, AddVideoBtn,
  AddVideoForm,
  AutoFrame, HashTag,
  Introduce,
  NewUrlForm, OneRowWrapper, OneSelectItemWrapper, OneSeries,
  PreInform,
  PreInformContent, Round,
  Series, ToggleScrollWrapper
} from "../../Style/Video";
import StyledBtn from "../../Style/StyledBtn";
// Assets
import Add_video_submit from "../../Assets/Add_video_submit.png";

const AddNewVideo = () => {
  const navigate = useNavigate();
  const token = Token();

  const [user, setUser] = useContext(UserContext);
  const [agree, setAgree] = useState(false);
  const [verified, setVerified] = useState(false);
  const [seriesList, setSeriesList] = useState([{id: 0, name: ""}]);
  const [searchSeries, onChangeSearchSeries, setSearchSeries] = useInput("");
  const [hashTagsList, setHashTagsList] = useState([{id: 0, name: ""}]);
  const [hashTag1, setHashTag1] = useState([]);
  const [seriesToggleDisplay, setSeriesToggleDisplay] = useState(false);
  const [hashTagToggleDisplay, setHashTagToggleDisplay] = useState(false);
  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);
  // 영상 등록시 전송 데이터
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput("");
  const [videoTitle, setVideoTitle] = useState("");
  const [runtime, setRuntime] = useState("");
  const [introduction, onChangeIntroduction, setIntroduction] = useInput("");
  const [selectedSeriesId, setSelectedSeriesId] = useState(0);
  const [episode, onChangeEpisode, setEpisode] = useInput("");  // Int
  const [selectedHashtagId, setSelectedHashtagId] = useState([]);
  const [hashTag2, onChangeHashTag2, setHashTag2] = useInput("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoUploader, setVideoUploader] = useState("");

  // 토글 정보 불러오기
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/video/info/${user.id}`, {
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          console.log("👍시리즈, 해시태그, 플레이리스트 조회 성공", res.data);
          setSeriesList(res.data['series']);
          setHashTagsList(res.data['hashtags']);
        })
        .catch((err) => {
          console.log("🧨시리즈, 해시태그, 플레이리스트 조회 실패", err);
        })
  }, []);


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

  // 영상 등록
  const onSubmitNewVideo = (e) => {
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
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
    else if(!hashTag1){
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
          playlists: [],
          thumbnailUrl: thumbnailUrl,
          videoUploader: videoUploader,
        },{
          headers: {
            'ITTASEKKI': token
          }
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


  return (
      <div>
        <Header />
        <PreInform>
          <b>영상 게시글 등록 시 유의 사항</b>
          <PreInformContent>
            <div id="content">
              <p>
                ‘텔레이나’에서는 영상을 업로드할 시, 다음과 같은 가이드라인을 따라야 합니다.
                이를 위반하는 경우 영상이 삭제될 수 있으며 이용 권한이 제한될 수 있습니다.
                또한 지속적 위반 또는 유해 게시글 업로드 등의 경우 임의 탈퇴 처리될 수 있습니다.
            </p>
            <p>* 게시할 수 있는 영상</p>
            <p>- 각종 방송국의 옛날 및 최신 예능 영상</p>
            <p>- 유튜브 등 동영상 플랫폼의 자체 예능 영상</p>
            <p>- 이외에도 유튜브에 업로드되어 있는 오락·코미디 프로그램 영상</p>
            <p>* 게시 규정</p>
            <p>- 다른 이용자에게 불쾌함을 주는 제목 또는 해시태그는 불가능합니다.</p>
            <p>- 영상 내용과 제목 또는 해시태그 등이 일치하지 않을 경우 검토 후 삭제될 수 있습니다.</p>
            <p>- 불순한 목적으로 게시하는 선정적·폭력적 게시글은 검토 후 삭제될 수 있습니다.</p>
            <p>- 사기 등 예능 영상을 즐기는 목적 이외의 의도로 게시글을 등록하면 안 됩니다.</p>
            <p>- 예능 영상 이외의 드라마·영화 등의 클립 영상은 불가능합니다. (드라마·영화 리뷰 영상의 경우 가능)</p>
            </div>
            <div id="agree">
              <input id="agree-check" type="checkbox"
                     onChange={(e) =>
                         e.target.checked ? setAgree(true) : setAgree(false)}/>
              <label for="agree-check">동의합니다</label>
            </div>
          </PreInformContent>
        </PreInform>
        <AddVideoForm onSubmit={onSubmitNewVideo}>
          <NewUrlForm>
            <p>URL 입력*</p>
            <input type="text" value={newUrl} onChange={onChangeNewUrl}/>
            <StyledBtn id="verify-btn" onClick={onClickUrlCheck}>검증</StyledBtn>
          </NewUrlForm>
          <OneRowWrapper>
            <Series>
              <p>시리즈*</p>
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
              <p>영상을 간단하게 소개한다면? (20자 이내)*</p>
              <input type="text" value={introduction} onChange={onChangeIntroduction} maxLength="20"/>
            </Introduce>
          </OneRowWrapper>
          <OneRowWrapper>
            <Round>
              <p>회차</p>
              <input type="number" value={episode} onChange={onChangeEpisode}/>
            </Round>
            <HashTag>
              <p>해시태그1 (장르, 상황)*</p>
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
          </OneRowWrapper>
          <OneRowWrapper>
            <AddToPlayList>
              <p>내 플레이리스트에 추가</p>
              <input
                  readOnly
                  onFocus={()=>setPlayListToggleDisplay(true)}
                  onBlur={()=>setPlayListToggleDisplay(false)}
              />
              <AddVideoToPlaylistModal
                  show={playListToggleDisplay}
                  setShow={setPlayListToggleDisplay}
              />
            </AddToPlayList>
            <AddVideoBtn type="submit">
              <img src={Add_video_submit} alt="영상 등록"/>
            </AddVideoBtn>
          </OneRowWrapper>
        </AddVideoForm>
      </div>
  )
}

export default AddNewVideo;
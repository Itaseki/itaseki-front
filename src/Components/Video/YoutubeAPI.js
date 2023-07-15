import axios from "axios";

const YoutubeAPI = async (url) => {
  const videoId = url.split("v=")[1];
  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // 영상제목, 채널제목, 썸네일, 재생시간
  let title, channelTitle, thumbnail, duration;

  // title, channelTitle, thumbnail
  await axios
    .get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        key: YOUTUBE_API_KEY,
        part: "snippet",
        id: videoId,
      },
    })
    .then((res) => {
      const data = res.data.items[0]["snippet"];
      console.log(data);
      title = data.title;
      channelTitle = data["channelTitle"];
      thumbnail = data["thumbnails"].medium.url;
      console.log("👍유튜브 영상제목, 채널이름, 썸네일 가져오기 성공");
    })
    .catch((err) => {
      console.log("🧨유튜브 영상제목, 채널이름, 썸네일 가져오기 실패", err);
    });

  // duration
  await axios
    .get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        key: YOUTUBE_API_KEY,
        part: "contentDetails",
        id: videoId,
      },
    })
    .then((res) => {
      let data = res.data.items[0]["contentDetails"].duration;
      data = data.slice(2);
      let hour;
      let min = "00";
      let sec = "00";
      if (data.includes("H")) hour = data.slice(0, data.indexOf("H"));
      if (data.includes("M")) {
        if (data.includes("H"))
          min = data.slice(data.indexOf("H") + 1, data.indexOf("M"));
        else min = data.slice(0, data.indexOf("M"));
      }
      if (data.includes("S")) {
        if (data.includes("M"))
          sec = data.slice(data.indexOf("M") + 1, data.indexOf("S"));
        else if (data.includes("H"))
          sec = data.slice(data.indexOf("H") + 1, data.indexOf("S"));
        else sec = data.slice(0, data.indexOf("S"));
      }

      if (data.includes("H")) duration = hour + ":" + min + ":" + sec;
      else duration = min + ":" + sec;
      console.log("👍유튜브 영상 재생시간 가져오기 성공");
    })
    .catch((err) => {
      console.log("🧨유튜브 영상 재생시간 가져오기 실패", err);
    });

  return [title, channelTitle, thumbnail, duration];
};

export default YoutubeAPI;

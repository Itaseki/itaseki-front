import Temp from "../Assets/Temp_gif.png";

export const NextVidTest = {
  reservationId: 3,
  videoId: 1,
  title: "정형돈 특집",
  runTime: "00:13:04",
  videoUrl: "",
  Long: 3,
  reservationDate: "2023-02-02",
  startTime: "11:45",
};

export const PopVidsTest = [
  { image: Temp, title: "런닝맨 유재석", length: "13:22", reservation: 3 },
  { title: "런닝맨 송지효", length: "13:22", reservation: 2 },
  { title: "런닝맨 김종국", length: "13:22", reservation: 1 },
];

export const TodayReservTest = [
  {
    reservationId: 3,
    videoId: 1,
    title: "테스트 영상 등록",
    reservationDate: "2022-05-27",
    startTime: "12:20",
    endTime: "12:40",
  },
  {
    reservationId: 3,
    videoId: 1,
    title: "정형돈 특집",
    reservationDate: "2022-05-27",
    startTime: "15:00",
    endTime: "15:30",
  },
];

export const TodayPopVidsTest = [
  {
    id: 1,
    title: "깡깡다섯",
    runTime: "00:23:09",
    videUrl: "https://youtu.be/6q7tRmW8JuY",
    count: 3,
    reservationDate: "2022-08-02",
    startTime: "15:00",
    endTime: "16:30",
    thumbnailUrl:
      "https://i.ytimg.com/vi/6q7tRmW8JuY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNIJ1YgO4bqBXgacOEs4QYiqfApQ",
  },
  {
    id: 2,
    title: "런닝맨전래동화",
    runTime: "00:29:59",
    videUrl: "",
    count: 2,
    reservationDate: "2022-08-02",
    startTime: "15:00",
    endTime: "16:00",
    thumbnailUrl: "",
  },
  {
    id: 3,
    title: "정형돈 특집",
    runTime: "00:13:14",
    videUrl: "",
    count: 1,
    reservationDate: "2022-08-02",
    startTime: "10:00",
    endTime: "10:20",
    thumbnailUrl: "",
  },
];

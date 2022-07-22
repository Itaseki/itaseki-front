import React from 'react';

const TimeStamp = (time) => {
  // 2022-07-07T20:43:24.223843
  let T = time.toString();
  console.log(T)

  const date = T.split('T')[0];  // 날짜
  const hm = T.split('T')[1];  // 시간
  console.log(date);
  const hour = hm.split(':')[0];
  const minute = hm.split(':')[1];

  return date + " " + hour + ":" + minute;
}

export default TimeStamp;
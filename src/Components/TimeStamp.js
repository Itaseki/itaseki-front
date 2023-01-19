import React from 'react';

export function timeStamp(dateAndTime) {

  // [2023, 1, 13, 20, 33, 12, 29979000]
  const date = dateAndTime[0] + "-" + dateAndTime[1] + "-" + dateAndTime[2];
  const time = dateAndTime[3] + ":" + dateAndTime[4];

  return date + " " + time;
}
import React, {useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import axios from "axios";
import Token from "../Components/Token";
import {preURL} from "../preURL/preURL";

function Store({children}) {
  const token = Token();

  const [user, setUser] = useState([]); // id, nickname, profileUrl

  // 사용자 정보 받아오기
  useEffect(() => {
    if (!token) return;
    axios
        .get( preURL + "/main/user", {
          headers: {
            ITTASEKKI: token,
          },
        })
        .then((res) => {
          console.log("👍헤더 사용자 프로필 이미지 가져오기 성공 ", res);
          setUser(res.data);
        })
        .catch((err) => {
          console.log("🧨헤더 사용자 프로필 이미지 가져오기 실패", err);
        });
  }, []);

  return (
      <UserContext.Provider value={[user, setUser]}>
        {children}
      </UserContext.Provider>
  )

}

export default Store;
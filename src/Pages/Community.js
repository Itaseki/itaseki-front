import React, {useEffect, useState} from 'react';
import preURL from "../preURL/preURL";
import axios from "axios";
import Post from "../Components/Post";
import {BestPosts, Posts} from "../Style/Community";

const Community = () => {

  const [bestPosts, setBestPosts] = useState([1,1]);
  useEffect(() => {
    axios.get(preURL.preURL + '/boards/community/best')
        .then(res => {
          setBestPosts(res.data);
        });
  }, []);

  const [posts, setPosts] = useState([1,1,1]);
  useEffect(() => {
    axios.get(preURL.preURL + `/boards/community?page=${0}&size=${10}&sort=${'id'},DESC&q=${'검색어'}`)
        . then(res => {
          setPosts(res.data);
        });
  }, []);

  return (
      <div>
        <div>
          <BestPosts>
            <h2>Best 잡담 게시글</h2>
            {bestPosts.map((bestPost) => {
              return <Post post={bestPost}/>
            })}
          </BestPosts>
          <div>
            <Posts>
              <h2>게시글 목록</h2>
              {posts.map((post) => {
                return <Post post={post}/>
              })}
            </Posts>
            <button>최신순</button>
            <button>좋아요순</button>
            <button>조회순</button>
            <p>페이지네이션</p>
          </div>
        </div>
      </div>
  )
}

export default Community;
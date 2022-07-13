import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
  return (
      <div>
        <h3>메인페이지</h3>
        <Link to="/community">잡담게시판</Link>
      </div>
  )
}

export default Main;
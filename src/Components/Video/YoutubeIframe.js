import React from "react";

const YoutubeIframe = ({url}) => {
  let str = url.split("v=")[1];
  const id = (str || '').split("&")[0];
  console.log(id);
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
      <iframe id={id} type="text/html" width="720" height="405"
              src={embedUrl}
              frameBorder="0" allowFullScreen/>
  )
};

export default YoutubeIframe;
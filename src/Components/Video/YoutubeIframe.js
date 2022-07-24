import React from "react";

const YoutubeIframe = ({url, width, height, style}) => {
  let str = url.split("v=")[1];
  const id = (str || '').split("&")[0];
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
      <iframe id={id} type="text/html" width={width} height={height} style={style}
              src={embedUrl}
              frameBorder="0" allowFullScreen/>
  )
};

export default YoutubeIframe;
import React from "react";

const YoutubeIframe = ({url}) => {
  const id = url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
      <iframe id={id} type="text/html" width="720" height="405"
              src={embedUrl}
              frameBorder="0" allowFullScreen/>
  )
};

export default YoutubeIframe;
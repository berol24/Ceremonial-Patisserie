import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function VideoPresentation() {
  return (
    <div>
      <Header />
      <div style={{ padding: "15px 30px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/0GuUHuJz2j0?si=hzfdRAIIQZF_QnHN&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default VideoPresentation;

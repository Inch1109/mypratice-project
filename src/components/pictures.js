import React from "react";

export default function Pictures({ data }) {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        下載圖片：
        <a target="_blank" href={data.src.large}>
          download
        </a>
      </p>
    </div>
  );
}

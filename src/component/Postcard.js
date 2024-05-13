import React from "react";

const Postcard = ({ imgSo, nameSo, desSo, likeSo }) => {
  return (
    <div
      style={{
        border: "2px solid grey",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        width: "260px",
        height: "350px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={imgSo}
          alt="Post Name"
          style={{
            width: "200px",
            height: "200px",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "255px",
          height: "118px",
        }}
      >
        <h2>{nameSo}</h2>
        <p>{desSo}</p>
        <h5>{likeSo + " Likes"}</h5>
        <button
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            backgroundColor: "blue",
            color: "white",
            padding: "5px 10px",
            fontSize: "15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default Postcard;

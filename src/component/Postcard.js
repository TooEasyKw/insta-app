import React from "react";

const Postcard = ({ imgSo, nameSo, desSo, likeSo }) => {
  return (
    <div
      style={{
        width: "225px",
        height: "310px",
        border: "1px solid grey",
        borderRadius: "5px",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <div
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "5px",
        }}
      >
        <img src={imgSo} />
      </div>

      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "12.5px",
          paddingRight: "12.5px",
        }}
      >
        <div style={{ height: "33%", fontWeight: "bold" }}>{nameSo}</div>
        <div style={{ height: "33%" }}>{desSo}</div>
        <div style={{ height: "33%", display: "flex" }}>
          <div
            style={{
              width: "50%",

              display: "flex",
              alignItems: "center",
            }}
          >
            {likeSo} Likes
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "5px 9px",
                fontSize: "12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postcard;

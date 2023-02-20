import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="bar">
      <nav className="navigation">
        <div className="asdf">
          <img
            className="instargramIcon"
            src="images/instagram.png"
            alt="none"
          />
          <div className="navTitle" style={{ fontFamily: "Lobster" }}>
            westagram
          </div>
        </div>
        <input type="text" placeholder="검색" />
        <div className="icon">
          <img
            style={{ width: "25px" }}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt=""
          />
          <img
            style={{ width: "25px" }}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
          <img
            style={{ width: "25px" }}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt=""
          />
        </div>
      </nav>
      <main className="mainPage">
        <div className="feeds">
          <section className="feed">
            <div style={{ width: "100%" }}>
              <artcle>
                <div className="writer">
                  <img
                    src="images/IMG_1211.JPG"
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <h5 style={{ marginLeft: "10px" }}>taehoon_hong</h5>
                </div>
                <img className="myPhoto" src="images/IMG_1278.jpeg" alt="" />
                <div className="commit">
                  <section className="react">
                    <i
                      className="fa-regular fa-heart"
                      style={{ margin: "2px" }}
                    ></i>
                    <i
                      className="fa-regular fa-message"
                      style={{ margin: "2px" }}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up-from-bracket"
                      style={{ margin: "2px" }}
                    ></i>
                  </section>
                  <section className="whoIsLike">
                    <span className="whoIsLike">여러명이 좋아합니다.</span>

                    <div className="add-comment"></div>

                    <div className="asdfa">
                      <input
                        style={{ border: "none", width: "100%" }}
                        type="text"
                        id="comment"
                        placeholder="댓글 달기..."
                      />
                      <button id="upload-comment">게시</button>
                    </div>
                  </section>
                </div>
              </artcle>
            </div>
          </section>
          <section className="main-right">
            <div className="writer">
              <img
                src="images/IMG_1211.JPG"
                alt=""
                style={{ borderRadius: "50%", width: "25px", height: "25px" }}
              />
              <h6 style={{ marginLeft: "10px" }}>taehoon_hong</h6>
            </div>
            <div className="story">
              <h6 style={{ margin: "5px", color: "#a2a2a2" }}>스토리</h6>
              <div className="story-list">
                <img
                  src="images/IMG_1211.JPG"
                  alt=""
                  style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                />
                <h6 className="story-owner">Hong</h6>
              </div>
              <div className="story-list">
                <img
                  src="images/IMG_1211.JPG"
                  alt=""
                  style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                />
                <h6 className="story-owner">HongTaeHoon</h6>
              </div>
              <div className="story-list">
                <img
                  src="images/IMG_1211.JPG"
                  alt=""
                  style={{ borderRadius: "50%", width: "25px", height: "25px" }}
                />
                <h6 className="story-owner">TaeHoon</h6>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Main;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdArrowDropright } from "react-icons/io";

function HomeCard({ content, reverse  }) {
  const isMobile = useSelector((state) => state.isMobile);
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div onClick={isMobile ? () => setIsCardOpen(!isCardOpen) : null}>
      {!isMobile && (
        <div
          className={
            reverse
              ? "row text-left mb-4 mt-4 Row-reverse"
              : "row text-left mb-4 mt-4"
          }
        >
          <div className="col-5">
            <img
              alt="pubbliufficio-spiralatura"
              className="img-fluid img-thumbnail rounded-circle Home-image"
              src={content.image}
            ></img>
          </div>
          <div
            className={
              isMobile
                ? isCardOpen
                  ? "col mobile"
                  : "col mobile title"
                : "col-7 Align-self-flex-end"
            }
          >
            <h3
              className={
                isMobile ? (isCardOpen ? "title-hidden" : "title") : ""
              }
              title='home-paragraph'
            >
              {content.title}
            </h3>
            <p
              className={
                isMobile ? (isCardOpen ? "card-open" : "card-closed") : ""
              }
            >
              {content.description}
            </p>
            {isMobile && (
              <div className="arrow">
                <span>
                  {" "}
                  <IoMdArrowDropright size={45} />
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      {isMobile && (
        <div
          className="Mobile-card-container container-fluid mt-4"
          style={{
            backgroundImage: `url('${content.image}')`,
          }}
        >
          <div className="mobile row">
            <div className={isCardOpen ? "col mobile" : "col mobile title"}>
              <h3 title='home-paragraph' className={isCardOpen ? "title-hidden" : "title"}>
                {content.title}
              </h3>
              <p className={isCardOpen ? "card-open" : "card-closed"}>
                {content.description}
              </p>
            </div>
          </div>
          <div className="arrow mobile row">
            <span>
              {" "}
              <IoMdArrowDropright size={45} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeCard;

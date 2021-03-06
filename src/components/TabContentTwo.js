import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMac from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>
            Watch TV shows and movies anytime, anywhere - personalized for you
          </span>
          <Button className="btn">try it now</Button>
        </div>
        {/*Tab button content */}
        <div className="tab-bottom-content">
          <div>
            <img src={ImgTv} alt="" />
            <h3>Wathc On Your Tv</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quod!
            </p>
          </div>
          <div>
            <img src={ImgTablet} alt="" />
            <h3>Wathc On Your Tablet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quod!
            </p>
          </div>
          <div>
            <img src={ImgMac} alt="" />
            <h3>Wathc On Your PC</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quod!
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

//Media
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "900px"
});

//Main Tab content Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  //Tab-top-content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan("smDesktop")`
      grid-template-columns: repeat(2,1fr);
    `}
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
      text-align: center;
      row-gap: 1.5rem;
    `}
  }

  span {
    grid-column: 1 / 8;
    font-size: 1.5rem;
    ${customMedia.lessThan("tablet")`
      grid-column: 1/-1;
      font-size: 1.5rem;
    `}
  }

  img {
    width: 100%;
    padding-bottom: 0.625rem;
  }

  .btn {
    grid-column: 10 / 12;
    margin: 0 1.25rem 1.25rem;
    ${customMedia.lessThan("tablet")`
      grid-column: 1/-1;
      margin-left:30%;
      margin-right: 30%;
    `}
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
    `}
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-grey);
  }
`;

import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

const FooterChoosePlan = () => {
  return (
    <div>
      <FooterContainer>
        <span style={{ marginLeft: "10%", color: "#999" }}>
          Questions?&nbsp; <a>Call 4546-45465-45</a>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <a>Gift Card Terms</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Term of Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Privacy Statement</a>
            </li>
          </ul>
        </div>
      </FooterContainer>
    </div>
  );
};

export default FooterChoosePlan;

const customMedia = generateMedia({
  tablet: "720px"
});

const FooterContainer = styled.footer`
  justify-content: center;

  background: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;
  color: #999;

  .footer-columns {
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
      grid-template-columns: repeat(2, 1fr);
    `}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }

  span {
    margin-left: 15%;
    font-size: 1.125rem;
  }

  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    margin-left: 10%;
    margin-top: 2rem;
    color: #999;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    cursor: pointer;
  }

  .lang-toggle {
    margin-left: 10%;
    position: absolute;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;

    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;

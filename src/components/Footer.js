import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <span>
          Questions? <Link>Call 4546-45465-45</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Invest</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Coorporate</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Invest</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Coorporate</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Invest</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Coorporate</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Invest</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Coorporate</Link>
            </li>
          </ul>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  span {
    margin-left: 15%;
    font-size: 1.125rem;
  }
`;

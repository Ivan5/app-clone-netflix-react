import React from "react";
import Img from "../images/tab-1-pic.png";
import styled from "styled-components";
import { Button } from "./Button";

export default function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <span style={{ marginBottom: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            voluptatum nulla ips
          </span>
          <br />
          <Button style={{ marginTop: "2rem" }}>try it now</Button>
          <img src={Img} alt="" />
        </div>
      </div>
    </TabContentContainer>
  );
}

//Main Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

  .container {
    margin: 0 10%;
  }

  img {
    width: 31.875rem;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
  }
`;

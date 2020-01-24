import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";

import "../css/TabsNav.css";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab
              style={{ listStyle: "none" }}
              className={`${
                this.state.tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <TabDoor />
              <p
                className="lgScreen"
                style={{ marginBottom: "1.875rem", marginTop: "0.4rem" }}
              >
                <strong>
                  No commitments <br /> Cancel online at time{" "}
                </strong>
              </p>
              <span className="mdScreen">Cancel</span>
            </Tab>
            <Tab
              style={{ listStyle: "none" }}
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <TabDevices />
              <p className="lgScreen" style={{ marginTop: "-5.3125rem" }}>
                Watch anywhere
              </p>
              <span className="mdScreen">Devices</span>
            </Tab>
            <Tab
              style={{ listStyle: "none" }}
              className={`${
                this.state.tabIndex === 2 ? "tab-selected active" : null
              }`}
            >
              <TabPrices />
              <p className="lgScreen" style={{ marginTop: "0.4rem" }}>
                <strong>Pick your price</strong>{" "}
              </p>
              <span className="mdScreen">Price</span>
            </Tab>
          </TabList>
          {/*Tabs content */}
          <TabPanel>
            <TabContentOne></TabContentOne>
          </TabPanel>
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          <TabPanel>
            <TabContentThree />
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

export default TabComponent;

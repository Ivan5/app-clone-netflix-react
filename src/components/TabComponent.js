import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";

import "../css/TabsNav.css";
import TabContentOne from "./TabContentOne";

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
              <p style={{ marginBottom: "1.875rem" }}>
                <strong>
                  No commitments <br /> Cancel online at time{" "}
                </strong>
              </p>
            </Tab>
            <Tab
              style={{ listStyle: "none" }}
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <TabDevices />
              <p style={{ marginTop: "-5.3125rem" }}>Watch anywhere</p>
            </Tab>
            <Tab
              style={{ listStyle: "none" }}
              className={`${
                this.state.tabIndex === 2 ? "tab-selected active" : null
              }`}
            >
              <TabPrices />
              <p>
                <strong>Pick your price</strong>{" "}
              </p>
            </Tab>
          </TabList>
          {/*Tabs content */}
          <TabPanel>
            <TabContentOne></TabContentOne>
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

export default TabComponent;

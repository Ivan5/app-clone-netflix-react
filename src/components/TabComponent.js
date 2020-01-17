import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";

import "../css/TabsNav.css";

class TabComponent extends Component {
  render() {
    return (
      <>
        <Tabs>
          <TabList>
            <Tab style={{ listStyle: "none" }}>
              <TabDoor />
              <p>
                <strong>
                  No commitments <br /> Cancel online at time{" "}
                </strong>
              </p>
            </Tab>
            <Tab style={{ listStyle: "none" }}>
              <TabDevices />
              <p>Watch anywhere</p>
            </Tab>
            <Tab style={{ listStyle: "none" }}>
              <TabPrices />
              <p>
                <strong>Pick your price</strong>{" "}
              </p>
            </Tab>
          </TabList>
        </Tabs>
      </>
    );
  }
}

export default TabComponent;

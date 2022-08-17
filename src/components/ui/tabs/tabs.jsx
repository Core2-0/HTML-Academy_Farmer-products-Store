import React, { useState } from "react";
import { Li } from "../../styled";
import { TabButton, TitleList } from "./styles";
import TabsItem from "./tabs-item";

function Tabs({ products, tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <Li key={tab.title}>
                  <TabButton active>{tab.title}</TabButton>
                </Li>
              );
            }
            return (
              <Li key={tab.title}>
                <TabButton onClick={() => setActiveTab(index)}>{tab.title}</TabButton>
              </Li>
            );
          })}
      </TitleList>
      <TabsItem
        products={products}
        tabs={tabs}
        activeTab={activeTab}
      />
    </>
  );
}

export default Tabs;

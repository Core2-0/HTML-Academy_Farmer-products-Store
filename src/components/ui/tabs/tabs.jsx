import React, { useState } from "react";
import { Price, TabButton, TabContent, TabText, TitleList } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContent>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <TabButton active key={tab.title}>{tab.title}</TabButton>
              );
            }
            return (
              <TabButton key={tab.title} onClick={() => setActiveTab(index)}>{tab.title}</TabButton>
            );
          })}
      </TitleList>
        <TabText>{tabs[activeTab].text}</TabText>
        {tabs[activeTab].price ? <Price>{tabs[activeTab].price}</Price> : null}
    </TabContent>
  );
}

export default Tabs;

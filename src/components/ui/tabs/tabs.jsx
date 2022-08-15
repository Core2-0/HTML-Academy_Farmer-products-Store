import React, { useState } from "react";
import { Dl, Li } from "../../styled";
import { Price, Specifications, StyledDd, StyledDt, TabButton, TabsWrapper, TabContent, TabText, TitleList } from "./styles";

function Tabs({ tabs }) {
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

      <TabContent>
        {Array.isArray(tabs[activeTab].specifications) ? (
          <Dl>
            {tabs[activeTab].specifications.map((specification, index) => (
              <Specifications key={index}>
                <StyledDt>{specification.property}:&nbsp;</StyledDt>
                <StyledDd>{specification.value}</StyledDd>
              </Specifications>
            ))}
          </Dl>
        ) : (
          <TabText>{tabs[activeTab].specifications}</TabText>
        )}
      </TabContent>
      {tabs[activeTab].price && tabs[activeTab].weight ?
        <Price>
          {tabs[activeTab].price}{" руб. / "}
          {tabs[activeTab].weight}{" г."}
        </Price>
        : null}
    </>
  );
}

export default Tabs;

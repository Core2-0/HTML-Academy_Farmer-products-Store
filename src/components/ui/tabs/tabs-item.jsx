import React from "react";
import { Price, Specifications, StyledDd, StyledDt, TabContent, TabText } from "./styles";
import { Dl } from "../../styled";

function TabsItem({ products, tabs, activeTab }) {
  
  return (
    <>
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
    {tabs[activeTab] === tabs[0] ?
      <Price>
        {products.price}{" руб. / "}
        {products.weight}{" г."}
      </Price>
      : null}
  </>
  );
}

export default TabsItem;

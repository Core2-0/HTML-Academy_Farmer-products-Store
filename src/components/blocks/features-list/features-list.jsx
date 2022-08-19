import React from "react";
import FeatureItem from "../../ui/features-item/feature-item";
import Button from "../../ui/button/button";
import { StyledSection, StyledTitle, FeaturesListWrapper, ListItem } from "./styles";
import { Ul } from "../../styled/"

function FeaturesList({ features }) {
  
  return features && features.length ? (
    <StyledSection>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <FeaturesListWrapper>
        <Ul>
          {features.map((feature) => (
            (!feature.isNegative ? (
              <ListItem key={feature.id}>
                <FeatureItem {...feature} />
              </ListItem>
            ) : null)
          ))}
        </Ul>
        <Ul>
          {features.map((feature) => (
            (feature.isNegative ? (
              <ListItem key={feature.id}>
                <FeatureItem {...feature} />
              </ListItem>
            ) : null)
          ))}
        </Ul>
      </FeaturesListWrapper>
      <Button minWidth={260} link="/order">Купить</Button>
    </StyledSection >
  ) : null
}

export default FeaturesList;

import styled from "styled-components";
import { Section, Li } from "../../styled/";
import Title from "../../ui/title/title";

export const StyledSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
`;

export const FeaturesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin-bottom: 64px;
`;

export const ListItem = styled(Li)`
  margin-bottom: 20px;

  &:last-child {
    margin: 0;
  }
`;

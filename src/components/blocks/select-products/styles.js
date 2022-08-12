import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledArticle = styled.article`
  background-color: ${(props) => props.theme.white_50};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
              0px 2px 6px rgba(0, 0, 0, 0.04),
              0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 25px 20px;
`;

export const StyledTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 12px;
`;

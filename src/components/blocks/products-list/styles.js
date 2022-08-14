import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSection = styled.section`
  grid-row: 1 / -1;
  grid-column: 2 / 2;
`;

export const StyledSwiper = styled(Swiper)`
  width: 727px;
  max-height: 100%;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

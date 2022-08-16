import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Scrollbar, FreeMode } from "swiper/core";
import "swiper/css";
import "swiper/css/scrollbar";
import ProductCard from "../../ui/product-card/product-card";
import { StyledSection, StyledSwiper } from "./styles";

function ProductsList({ products, onSwiper }) {
  SwiperCore.use([Mousewheel, Scrollbar, FreeMode])

  return (
    <StyledSection>
      <StyledSwiper
        onSwiper={onSwiper}
        autoHeight
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        watchOverflow
        freeMode
        simulateTouch={false}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
            products={product}
            tabs={product.tabs}
          />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSection>
  );
}

export default ProductsList;

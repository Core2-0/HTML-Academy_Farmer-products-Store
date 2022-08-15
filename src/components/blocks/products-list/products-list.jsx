import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Scrollbar } from "swiper/core";
import "swiper/css";
import "swiper/css/scrollbar";
import ProductCard from "../../ui/product-card/product-card";
import { StyledSection, StyledSwiper } from "./styles";

function ProductsList({ products }) {
  SwiperCore.use([Mousewheel, Scrollbar])

  return (
    <StyledSection>
      <StyledSwiper
        autoHeight
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        allowTouchMove={false}
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

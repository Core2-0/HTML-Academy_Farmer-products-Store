import React, { useState } from "react";
import OrderForm from "../../blocks/order-form/order-form";
import SelectProducts from "../../blocks/select-products/select-products";
import ProductsList from "../../blocks/products-list/products-list";
import { StyledSection } from "./styles";

export default function OrderPage({ products }) {
  const [selectProduct, setSelectProduct] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleOnClickProduct = (value, index) => {
    if (!selectProduct.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProductsList = selectProduct.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProductsList.reduce((sum, product) => sum + Number(product.tabs[0].price), 0);

  return (
    <StyledSection>
      <SelectProducts
        name={"select-products"}
        options={products.map((product) => ({
          value: product.id,
          title: product.title,
        }))}
        selectValues={selectProduct}
        onChange={setSelectProduct}
        onClickLabel={handleOnClickProduct}
      />
      <OrderForm value={fullPrice} />
      <ProductsList products={products} onSwiper={setSwiperRef} />
    </StyledSection>
  );
}

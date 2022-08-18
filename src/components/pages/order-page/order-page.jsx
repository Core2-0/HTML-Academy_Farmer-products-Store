import React, { useState } from "react";
import OrderForm from "../../blocks/order-form/order-form";
import SelectProducts from "../../blocks/select-products/select-products";
import ProductsList from "../../blocks/products-list/products-list";
import { StyledForm } from "./styles";
import BuyPopup from "../../blocks/buy-popup/buy-popup";
import Button from "../../ui/button/button";

export default function OrderPage({ products }) {
  const [selectProduct, setSelectProduct] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [address, setAddress] = useState("");
  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleOnClickProduct = (value, index) => {
    if (!selectProduct.includes(value) && !isShowPopup) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProductsList = selectProduct.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProductsList.reduce((sum, product) => sum + Number(product.price), 0);


  return products && products.length ? (
    <StyledForm>
      <SelectProducts
        name={"select-products"}
        options={products.map((product) => ({
          value: product.id,
          title: product.title,
        }))}
        selectValues={selectProduct}
        onChange={setSelectProduct}
        onClickLabel={handleOnClickProduct}
        disInput={isShowPopup}
      />
      <OrderForm
        value={fullPrice}
        address={address}
        onChange={(e) => setAddress(e.target.value)}
        onClick={() => setIsShowPopup(true)}
        disInput={isShowPopup ? true : false}
        isSelectProducts={selectProduct}
      />
      <ProductsList products={products} onSwiper={setSwiperRef} />
      <BuyPopup
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        price={fullPrice}
        address={address}
        selectProducts={selectProductsList}
      />
    </StyledForm>
  ) : <div>
    <h2>Продукты были слишком вкусные и их разобрали</h2>
    <Button link="/">Вернутся на главную</Button>
  </div>
}

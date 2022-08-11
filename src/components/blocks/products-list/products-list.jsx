import React from "react";
import ProductCard from "../../ui/product-card/product-card";

function ProductsList({ products }) {
  return (
    <section>
      <ProductCard products={products} />
    </section>
  );
}

export default ProductsList;

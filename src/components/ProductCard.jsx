import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCardBox">
      <img src={item?.img} alt="상품 이미지" />

      <div className="productInfo">
        <div className="productStatus">
          <div className="productMD">
            {item?.choice == true ? "Md Choice" : null}
          </div>
          <div className="productNew">
            {item?.new == true ? "신제품" : null}
          </div>
        </div>
        <div className="productTitle">{item?.title}</div>
        <div className="productPrice">\{item?.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="ProductCardBox" onClick={showDetail}>
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
        <div className="productPrice">&#8361; {item?.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

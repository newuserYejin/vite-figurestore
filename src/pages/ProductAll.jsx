import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    // let url = `http://localhost:4000/products`;
    let url = `https://my-json-server.typicode.com/newuserYejin/vite-figurestore/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("상품 데이터 data : ", data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} sm={6} xs={12}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;

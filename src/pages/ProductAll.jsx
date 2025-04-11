import React, { useEffect, useState } from "react";
import { Col, Container, Placeholder, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q");
    // let url = `http://localhost:4000/products`;
    setLoading(true);

    let url;

    if (searchQuery) {
      url = `https://my-json-server.typicode.com/newuserYejin/vite-figurestore/products?q=${searchQuery}`;
    } else {
      url = `https://my-json-server.typicode.com/newuserYejin/vite-figurestore/products`;
    }

    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        {loading ? (
          <Row>
            {[...Array(7)].map((_, idx) => (
              <Col lg={3} sm={6} xs={12} key={idx}>
                <Placeholder animation="glow">
                  <Placeholder className="placeHolderBox" xs={12} />
                </Placeholder>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            {productList.map((item) => (
              <Col lg={3} sm={6} xs={12}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;

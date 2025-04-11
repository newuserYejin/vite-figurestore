import React, { useEffect, useState } from "react";
import { Col, Container, Placeholder, Row } from "react-bootstrap";
import { data, useParams, useSearchParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const getDetailData = async () => {
    const url = `https://my-json-server.typicode.com/newuserYejin/vite-figurestore/products/${id}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log("상세 데이터 : ", data);
    setDetailData(data);
    setLoading(false);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <Container>
      <Row className="productDetailBox">
        {loading ? (
          <>
            <Col l md={6} xs={12}>
              <Placeholder animation="glow">
                <Placeholder className="placeHolderBox" xs={12} />
              </Placeholder>
            </Col>
            <Col l md={5} xs={12} className="loadingInfo">
              <Placeholder animation="glow">
                <Placeholder className="placeHolderBox" xs={12} />
              </Placeholder>
            </Col>
          </>
        ) : (
          <>
            <Col md={6} xs={12} className="detailImg">
              <img src={detailData?.img} alt="상품 이미지" />
            </Col>
            <Col md={5} xs={12} className="productDetailInfoBox">
              <Row className="productStatus">
                <Col
                  xs={6}
                  className="productNew"
                  style={{ display: detailData?.new ? "block" : "none" }}
                >
                  {detailData?.new ? "신제품" : null}
                </Col>
                <Col
                  xs={6}
                  className="productMD"
                  style={{ display: detailData?.choice ? "block" : "none" }}
                >
                  {detailData?.choice ? "Md choice" : null}
                </Col>
              </Row>
              <Row>
                <Col className="productTitle">{detailData?.title}</Col>
              </Row>
              <Row>
                <Col className="productPrice">&#8361; {detailData?.price}</Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="option">선택 : </label>
                  <select name="option" id="option">
                    {detailData?.option.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </Col>
              </Row>

              <Row>
                <Col xs={6} className="productAddBtn">
                  <button>추가하기</button>
                </Col>
              </Row>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ProductDetail;

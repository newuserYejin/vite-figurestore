import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = ({ setAuth }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const authLogin = (event) => {
    event.preventDefault();
    console.log("로그인 시도");
    console.log("id : ", id);
    console.log("pw : ", pw);
    if (id.trim() != "" && pw.trim() != "") {
      setError(false);
      setAuth((prev) => !prev);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <Container className="loginContainer">
      <Row className="justify-content-center loginRow">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={authLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <div
              className="nullInput"
              style={{ display: error == false ? "none" : "flex" }}
            >
              아이디를 확인해주세요.
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </Form.Group>
            <div
              className="nullInput"
              style={{ display: error == false ? "none" : "flex" }}
            >
              비밀번호를 확인해주세요.
            </div>

            <Button type="submit" className="w-100">
              로그인
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

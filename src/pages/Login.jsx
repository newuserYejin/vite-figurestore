import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = ({ setAuth }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const authLogin = (event) => {
    event.preventDefault();
    console.log("로그인 시도");
    console.log("id : ", id);
    console.log("pw : ", pw);
    if (id.trim() != "" && pw.trim() != "") {
      setAuth((prev) => !prev);
      navigate("/");
    }
  };

  return (
    <Container>
      <Form onSubmit={(event) => authLogin(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={id}
            onChange={(e) => {
              console.log("id e : ", e.target.value);
              setId(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            value={pw}
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          />
        </Form.Group>

        <Button variant="info" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

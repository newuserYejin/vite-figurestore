import "./App.css";
import { Routes, Route } from "react-router";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 페이지 3개 (전체 상품, 로그인, 상세 상품페이지)
// 네비게이션 바 만들기
// 전체 상품 페이지에서는 상품 전체를 볼 수 있다.
// 로그인 버튼 누르면 로그인 페이지
// 상품 디테일을 누르지만 로그인이되어 있지 않으면 로그인 페이지
// 로그인이 되어 있다면 상품 디테일 페이지를 볼 수 있다
// 로그아웃을 누르면 로그아웃이 된다.
// 로그아웃이 되면 상품 디테일 페이지 접근 불가
// 로그인하면 로그아웃으로 출력
// 검색가능

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    console.log("현재의 로그인 상태 : ", auth);
  }, [auth]);

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />

        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </div>
  );
}

export default App;

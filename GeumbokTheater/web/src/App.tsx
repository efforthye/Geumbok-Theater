import { Route, Routes } from "react-router-dom";

import "./App.css";
import RegistContainer from "./components/Regist/Container";
import LogInContainer from "./components/LogIn/Container";
import AdminContainer from "./components/Admin/Container";
import MyPageContainer from "./components/Mypage/Container";
import DetailMovie from "./components/Pages/DetailMovie";
import BoxOfficeContainer from "./components/boxOffice/Container";
import Header from "./components/Header/Containers";
import MainPage from "./components/MainPage";
import MainFooterContainer from "./components/Footer/Containers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/regist" element={<RegistContainer />} />
        <Route path="/login" element={<LogInContainer />} />
        <Route path="/admin/:sub" element={<AdminContainer />} />
        <Route path="/admin/*" element={<AdminContainer />} />
        <Route path="/mypage/:sub" element={<MyPageContainer />} />
        <Route path="/mypage/*" element={<MyPageContainer />} />
        <Route path="/detail/*" element={<DetailMovie />} />
        <Route path="/boxOffice/*" element={<BoxOfficeContainer />} />
      </Routes>
      <MainFooterContainer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import "./App.css";
import RegistContainer from "./components/Regist/Container";
import LogInContainer from "./components/LogIn/Container";
import AdminContainer from "./components/Admin/Container";
import MyPageContainer from "./components/Mypage/Container";
import DetailMovie from "./components/Pages/DetailMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/regist" element={<RegistContainer />} />
        <Route path="/login" element={<LogInContainer />} />
        <Route path="/admin/:sub" element={<AdminContainer />} />
        <Route path="/admin/*" element={<AdminContainer />} />
        <Route path="/mypage/:sub" element={<MyPageContainer />} />
        <Route path="/mypage/*" element={<MyPageContainer />} />
        <Route path="/detail/*" element={<DetailMovie />} />
      </Routes>
    </>
  );
}

export default App;

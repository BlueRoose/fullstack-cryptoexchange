import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CurrencyPage from "../pages/CurrencyPage/CurrencyPage";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/currency/:id" element={<CurrencyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

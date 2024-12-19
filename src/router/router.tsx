import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/page";
import PagesLayout from "../layouts/pages-layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

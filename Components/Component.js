import Main from "./Main/Main";
import BudgetTool from "./BudgetTool/BudgetTool";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<BudgetTool />} />
      </Routes>
      <Footer />
    </Router>
  );
}

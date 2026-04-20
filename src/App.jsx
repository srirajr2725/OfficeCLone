import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";
import CheckDictionary from "./pages/CheckDictionary";
import WordleSolver from "./pages/WordleSolver";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:letters" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/check-dictionary" element={<CheckDictionary />} />
          <Route path="/wordle-solver" element={<WordleSolver />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import WordDetail from "./components/word/WordDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word" element={<WordDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comic from "./pages/Comic";
import Novel from "./pages/Novel";
import Essay from "./pages/Essay";
import Education from "./pages/Education";
import MyPage from "./pages/MyPage";
import SearchResult from "./pages/SearchResult";
import "./App.css";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/novel" element={<Novel />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/edu" element={<Education />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/searchRes" element={<SearchResult />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

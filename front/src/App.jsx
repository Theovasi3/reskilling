import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SinglePostPage from "./pages/SinglePostPage";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Homepage />} />
            <Route path="/posts/:id" element={<SinglePostPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

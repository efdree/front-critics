import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewGame from "./pages/NewGame";

function App() {
  return (
    <div style={{ background: "#f2f2f2" }}>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/newGame" element={<NewGame />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

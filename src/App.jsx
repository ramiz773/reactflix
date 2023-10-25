import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieInfo from "./pages/MovieInfo";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

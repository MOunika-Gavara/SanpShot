import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import MoviesImages from "./components/MoviesImages";
import AnimatedImages from "./components/AnimatedImages";
import DogImages from "./components/DogImages";
import GotImages from "./components/GotImages";
import './App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/anime" element={<AnimatedImages />}></Route>
          <Route exact path="/dog" element={<DogImages />}></Route>
          <Route exact path="/movies" element={<MoviesImages />}></Route>
          <Route exact path="/gameofthrones" element={<GotImages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

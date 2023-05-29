import "./App.scss"
import { MycontextProvider } from "./contextApi/Apicontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TheatreDetail from "./components/theatre/TheatreDetail";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <MycontextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/theatre-detail/:theatrename" element={<TheatreDetail />} />
            </Routes>
          </BrowserRouter>
        </MycontextProvider>
      </div>
    </div>
  );
}

export default App;

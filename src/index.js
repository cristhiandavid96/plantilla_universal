import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
// import your route components too
//components
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Settings from './components/Settings'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      {/* <Route path="/" element={<Navbar />}> */}
        <Route index element={<Home />} />
        <Route path="about" exact element={<About />} />
        <Route path="settings" exact element={<Settings />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);





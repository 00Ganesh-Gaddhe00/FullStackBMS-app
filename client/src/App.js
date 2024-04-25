import {BrowserRouter, Routes, Route} from "react-router-dom"



//pages
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

//styles
import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
    </BrowserRouter>
    // <div>
    //   <Home/>
    //   <Login/>
    //   <Register/>

    // </div>
  );
}

export default App;

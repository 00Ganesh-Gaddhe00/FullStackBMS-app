import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useSelector} from "react-redux"

//pages
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
//styles
import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";

//componentgs
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const {loading} = useSelector((state)=>state.loaders);
  return (
    <div>
      {loading && (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      )}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/admin" element={ <ProtectedRoute><Admin/></ProtectedRoute>} />
      <Route path="/profile" element={ <ProtectedRoute><Profile/></ProtectedRoute>} />


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

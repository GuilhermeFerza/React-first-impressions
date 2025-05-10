import "./css/index.scss";
import Home from "./pages/LogedOff/Home.jsx";
import SignUp from "./pages/LogedOff/SignUp.jsx";
import SignIn from "./pages/LogedOff/SignIn.jsx";
import UserName from "./pages/LogedOff/UserName.jsx";
import Index from "./pages/Loged/index.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/username" element={<UserName />} />
        <Route path="/loged" element={<Index />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;

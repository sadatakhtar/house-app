import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explorer from "./pages/Explorer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Explorer />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/profile" element={<SignIn />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <NavBar />
      </Router>
    </>
  );
}

export default App;

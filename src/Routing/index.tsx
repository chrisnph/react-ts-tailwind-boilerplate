import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "context/AuthContext/AuthProvider";
import LayoutContainer from "components/Layouts/LayoutContainer";
import Home from "pages/Home";
import Login from "pages/Login";

const Routing = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <Router>
      <LayoutContainer centered={!isLoggedIn} navBar={isLoggedIn}>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </LayoutContainer>
    </Router>
  );
};

export default Routing;

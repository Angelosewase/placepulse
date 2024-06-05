import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Reset from "./app/auth/reset";
import Verify from "./app/auth/verify";
import Signup from "./app/auth/register";
import Forgot from "./app/auth/forgot";
import Login from "./app/auth/login";
import NotFoundPage from "./app/404";
import WebLayout from "./app/website/layout";
import Places from "./components/website/Places";
import Home from "./components/website/Home";
import AboutUs from "./components/website/About";
import Contact from "./components/website/Contact";
import Services from "./components/website/Services";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          {/* Landing Routes */}
          <Route
            path="/"
            element={
              <WebLayout>
                <Home />
              </WebLayout>
            }
          />
          <Route
            path="/about"
            element={
              <WebLayout>
                <AboutUs />
              </WebLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <WebLayout>
                <Contact />
              </WebLayout>
            }
          />
          <Route
            path="/services"
            element={
              <WebLayout>
                <Services />
              </WebLayout>
            }
          />
          <Route
            path="/places"
            element={
              <WebLayout>
                <Places />
              </WebLayout>
            }
          />
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Signup />} />
          <Route path="/auth/verify" element={<Verify />} />
          <Route path="/auth/reset" element={<Reset />} />
          <Route path="/auth/forgot" element={<Forgot />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

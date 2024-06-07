import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Lazy load components
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
import PrivacyPolicy from "./components/website/Privacy";
import TermsAndConditions from "./components/website/Terms";
import PageLoader from "./components/loaders/pageLoader";
import ViewAccommodation from "./components/website/ViewAccommodation";
import BookingPage from "./components/website/Booking";
import PlaceGallery from "./components/website/PlaceGallery";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
            <Route
              path="/places/:id"
              element={
                <WebLayout>
                  <ViewAccommodation />
                </WebLayout>
              }
            />
            <Route
              path="/booking/place/:id"
              element={
                <WebLayout>
                  <BookingPage />
                </WebLayout>
              }
            />
            <Route
              path="/places/:id/photos"
              element={
                <WebLayout>
                  <PlaceGallery />
                </WebLayout>
              }
            />
            <Route path="/public/terms" element={<TermsAndConditions />} />
            <Route path="/public/privacy" element={<PrivacyPolicy />} />
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Signup />} />
            <Route path="/auth/verify" element={<Verify />} />
            <Route path="/auth/reset" element={<Reset />} />
            <Route path="/auth/forgot" element={<Forgot />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

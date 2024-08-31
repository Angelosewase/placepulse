/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Lazy load components
const Reset = lazy(() => import("./app/auth/reset"));
const Verify = lazy(() => import("./app/auth/verify"));
const Signup = lazy(() => import("./app/auth/register"));
const Forgot = lazy(() => import("./app/auth/forgot"));
const Login = lazy(() => import("./app/auth/login"));
const Places = lazy(() => import("./components/website/Places"));
const Home = lazy(() => import("./components/website/Home"));
const AboutUs = lazy(() => import("./components/website/About"));
const Contact = lazy(() => import("./components/website/Contact"));
const Services = lazy(() => import("./components/website/Services"));
const PrivacyPolicy = lazy(() => import("./components/website/Privacy"));
const TermsAndConditions = lazy(() => import("./components/website/Terms"));
const PlaceGallery = lazy(() => import("./components/website/PlaceGallery"));
const ViewAccommodation = lazy(
  () => import("./components/website/ViewAccommodation"),
);
const NotFoundPage = lazy(() => import("./app/404"));
const UserLayout = lazy(() => import("./app/_client/user/UserLayout"));
const CheckoutPage = lazy(() => import("./app/website/CheckoutPage"));
const NotificationsPage = lazy(() => import("./app/shared/Notifications"));
const InfoLayout = lazy(() => import("./app/_client/user/Info/InfoLayout"));
const UserLanding = lazy(() => import("./app/_client/user/Landing"));
const BookingPage = lazy(() => import("./components/website/Booking"));
import PageLoader from "./components/loaders/pageLoader";
import WebLayout from "./app/website/layout";
import AccountInfo from "./app/_client/user/Info/Account";
import PaymentMethods from "./app/_client/user/Info/PayMethods";
import History from "./app/_client/user/Info/BookingsHistory";
import OwnerLayout from "./app/_client/owner/OwnerLayout";
import OwnerHome from "./app/_client/owner/Home";
import OwnerAccommodations from "./app/_client/owner/Accommodations";
import OwnerAddAccommodations from "./app/_client/owner/AddAccommodation";
import ViewOwnerAccommodation from "./app/_client/owner/ViewOwnerAccommodation";
import OwnerAccountInfo from "./app/_client/owner/Info/Account";
import OwnerBookings from "./app/_client/owner/OwnerBookings";
import OwnerNotificationsPage from "./app/_client/owner/Notifications";
import UserLandingLayout from "./app/_client/user/LandingLayout";
import LandingPlaces from "./app/_client/user/LandingPlaces";
import BookingSuccess from "./components/website/BookingSuccess";
import {
  getAccommodations,
  getAllOwners,
  getNotifications,
  getUserBookings,
} from "./utils/funcs";
import { useDispatch } from "react-redux";
import AdminLayout from "./app/_client/admin/OwnerLayout";
import AdminHome from "./app/_client/admin/Home";
import AdminAccommodations from "./app/_client/admin/Accommodations";
import ViewAdminAccommodation from "./app/_client/admin/ViewOwnerAccommodation";
import AdminBookings from "./app/_client/admin/OwnerBookings";
import AdminNotificationsPage from "./app/_client/admin/Notifications";
import AdminAccountInfo from "./app/_client/admin/Info/Account";
import AccommodationOwnersPage from "./app/_client/admin/Owners";
import AdminAddAccommodations from "./app/_client/admin/AddAccommodation";
// import socketIO from "socket.io-client";
// const socket = socketIO.connect("http://localhost:5454");
function App() {
  // socket.on
  const dispatch = useDispatch();
  useEffect(() => {
    getAccommodations({ dispatch });
    getUserBookings({ dispatch });
    getAllOwners({ dispatch });
    getNotifications({ dispatch });
  }, [dispatch]);
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
              path="/booking/place/:id/checkout"
              element={
                <WebLayout>
                  <CheckoutPage />
                </WebLayout>
              }
            />
            <Route
              path="/booking/place/success"
              element={
                <WebLayout>
                  <BookingSuccess />
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
            <Route
              path="/auth/register/verify"
              element={<Verify route="login" />}
            />
            <Route path="/auth/reset" element={<Reset />} />
            <Route path="/auth/forgot" element={<Forgot />} />
            <Route
              path="/auth/forgot/verify"
              element={<Verify route="reset" />}
            />
            {/* End Auth Routes */}
            {/* User Routes */}
            <Route
              path="/_client/home"
              element={<UserLayout children={<UserLanding />} />}
            />
            <Route
              path="/_client/home/find/"
              element={
                <UserLayout
                  children={
                    <UserLandingLayout>
                      <LandingPlaces />
                    </UserLandingLayout>
                  }
                />
              }
            />
            <Route
              path="/_client/home/find/:type"
              element={
                <UserLayout
                  children={
                    <UserLandingLayout>
                      <LandingPlaces />
                    </UserLandingLayout>
                  }
                />
              }
            />
            <Route
              path="/_client/notifications"
              element={<UserLayout children={<NotificationsPage />} />}
            />
            <Route
              path="/_client/info/account"
              element={
                <UserLayout
                  children={<InfoLayout children={<AccountInfo />} />}
                />
              }
            />
            <Route
              path="/_client/info/Bookings"
              element={
                <UserLayout children={<InfoLayout children={<History />} />} />
              }
            />
            <Route
              path="/_client/info/Payment Methods"
              element={
                <UserLayout
                  children={<InfoLayout children={<PaymentMethods />} />}
                />
              }
            />
            {/* End User Routes */}

            {/* Owner Routes */}
            <Route
              path="/_owner/home"
              element={<OwnerLayout children={<OwnerHome />} />}
            />
            <Route
              path="/_owner/accommodations/view"
              element={<OwnerLayout children={<OwnerAccommodations />} />}
            />
            <Route
              path="/_owner/accommodations/view/:id"
              element={<OwnerLayout children={<ViewOwnerAccommodation />} />}
            />
            <Route
              path="/_owner/accommodations/add"
              element={<OwnerLayout children={<OwnerAddAccommodations />} />}
            />
            <Route
              path="/_owner/bookings"
              element={<OwnerLayout children={<OwnerBookings />} />}
            />
            <Route
              path="/_owner/notifications"
              element={<OwnerLayout children={<OwnerNotificationsPage />} />}
            />
            <Route
              path="/_owner/account"
              element={<OwnerLayout children={<OwnerAccountInfo />} />}
            />

            {/* Owner Routes */}

            {/* Admin Routes */}
            <Route
              path="/_admin/home"
              element={<AdminLayout children={<AdminHome />} />}
            />
            <Route
              path="/_admin/owners"
              element={<AdminLayout children={<AccommodationOwnersPage />} />}
            />
            <Route
              path="/_admin/accommodations/view"
              element={<AdminLayout children={<AdminAccommodations />} />}
            />
            <Route
              path="/_admin/accommodations/view/:id"
              element={<AdminLayout children={<ViewAdminAccommodation />} />}
            />
            <Route
              path="/_admin/accommodations/add"
              element={<AdminLayout children={<AdminAddAccommodations />} />}
            />
            <Route
              path="/_admin/bookings"
              element={<AdminLayout children={<AdminBookings />} />}
            />
            <Route
              path="/_admin/notifications"
              element={<AdminLayout children={<AdminNotificationsPage />} />}
            />
            <Route
              path="/_admin/account"
              element={<AdminLayout children={<AdminAccountInfo />} />}
            />

            {/* Admin Routes */}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

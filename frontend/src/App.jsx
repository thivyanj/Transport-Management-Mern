import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./User/AuthContext"; // Import the hook

import Home from "./Pages/Home";
import { BrowserRouter } from 'react-router-dom';
import Transport from "./Feature/Transport/Basic/Transport";
import Header from "./components/header";
import ExpressRide from "./Feature/Transport/Express/ExpressRide";
import Signup from "./User/Signup";
import Login from "./User/Login";
import SeatBooking from "./Feature/Transport/Express/SeatBooking";
import TransportDashboard from "./Feature/Transport/Dashboard/Dashboard";
import SeatBook from "./Feature/Transport/Dashboard/SeatBook";
import AboutUsSection from "./components/AboutUs"


function App() {
  const { isAuthenticated } = useAuth(); // Access the authentication state
  const location = useLocation(); // Access the current route

  const hideHeaderRoutes = [
    "/login",
    "/signup",
    "/transport-admin-seatbook/:travelId",
  ];

  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":travelId", "")),
  );

  return (
    <>
   
      {!shouldHideHeader && (
        <div className="fixed top-0 left-0 w-full shadow-lg z-50">
          <Header />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/express-ride" element={<ExpressRide />} />
        <Route path="/about-us" element={<AboutUsSection />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/transport/express-ride/seat-booking"
          element={<SeatBooking />}
        />
        <Route
          path="/transport/express-ride/seat-booking/:travelId"
          element={<SeatBooking />}
        />

        {/* Protected Routes */}
        <Route path="/transport-admin-seatbook" element={<SeatBook />} />
        <Route
          path="/transport-admin-seatbook/:travelId"
          element={<SeatBook />}
        />
        

        {/* Protected Transport Admin Dashboard Route */}
        <Route
          path="/transport-admin-dashboard"
          element={
            isAuthenticated ? <TransportDashboard /> : <Navigate to="/login" />
          }
        />

      </Routes>
    </>
  );
}

export default App;

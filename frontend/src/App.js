import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Order";
import Holdings from "./pages/Holdings";
import Positions from "./pages/Positions";
import Funds from "./pages/Funds";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import PricingPage from "./pages/PricingPage";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/support" element={<Support />} />

        <Route path="*" element={<NotFound />} />

        {/* Protected */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Dashboard />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Orders />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/holdings"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Holdings />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/positions"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Positions />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/funds"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Funds />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Profile />
              </>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
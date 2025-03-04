import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Counter from "./pages/Counter";
import Footer from "./components/Footer";
// import Login from "./pages/Login"
import { Toaster } from "sonner";
import Signup from "./pages/signup";
import Ratings from "./pages/ratings";
import AuthProvider from "./Context/AuthContext";
import Header from "./components/header";
import Dashboard from "./pages/private/Dashboard";
import Login from "./pages/Login";
import VerifyAccount from "./pages/VerifyAccount";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProduct from "./pages/private/AddProduct";
import ProductProvider from "./Context/ProductContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <Header />
            <Toaster
              richColors
              visibleToasts={2}
              position="top-right"
              closeButton
            />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Ratings" element={<Ratings />} />
              <Route path="/verify/:token" element={<VerifyAccount />} />
              <Route path="*" element={<h1>Not Found</h1>} />

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-product" element={<AddProduct />} />
              </Route>
            </Routes>
            <Footer />
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

// rafce

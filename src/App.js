import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-[var(--smoothWhite)]">
      
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/location' element={<Location />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
	<Route path='/login' element={<Login />} />
      </Routes>
      
      <Footer />

      </div>
  );
}

export default App;

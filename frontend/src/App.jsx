import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import DetailPage from "./pages/DetailPage/DetailPage";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop/Shop";
import product from "./assets/dummyproduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import AddPet from "./pages/AddPet/AddPet";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pets" element={<Shop />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AddPet" element={<AddPet />} />
          <Route path="/pet-detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Components/About Us/About";
import { Home } from "./Components/Home/Home";
import { Contact } from "./Components/Contact Us/Contact";
import { Service } from "./Components/Services/Service";
import Layout from "./Components/Pages /Layout";
import UserRecord from "./Components/Userrecords/UserRecord";
import Update from "./Components/Contact Us/Update";
import Login from "./Components/Login/login";
import ForgotPassword from "./Components/Login/ForgotPassword";
import SignUp from "./Components/Login/SignUp";
/*import Footer from "./Components/Pages /Footer";*/
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="Service" element={<Service />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="UserRecord" element={<UserRecord/>} />
          <Route path="Update" element={<Update/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="ForgotPassword" element={<ForgotPassword/>} />
          <Route path="SignUp" element={<SignUp/>} />


          {/*<Route path="Footer" element={<Footer/>}/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

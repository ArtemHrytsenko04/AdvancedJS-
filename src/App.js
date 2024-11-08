import Header from "./my_components/Header";
import Footer from "./my_components/Footer";
import Home from "./my_components/Home";
import FAQ from "./my_components/FAQ";
import { BrowserRouter as BrowserRouter, HashRouter as HashRouter, Router, Routes, Route} from "react-router-dom";
import Invoice from "./my_components/Invoice";
import AdvancedJS from './my_components/AdvancedJS.js';
import Chatbot from "./my_components/ChatBot.js";
import DiscussionBoard from "./my_components/DiscussionBoard.js";
import JobSheet from "./my_components/JobSheet.js";

function App() {
  const customerDetails = {
    title: "Mr",
    firstname: "John",
    lastname: "Doe",
    phone: "1234567890",
    email: "johndoe@example.com",
    street: "123 Elm Street",
    suburb: "Downtown",
    city: "Metropolis",
    postcode: "5678"
  };

  const repairDetails = {
    dateTime: new Date(),
    warranty: true,
    description: "Screen replacement and battery check."
  };

  const selectedProducts = [
    { name: "Iphone", price: 275 },
    { name: "Iphone Charger", price: 35 }
  ];

  return(
    <>
      <h1 className='bg-warning mb-0 p-3 text-center'>ITWD6.408: PROJECT 2</h1>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdvancedJS" element={<AdvancedJS />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <DiscussionBoard />
        <Chatbot />
        <JobSheet customerDetails={customerDetails} selectedProducts={selectedProducts} repairDetails={repairDetails} />
        

        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
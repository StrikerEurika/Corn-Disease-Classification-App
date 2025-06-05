import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Router from "./components/Router";
import Layout from "./components/Layout"; // Make sure Layout is imported

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Sidebar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto pb-12">
            <Router />
          </div>
        </main>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

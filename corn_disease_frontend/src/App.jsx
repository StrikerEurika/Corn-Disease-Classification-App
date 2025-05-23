import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Router from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <Sidebar />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto pb-12">
            <Router />
          </div>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
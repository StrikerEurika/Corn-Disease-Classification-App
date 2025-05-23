import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Quick access links
  const quickLinks = [
    { name: 'Upload New Image', path: '/', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Disease Library', path: '/disease', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { name: 'How It Works', path: '/methodology', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Get Help', path: '/help', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  // Recent analyses (mock data)
  const recentAnalyses = [
    { id: 1, disease: 'Northern Leaf Blight', date: '2023-05-15', confidence: 92 },
    { id: 2, disease: 'Gray Leaf Spot', date: '2023-05-10', confidence: 88 },
    { id: 3, disease: 'Common Rust', date: '2023-05-05', confidence: 95 }
  ];

  return (
    <>
      {/* Sidebar toggle button (visible on all screens) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-r-lg shadow-lg z-40 hover:bg-green-700 transition-colors duration-300"
        aria-label="Toggle Sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          )}
        </svg>
      </button>
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-green-800 to-green-900 text-white shadow-xl transition-all duration-300 ease-in-out z-30 pt-16 ${
          isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-4">
          {/* User greeting */}
          <div className="mb-8 border-b border-green-700 pb-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold mr-3">
                G
              </div>
              <div>
                <p className="font-medium text-green-100">Welcome,</p>
                <p className="text-white">Guest AMSer</p>
              </div>
            </div>
            <button className="mt-2 text-sm text-green-300 hover:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In / Register
            </button>
          </div>
          
          {/* Quick access */}
          <div className="mb-8">
            <h3 className="text-green-300 uppercase text-xs font-semibold tracking-wider mb-2">Quick Access</h3>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className={`flex items-center px-3 py-2 rounded-lg ${
                      location.pathname === link.path 
                        ? 'bg-green-700 text-white' 
                        : 'text-green-100 hover:bg-green-700/50 hover:text-white'
                    } transition-colors duration-200`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Recent analyses */}
          <div>
            <h3 className="text-green-300 uppercase text-xs font-semibold tracking-wider mb-2">Recent Analyses</h3>
            <div className="space-y-3">
              {recentAnalyses.map(analysis => (
                <div key={analysis.id} className="bg-green-800/50 rounded-lg p-3 hover:bg-green-700/50 cursor-pointer transition-colors duration-200">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-white">{analysis.disease}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      analysis.confidence > 90 ? 'bg-green-600/70 text-green-100' : 'bg-yellow-500/70 text-yellow-100'
                    }`}>
                      {analysis.confidence}%
                    </span>
                  </div>
                  <p className="text-green-300 text-xs mt-1">{analysis.date}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-sm text-green-300 hover:text-white py-2 border border-green-700 rounded-lg hover:bg-green-700/50 transition-colors duration-200">
              View All History
            </button>
          </div>
        </div>
      </aside>
      
      {/* Overlay when sidebar is open on small screens */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Sidebar;
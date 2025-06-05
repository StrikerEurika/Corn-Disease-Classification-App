import React from 'react';

function AboutUs() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">About Us</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Our team’s mission at CornGaurd AMS is to empower farmers and agricultural communities 
                with innovative, technology-driven solutions that enhance crop health and productivity. 
                We are dedicated to developing accurate, accessible, and scalable tools for early detection 
                and management of corn diseases, leveraging advanced transfer learning.
              </p>
              <p className="text-gray-700">
                We aim to reduce crop losses, improve food security, and support sustainable farming practices. 
                Ultimately, our mission is to bridge the gap between cutting-edge AI technology 
                and practical agricultural needs, helping farmers make informed decisions and achieve better yields.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/assets/images/corn-field-morning.png" 
                alt="Our Team" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23aaaaaa'%3ETeam Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Our story at CornGaurd AMS began with a shared passion for agriculture and technology. 
              As a team of researchers and engineers, we recognized the challenges farmers face in 
              detecting and managing corn diseases early enough to prevent significant crop losses. 
              Motivated by this problem, we set out to create a solution that combines the power of 
              artificial intelligence with practical agricultural knowledge.
            </p>
            <p className="text-gray-700 mb-4">
              Starting with a small collection of corn leaf images, we explored various machine learning techniques 
              and quickly realized the potential of transfer learning to build accurate disease detection models without 
              requiring massive datasets. Through collaboration, experimentation, and continuous learning, 
              we developed a robust system that can identify multiple corn diseases with high accuracy.
            </p>
            <p className="text-gray-700">
              Our journey is driven by the desire to make advanced technology accessible to farmers worldwide. 
              From humble beginnings to a growing team and expanding dataset, CornGaurd AMS continues to evolve, 
              innovate, and strive toward a future where every farmer can protect their crops efficiently and sustainably. 
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100 shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                <div className="text-green-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly improving our technology to provide cutting-edge solutions</p>
              </div>
              
              <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100  shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                <div className="text-green-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                <p className="text-gray-600">Making advanced agricultural technology available to all farmers</p>
              </div>
              
              <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100  shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                <div className="text-green-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                <p className="text-gray-600">Promoting environmentally friendly farming practices for future generations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
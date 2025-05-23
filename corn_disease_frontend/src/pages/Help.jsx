import React from 'react';

function Help() {
  const faqs = [
    {
      question: "How do I take a good photo of corn leaves?",
      answer: "For best results, take close-up photos of corn leaves in natural daylight. Ensure the affected area is clearly visible and in focus. Try to include both healthy and affected parts of the leaf for comparison. Avoid shadows or bright reflections on the leaf surface."
    },
    {
      question: "What information does the analysis provide?",
      answer: "Our analysis identifies the most likely corn disease affecting your crop, along with a confidence score. You'll receive a description of the disease, its typical conditions, and recommended management strategies to help you take appropriate action."
    },
    {
      question: "How accurate is the disease detection?",
      answer: "Our AI system achieves approximately 94% accuracy on properly taken photographs. Factors that may reduce accuracy include poor image quality, unusual lighting conditions, or diseases at very early stages of development."
    },
    {
      question: "Can I use this app for crops other than corn?",
      answer: "Currently, CornGuard AI is specifically trained to identify diseases in corn (maize). We are developing models for other crops which will be released in future updates."
    },
    {
      question: "Is there a limit to how many images I can analyze?",
      answer: "The free version allows up to 5 image analyses per day. Premium subscriptions provide unlimited analyses along with additional features like historical data tracking and detailed treatment guides."
    },
    {
      question: "How should I interpret the confidence score?",
      answer: "The confidence score (0-100%) indicates how certain our AI is about the diagnosis. Scores above 85% indicate high confidence, while lower scores suggest the symptoms might be ambiguous or the image quality may be insufficient for a definitive diagnosis."
    },
    {
      question: "What if the system can't identify my corn's disease?",
      answer: "If confidence is low or the disease is not recognized, we recommend taking additional photos from different angles or in better lighting. You can also contact our support team for assistance or consult with a local agricultural extension service."
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Help & Support</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg border border-green-100 text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">User Guides</h2>
            <p className="text-gray-600 mb-4">Detailed instructions for using all features of CornGuard AI</p>
            <button className="text-green-600 hover:text-green-800 font-medium">
              View Guides →
            </button>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-100 text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Contact Support</h2>
            <p className="text-gray-600 mb-4">Get help from our team of agricultural experts</p>
            <button className="text-green-600 hover:text-green-800 font-medium">
              Contact Us →
            </button>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-100 text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Video Tutorials</h2>
            <p className="text-gray-600 mb-4">Step-by-step visual guides for using our platform</p>
            <button className="text-green-600 hover:text-green-800 font-medium">
              Watch Videos →
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer bg-white px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-green-100">Our team is ready to help you with any questions or concerns.</p>
          </div>
          <button className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium shadow-lg transition-colors duration-300">
            Get Expert Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;
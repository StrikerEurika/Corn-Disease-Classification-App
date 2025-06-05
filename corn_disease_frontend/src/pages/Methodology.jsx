import React from "react";

function Methodology() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Our Methodology
            </h1>
            <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/assets/images/cnns-on-corn-tech.jpg"
                alt="Our Technology"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23aaaaaa'%3ECNN Technology Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">
                Advanced Technology
              </h2>
              <p className="text-gray-700 mb-4">
                My team, CornGaurd AMS, uses Transfer Learning models to train
                on custom corn leaf images for accurate corn disease
                identification. Leveraging pre-trained CNNs like VGG16 and
                VGG19, we fine-tune these models on our dataset containing
                images of healthy and diseased corn leaves, such as Blight,
                Common Rust, and Gray Leaf Spots.
              </p>
              <p className="text-gray-700">
                This approach allows us to benefit from the models’ prior
                knowledge while adapting them to our specific task, resulting in
                high accuracy even with limited data. We also apply image
                augmentation techniques to enhance the dataset’s diversity and
                improve model Classification robustness.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">
              Our Application Process
            </h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-green-400 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="md:col-span-2 md:text-right">
                    <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100 shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">
                        1. Image Acquisition
                      </h3>
                      <p className="text-gray-600">
                        Users upload high-quality images of corn leaves through
                        our web or mobile interface.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center">
                    <div className="h-10 w-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-lg z-10">
                      1
                    </div>
                  </div>
                  <div className="md:col-span-2 hidden md:block"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="md:col-span-2 hidden md:block"></div>
                  <div className="relative flex justify-center items-center">
                    <div className="h-10 w-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-lg z-10">
                      2
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100 shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">
                        2. Preprocessing
                      </h3>
                      <p className="text-gray-600">
                        Images are enhanced, normalized, and segmented to
                        isolate areas of interest and remove noise.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="md:col-span-2 md:text-right">
                    <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100 shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">
                        3. CNNs Model Analysis
                      </h3>
                      <p className="text-gray-600">
                        Our deep learning model analyzes the image, identifying
                        patterns consistent with various corn diseases.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center">
                    <div className="h-10 w-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-lg z-10">
                      3
                    </div>
                  </div>
                  <div className="md:col-span-2 hidden md:block"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="md:col-span-2 hidden md:block"></div>
                  <div className="relative flex justify-center items-center">
                    <div className="h-10 w-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-lg z-10">
                      4
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-green-50 bg-opacity-50 p-4 rounded-lg border border-green-100 shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">
                        4. Diagnosis Generation
                      </h3>
                      <p className="text-gray-600">
                        Results are compiled into a comprehensive report with
                        disease identification and confidence level.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="md:col-span-2 md:text-right">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">5. Treatment Recommendations</h3>
                      <p className="text-gray-600">Tailored treatment options and management practices are provided based on the identified disease.</p>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center">
                    <div className="h-10 w-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-lg z-10">5</div>
                  </div>
                  <div className="md:col-span-2 hidden md:block"></div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="bg-green-50 bg-opacity-50 mt-12 p-6 rounded-lg border border-green-100 shadow-md transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">
              Accuracy & Continuous Improvement
            </h2>
            <p className="text-gray-700 mb-4">
              Our outperforming model currently achieves a 92% accuracy rate in
              identifying the most common corn diseases. However, we're
              committed to continuous improvement through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                Regular model retraining with new data especially suitable for
                our country's corn farming context
              </li>
              <li>Feedback loops from agricultural experts</li>
              <li>Integration of user feedback on diagnosis results</li>
              <li>
                Research partnerships with leading agricultural institutions
              </li>
            </ul>
            <p className="text-gray-700">
              This iterative approach ensures that our technology remains at the
              cutting edge of agricultural disease detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;

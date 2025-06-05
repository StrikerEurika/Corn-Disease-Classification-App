import React from 'react';

function Disease() {
  // Sample disease data
  const diseases = [
    {
      id: 1,
      name: "Northern Leaf Blight or Leaf Blight",
      scientificName: "Dean Malvick",
      image: "/assets/images/northern-leaf-blight.jpg",
      symptoms: "Northern Leaf Blight causes long, gray-green to tan, cigar-shaped lesions on corn leaves, starting from the lower leaves and spreading upward. Severe infections reduce photosynthesis and can lead to early leaf death.",
      conditions: "The disease favors cool, humid weather and spreads through wind and rain. It survives in infected crop debris, especially with no crop rotation or tillage.",
      management: "Use resistant hybrids, rotate crops, and till soil to reduce infection. Apply fungicides if needed, especially under favorable conditions. Early detection and balanced crop care also help manage the disease."
    },
    {
      id: 2,
      name: "Gray Leaf Spot",
      scientificName: "Dean Malvick",
      image: "/assets/images/gray-leaf-spot.jpg",
      symptoms: "Gray Leaf Spot appears as small, rectangular, gray to tan lesions between the leaf veins. These lesions can merge, causing large dead areas and significantly reducing photosynthesis.",
      conditions: "It thrives in warm, humid conditions and spreads through wind and rain. The fungus overwinters in crop debris, especially in no-till fields or continuous corn planting.",
      management: "Plant resistant hybrids, rotate crops, and use tillage to break down infected debris. Fungicides can help if the disease pressure is high. Scouting early and managing plant density also reduce risk."
    },
    {
      id: 3,
      name: "Common Rust",
      scientificName: "Dean Malvick",
      image: "/assets/images/common-rust.jpg",
      symptoms: "Common Rust causes small, round to oval reddish-brown pustules on both sides of corn leaves. As it develops, pustules may darken and dry out, leading to leaf damage.",
      conditions: "It favors cool, moist weather and spreads through windborne spores. The disease does not overwinter in most regions and usually arrives from southern areas each season.",
      management: "Plant resistant hybrids, monitor fields regularly, apply fungicides if detected early in the season."
    },
    {
      id: 4,
      name: "Healthy",
      scientificName: "garden.eco",
      image: "/assets/images/healthy-corn-leaf-closeup.jpg",
      symptoms: "Healthy corn shows strong, upright stalks with broad, green leaves free from spots or lesions. Ears are well-formed, and silk and tassels appear on schedule, indicating good development.",
      conditions: "Optimal growth occurs in warm temperatures (21°C to 30°C), with full sunlight, well-drained soil, and consistent moisture. Balanced nutrients and proper spacing reduce stress and disease risk.",
      management: "Practice crop rotation, use certified seeds, and apply proper fertilization. Ensure timely irrigation, weed control, and monitor for pests or early signs of disease for best yield outcomes."
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Common Corn Diseases</h1>
          <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Learn about the most common diseases affecting corn crops. Early identification is crucial for 
            effective management and preventing yield loss. Upload images to our analysis tool to identify 
            these diseases in your fields.
          </p>
        </div>

        <div className="space-y-12 mt-10">
          {diseases.map(disease => (
            <div key={disease.id} className="bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow-md overflow-hidden  transition duration-300 hover:bg-green-100 hover:bg-opacity-50 hover:shadow-md">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <div className=" h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden">
                      <img 
                        src={disease.image} 
                        alt={disease.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23aaaaaa'%3ECorn Disease Image%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-green-700">{disease.name}</h2>
                      <p className="text-gray-500 italic">{disease.scientificName}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-green-600 mb-1">Symptoms</h3>
                      <p className="text-gray-700">{disease.symptoms}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-green-600 mb-1">Favorable Conditions</h3>
                      <p className="text-gray-700">{disease.conditions}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-green-600 mb-1">Management Strategies</h3>
                      <p className="text-gray-700">{disease.management}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Disease;
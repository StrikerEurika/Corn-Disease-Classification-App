import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import Results from '../components/Results';
import axios from 'axios';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const [selectedModel, setSelectedModel] = useState('densenet121');  // Default model

  const handleImageUpload = (file) => {
    setSelectedImage(file);
    setResults(null);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      setImagePreview(null);
    }
  };

  // model selection
  const handleModelSelect = (model) => {
    setSelectedModel(model);  // Update the selected model
    setResults(null);         // Clear results so Analyze button is enabled
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Create FormData to send the image file
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("model_name", selectedModel);  // Send the selected model

    axios.post("http://localhost:8000/api/predict", formData)
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
        setIsAnalyzing(false);
      })
      .catch((error) => {
        if (error.response) {
          alert(
            "Error: " +
              (error.response.data.detail ||
                error.response.data ||
                "Bad request.")
          );
        } else {
          alert("Network error. Please check your backend server.");
        }
        setResults(null);
        setIsAnalyzing(false);        
      });
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Corn Disease Classification
          </h1>
          
          <p className="text-gray-700 mb-8 text-center">
            Upload an image of a corn leaf to identify potential diseases
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageUpload 
              onImageUpload={handleImageUpload} 
              imagePreview={imagePreview}
              analyzeImage={analyzeImage}
              isAnalyzing={isAnalyzing}
              hasResults={!!results}
              onModelSelect={handleModelSelect}  // Pass model select handler to ImageUpload
            />
            
            <Results 
              results={results} 
              isAnalyzing={isAnalyzing}
            />
          </div>
        </div>
      </main>
  );
}

export default Home;
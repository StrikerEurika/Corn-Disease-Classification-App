import React, { useState, useCallback, useEffect } from 'react';
import { use } from 'react';

function ImageUpload({ onImageUpload, imagePreview, analyzeImage, isAnalyzing, hasResults, onModelSelect }) {
  const [isDragging, setIsDragging] = useState(false);
  const [models, setModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('');

  // fetch models from the backend
  useEffect(() => {
    fetch('http://localhost:8000/api/models_list')
      .then(response => response.json())
      .then(data => {
        if (data.models) {
          console.log(data);
          setModels(data.models);
          setSelectedModel(data.models[0] || '');  // Set default to first model
          onModelSelect(data.models[0] || '');  // Send default model to parent
        }
      })
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  // Drag & Drop handlers
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      }
    }
  }, [onImageUpload]);

  // File input change handler
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onImageUpload(e.target.files[0]);
    }
  };

  // Model selection handler
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    onModelSelect(e.target.value);  // Send selected model to parent
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-green-800 mb-4">Image Upload</h2>
      
      {/* Drag & Drop Area */}
      <div 
        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors mb-4 ${
          isDragging 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-300 hover:border-green-400'
        } ${imagePreview ? 'h-auto' : 'h-64'}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <div className="w-full h-full">
            <img 
              src={imagePreview} 
              alt="Leaf Preview" 
              className="max-h-72 mx-auto object-contain rounded"
            />
          </div>
        ) : (
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-700 mb-2">Drag & drop a corn leaf image here</p>
            <p className="text-gray-500 text-sm">or</p>
          </div>
        )}
      </div>
      
      {/* File Input Button */}
      <div className="flex flex-col items-center">
        <label className="mb-4 w-full">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="hidden" 
          />
          <div className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer text-center transition-colors duration-300 w-full">
            Browse Images
          </div>
        </label>

        {/* choose the model */}
        <div className="mb-4 w-full">
          <label htmlFor="model-select" className="block text-sm text-gray-700 mb-2">
            Select Model
          </label>
          <select
            id="model-select"
            value={selectedModel}
            onChange={handleModelChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        
        {/* Analyze Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg font-bold transition-colors duration-300 ${
            imagePreview && !isAnalyzing && !hasResults
              ? 'bg-green-700 hover:bg-green-800 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          onClick={analyzeImage}
          disabled={!imagePreview || isAnalyzing || hasResults}
        >
          {isAnalyzing ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </div>
          ) : (
            'Analyze Image'
          )}
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>✓ Supports JPG, PNG, WEBP</p>
        <p>✓ Max file size: 5MB</p>
      </div>
    </div>
  );
}

export default ImageUpload;
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import tensorflow as tf
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io
import base64
import os


# Define the path to the model dir
MODEL_DIR = os.path.join(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))), 'models')


@api_view(['GET'])
def get_available_models(request):
    try:
        # get all model files in the model directory
        model_names = [f.replace('_model.keras', '') for f in os.listdir(
            MODEL_DIR) if f.endswith('_model.keras')]
        print("Available Models: ", model_names)
        return Response({"models": model_names})
    except Exception as e:
        return Response({"error": str(e)}, status=500)


# Model cache for on-demand loading
model_cache = {}


def get_model(model_name):
    """Load and cache model by name. Default to 'densenet121' if not found, but do not cache fallback under wrong name. Returns (model, actual_model_name)."""
    model_file = f"{model_name}_model.keras"
    model_path = os.path.join(MODEL_DIR, model_file)
    if os.path.exists(model_path):
        if model_name not in model_cache:
            print(f"Loading model: {model_file}")
            model_cache[model_name] = load_model(model_path)
        return model_cache[model_name], model_name
    # fallback to densenet121
    default_name = "densenet121"
    default_file = f"{default_name}_model.keras"
    default_path = os.path.join(MODEL_DIR, default_file)
    if default_name not in model_cache:
        print(f"Loading fallback model: {default_file}")
        model_cache[default_name] = load_model(default_path)
    return model_cache[default_name], default_name


# Mapping
cord_disease_map = {
    "Blight": {
        "name": "Blight",
        "about_link": "https://example.com/blight" #
    },
    "Common Rust": {
        "name": "Common Rust",
        "about_link": "https://example.com/rust" #
    },
    "Gray Leaf Spot": {
        "name": "Gray Leaf Spot",
        "about_link": "https://www.youtube.com/watch?v=107Xz8HslXM"
    },
    "Healthy": {
        "name": "Healthy",
        "about_link": "Nothing to worry about"
    }
}

fertilizer_map = {
    "Gray Leaf Spot": {"name": "BlightGuard", "link": "https://example.com/blight"},
    "Common Rust": {"name": "RustAway", "link": "https://example.com/rust"},
    "Healthy": {"name": "No fertilizer needed", "link": ""},
    "Blight": {"name": "Blight Up", "link": "https://en.wikipedia.org/wiki/Blight"}
}


@api_view(['POST'])
def predict_image(request):
    # Get model_name from request (POST data or query param)
    model_name = request.data.get('model_name') or request.query_params.get(
        'model_name') or 'densenet121'
    model, actual_model_name = get_model(model_name)
    print(f"Requested model: {model_name}, Using model: {actual_model_name}")

    # get image from request
    if 'image' not in request.FILES:
        return Response({"error": "No image provided"}, status=400)
    if request.FILES['image'].size > 5 * 1024 * 1024:
        return Response({"error": "Image size exceeds 5MB"}, status=400)
    if not request.FILES['image'].name.endswith(('.png', '.jpg', '.jpeg', '.JPG', '.PNG')):
        return Response({"error": "Invalid image format"}, status=400)

    given_image_file = request.FILES.get('image')

    # image proccessing
    given_image = Image.open(given_image_file)
    given_image = given_image.resize((224, 224))
    img_array = img_to_array(given_image)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0

    # classes
    class_names = ['Blight', 'Common Rust', 'Gray Leaf Spot', 'Healthy']

    # prediction
    prediction = model.predict(img_array)
    predicted_class_probs = prediction[0]
    predicted_class_index = np.argmax(predicted_class_probs)
    # get the predicted disease
    predicted_disease = class_names[predicted_class_index]
    confidence = predicted_class_probs[predicted_class_index]

    # get all prediction probabilities of all classes
    all_probs = {name: float(prob) for name, prob in zip(
        class_names, predicted_class_probs)}
    fertilizer = fertilizer_map.get(predicted_disease, {
                                    "name": "Unknown fertilizer", "link": ""})  # Use .get for safety
    # print the result
    print("Disease predicted: ", predicted_disease)

    # Prepare results as a dictionary
    return Response({
        "disease": predicted_disease,
        "confidence": float(confidence),
        "all_probs": all_probs,
        "fertilizer": fertilizer,
        "model_used": actual_model_name
    })

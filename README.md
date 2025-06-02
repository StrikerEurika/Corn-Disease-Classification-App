# **Corn-Disease-Classification-App**

## Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/StrikerEurika/Corn-Disease-Classification-App.git
    cd corn-disease-classification-app
    ```

Upon here, you will find two main directories: `corn_disease_backend` and `corn_disease_frontend`.

```
corn-disease-classification-app/
├── corn_disease_backend/
├── corn_disease_frontend/
├── .gitignore
├── README.md
└── requirements.txt
```


2. **Install dependencies**
    - For the backend:
    Create a virtual environment and install the required packages:

    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
    ```

    ```bash
    cd corn_disease_backend
    pip install -r requirements.txt
    ```
    - For Backeend, you need to download the models packed on [google drive](https://drive.google.com/drive/folders/1p0-9U2pMMPlu2n7ZwQxJ9owdruUD2zMN?usp=sharing).

        - Download and Unzip the model folder
        
        - Place it in the `corn_disease_backend/models` directory where you should see:
        ```
        corn_disease_backend/
        ├── models/    <-- This is where the directory of models should be placed
        │   ├── densenet121_model.keras
        │   ├── mobilenetv2_model.keras
        │   ├── resnet50_model.keras
        │   ├── vgg16_model.keras
        │   ├── vgg19_model.keras
        ```

    - For the frontend ([Node.js](https://nodejs.org/en/download) needed):
    ```bash
    cd ../corn_disease_frontend
    npm i
    ```

3. **Run the application**
    - Start the backend server:
    ```bash
    cd corn_disease_backend
    python manage.py runserver
    ```
    - Start the frontend:
    ```bash
    cd ../corn_disease_frontend
    npm run dev
    ```

## Brief Report

This project is a web application for classifying corn leaf diseases using deep learning. The backend is built with Python (Flask or FastAPI) and handles image processing and prediction using a trained model. The frontend is developed with React, providing an interface for users to upload images and view results.

**Features:**
- Upload corn leaf images for disease prediction.
- View classification results and suggested actions.
- User-friendly interface for easy interaction.

**Model:**
A convolutional neural network (CNN) was trained on a labeled dataset of corn leaf images to identify common diseases such as blight, rust, and healthy leaves.

**Future Work:**
- Improve model accuracy with more data.
- Add user authentication.
- Deploy the app for public access.
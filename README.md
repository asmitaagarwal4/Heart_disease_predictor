# HeartCareAI
HeartCareAI is a web application designed to assist medical professionals in predicting heart disease risk using machine learning. It provides features for managing patient data, performing predictions, and securely handling user authentication.

## Project Structure
```
HEART_DISEASE_PREDICTOR/
|
|-- backend/
|   |-- __pycache__/
|   |-- .env
|   |-- app.py
|   |-- Ch3.ClevelandData.xlsx
|   |-- model.ipynb
|   |-- model.pkl
|   |-- models.py
|   |-- preprocess.py
|   |-- preprocessor.pkl
|
|-- frontend/
|   |-- node_modules/
|   |-- public/
|   |-- src/
|       |-- assets/
|       |-- Components/
|           |-- ui/
|               |-- Animated-stats.jsx
|               |-- Hero-section.jsx
|               |-- Main-nav.jsx
|               |-- Page.jsx
|               |-- Patients.jsx
|               |-- predict-form.jsx
|               |-- Signin.jsx
|               |-- Signup.jsx
|               |-- Stats-section.jsx
|       |-- lib/
|       |-- App.css
|       |-- App.jsx
|       |-- index.css
|       |-- main.jsx
|   |-- .gitignore
|   |-- components.json
|   |-- eslint.config.js
```

## Features
### Backend
- Flask-based server.
- MongoDB integration for managing doctors and patient data.
- Machine learning model integration using scikit-learn.
- REST API endpoints for user registration, login, and prediction.

### Frontend
- React-based user interface.
- User authentication with sign-in and sign-up pages.
- Components for data visualization and predictions.

## Prerequisites
- Python 3.7 or higher
- Node.js and npm
- MongoDB Atlas or local MongoDB setup

## Installation
### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the `.env` file:
   - Add the following keys to your `.env` file:
     ```env
     MONGO_URI=<Your MongoDB Connection String>
     JWT_SECRET_KEY=<Your JWT Secret Key>
     ```

5. Run the backend server:
   ```bash
   python app.py
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Open the frontend in your browser:
   ```
   http://localhost:5173
   ```

2. Use the application to register/login as a doctor, add patient data, and predict heart disease risk.

## API Endpoints
### Authentication
- `POST /register` - Register a new doctor.
- `POST /login` - Authenticate an existing doctor.

### Patients
- `POST /patients` - Add a new patient.
- `GET /patients` - Retrieve all patients for the logged-in doctor.

### Prediction
- `POST /predict` - Predict heart disease risk based on patient data.

## Technologies Used
### Backend
- Flask
- Flask-CORS
- Flask-JWT-Extended
- PyMongo
- Scikit-learn

### Frontend
- React
- Axios
- Tailwind CSS

## Screenshots


## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

---
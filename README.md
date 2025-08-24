# HeartCareAI
HeartCareAI is a web application designed to assist medical professionals in predicting heart disease risk using machine learning. It provides features for managing patient data, performing predictions, and securely handling user authentication.


<img width="651" alt="img1" src="https://github.com/user-attachments/assets/410ba77f-0009-4676-a268-3490910d55ca" />

<img width="800" alt="img2" src="https://github.com/user-attachments/assets/d5935c41-4656-49fc-8480-d1b0eb1e516b" />

<img width="800" alt="img3" src="https://github.com/user-attachments/assets/65899ece-1747-46c6-b35f-dc080d649653" />


## Project Structure
```
HEART_DISEASE_PREDICTOR/
│
├── backend/
│   ├── __pycache__/
│   ├── .env
│   ├── app.py
│   ├── Ch3.ClevelandData.xlsx
│   ├── model.ipynb
│   ├── model.pkl
│   ├── models.py
│   ├── preprocess.py
│   └── preprocessor.pkl
│
├── frontend/
│   ├── public/
│   │   └── favicon.ico (or static stuff if needed)
│   │
│   ├── src/
│   │   ├── assets/                  ✅ IMAGE ASSETS GO HERE
│   │   │   ├── pairplot.jpeg
│   │   │   ├── boxplot.jpeg
│   │   │   ├── distribution.jpeg
│   │   │   ├── doctor.svg
│   │   │   ├── homeimg.png
│   │   │   └── image.png
│   │   │
│   │   ├── Components/
│   │   │   ├── ContextAPI/
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   │
│   │   │   ├── ui/                 ✅ REUSABLE UI COMPONENTS
│   │   │   │   ├── Animated-stats.jsx
│   │   │   │   ├── Hero-section.jsx
│   │   │   │   ├── Main-nav.jsx
│   │   │   │   ├── Stats-section.jsx
│   │   │   │
│   │   │   ├── AboutUs.jsx
│   │   │   ├── AddPatient.jsx
│   │   │   ├── Page.jsx
│   │   │   ├── Patients.jsx
│   │   │   ├── predict-form.jsx
│   │   │   ├── Signin.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Visualisation.jsx   ✅ VISUALISATION COMPONENT USING IMPORTED IMAGES
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── lib/                    ✅ (Optional utils/helpers here)
│   │
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   └── package.json
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
- Python 3.11 
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

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## Future Improvements 
1. Predict output - replace alert with dialogue box 
2. Enhance prediction form - UI UX 
3. Work on Visualisation page 
4. Enhance model currently at 0.92 accuracy 
5. Make the About Us page 
6. Continue with google feature ( for signing in )
7. Make patient list and integrate it 
8. Resgistered sucessfully alert !
9. Optimise the model.

## License
This project is licensed under the MIT License.
 
---

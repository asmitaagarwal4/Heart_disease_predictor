from bson import ObjectId
import flask
from flask import Flask, request, jsonify,  render_template
import pickle
import pandas as pd
from preprocess import preprocess
from flask_cors import CORS
import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity, decode_token
import bcrypt
import datetime
from flask import Blueprint, jsonify
from pymongo import errors



preprocessor = pickle.load(open('preprocessor.pkl', 'rb'))
model = pickle.load(open('model.pkl', 'rb'))

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)
 # ✅ Configure MongoDB Atlas
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
app.config["MONGO_URI"] = MONGO_URI # Load from environment variable
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "your_secret_key_here")  # Load from environment variable

# ✅ Initialize MongoDB and JWT
mongo = PyMongo(app)
jwt = JWTManager(app)

# ✅ Check MongoDB Connection
try:
    mongo.db.list_collection_names()
    print("✅ MongoDB Connected Successfully!")
except Exception as e:
    print("❌ MongoDB Connection Failed:", e)

@app.route('/')
@app.route('/fetch')
def fetch():
    return "flask app"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print("raw input data", data)

    input_data = pd.DataFrame([data])
    print("Input data before preprocessing:", input_data)

    input_data = preprocessor.transform(input_data)
    print("Input data after preprocessing:", input_data)

    prediction = model.predict(input_data)
    print("Prediction:", prediction)

    # return "data printed"
    return jsonify({'prediction': prediction.tolist()})
    # return str(prediction[0]), 200
    
   


# ✅ Register Doctor (Signup)
@app.route("/register", methods=["POST"])
def register():
    data = request.json

    # ❌ Check if email already exists
    if mongo.db.doctors.find_one({"email": data["email"]}):
        return jsonify({"message": "Email already exists"}), 400
    
    # ✅ Hash password securely (convert to string)
    hashed_password = bcrypt.hashpw(data["password"].encode("utf-8"), bcrypt.gensalt()).decode('utf-8')

    # ✅ Store doctor in DB
    doctor_id = mongo.db.doctors.insert_one({
        "name": data["name"],
        "phone": data["phone"],
        "email": data["email"],
        "password": hashed_password
    }).inserted_id

    return jsonify({"message": "Doctor registered successfully", "doctor_id": str(doctor_id)}), 201

# ✅ Login Doctor
# @app.route("/login", methods=["POST"])
# def login():
#     data = request.json
#     doctor = mongo.db.doctors.find_one({"email": data["email"]})
    
#     if doctor and bcrypt.checkpw(data["password"].encode("utf-8"), doctor["password"]):
#         # ✅ Set JWT Expiry (e.g., 1 hour)
#         access_token = create_access_token(identity=str(doctor["_id"]), expires_delta=datetime.timedelta(hours=1))
#         decoded_token = decode_token(access_token)  # Decode JWT to check expiration
#         print("✅ Token Expiry (UTC):", datetime.datetime.fromtimestamp(decoded_token["exp"], datetime.UTC))
        
#         return jsonify({
#             "access_token": f"Bearer {access_token}",  # Prepend "Bearer "
#             "expires_at": decoded_token["exp"]
#         }), 200

#     return jsonify({"message": "Invalid email or password"}), 401

@app.route("/login", methods=["POST"])
def login():
    data = request.json

    # Check if email exists in the database
    doctor = mongo.db.doctors.find_one({"email": data.get("email")})
    
    if doctor and bcrypt.checkpw(data.get("password", "").encode("utf-8"), doctor["password"].encode("utf-8")):
        try:
            # Create JWT with 1-hour expiry
            access_token = create_access_token(identity=str(doctor["_id"]), expires_delta=datetime.timedelta(hours=1))
            
            # Decode the token to get expiration time
            decoded_token = decode_token(access_token)
            print("✅ Token Expiry (UTC):", datetime.datetime.fromtimestamp(decoded_token["exp"], datetime.timezone.utc))
            
            # Return the token and expiration time
            return jsonify({
                "token": access_token,  # Do not prepend "Bearer"
                "expires_at": decoded_token["exp"]
            }), 200
        except Exception as e:
            print("Error creating token:", str(e))
            return jsonify({"message": "Error generating token"}), 500

    # Invalid credentials
    return jsonify({"message": "Invalid email or password"}), 401

# ✅ Get All Doctors (Protected)
@app.route("/doctors", methods=["GET"])
@jwt_required()
def get_doctors():
    doctors = list(mongo.db.doctors.find({}, {"_id": 1, "name": 1, "phone": 1}))
    
    for doc in doctors:
        doc["_id"] = str(doc["_id"])  # Convert ObjectId to string
    
    return jsonify(doctors)

@app.route("/patients", methods=["POST"])
@jwt_required()
def add_patient():
    data = request.json

    # Validate incoming data
    required_fields = [
        "name", "age", "sex", "cp", "trestbps", "chol", "fbs", 
        "restecg", "thalach", "exang", "oldpeak", "slope", "ca"
    ]
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 422

    try:
        doctor_id = ObjectId(get_jwt_identity())  # Convert doctor ID to ObjectId

        patient_data = {
            "doctor_id": doctor_id,
            "name": data["name"],
            "age": data["age"],
            "sex": data["sex"],
            "cp": data["cp"],
            "trestbps": data["trestbps"],
            "chol": data["chol"],
            "fbs": data["fbs"],
            "restecg": data["restecg"],
            "thalach": data["thalach"],
            "exang": data["exang"],
            "oldpeak": data["oldpeak"],
            "slope": data["slope"],
            "ca": data["ca"],
            "phone": data["phone"],
            "prob": data["prob"]
        }

        # Insert patient_data into the database (assuming a MongoDB collection)
        result = mongo.db.patients.insert_one(patient_data)


        return jsonify({"message": "Patient added successfully", "patient_id": str(result.inserted_id)}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ✅ Get All Patients (Protected)
@app.route("/patients", methods=["GET"])
@jwt_required()
def get_patients():
    doctor_id = ObjectId(get_jwt_identity())  # Convert doctor ID to ObjectId
    patients = list(mongo.db.patients.find({"doctor_id": doctor_id}))

    
    for pat in patients:
        pat["_id"] = str(pat["_id"])  # Convert ObjectId to string
    
    return jsonify(patients)


# patients_bp = Blueprint('patients', __name__)

@app.route('/patients/<id>', methods=['GET'])
@jwt_required()
def get_patient(id):
    try:
        # Get current doctor's ID from JWT
        current_doctor_id = ObjectId(get_jwt_identity())
        
        # Convert string ID to ObjectId
        patient_id = ObjectId(id)
        
        # Find patient with matching ID and doctor ID
        patient = mongo.db.patients.find_one({
            "_id": patient_id,
            "doctor_id": current_doctor_id
        })
        print(f"Fetching patient with ID: {patient_id} for doctor ID: {current_doctor_id}")

        if not patient:
            return jsonify({"error": "Patient not found"}), 404

        # Convert ObjectIds to strings for JSON serialization
        patient["_id"] = str(patient["_id"])
        patient["doctor_id"] = str(patient["doctor_id"])

        print("Patient found:", patient)

        return jsonify(patient), 200

    except (errors.InvalidId, TypeError):
        return jsonify({"error": "Invalid patient ID format"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
     

if __name__ == '__main__':
	app.run(port=5000, debug=True)
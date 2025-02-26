from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import bcrypt

# Doctor Schema (MongoDB Collection: 'doctors')
class Doctor:
    def __init__(self, name, phone, email, password):
        self.name = name
        self.phone = phone
        self.email = email
        self.password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())  # Hash password

    def to_dict(self):
        return {
            "name": self.name,
            "phone": self.phone,
            "email": self.email,
            "password": self.password  # Store hashed password
        }

# Patient Schema (MongoDB Collection: 'patients')
class Patient:
    def __init__(self, doctor_id, age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, phone, prob):
        self.doctor_id = ObjectId(doctor_id)
        self.name = name
        self.age = age
        self.sex = sex
        self.cp = cp
        self.trestbps = trestbps
        self.chol = chol
        self.fbs = fbs
        self.restecg = restecg
        self.thalach = thalach
        self.exang = exang
        self.oldpeak = oldpeak
        self.slope = slope
        self.ca = ca
        self.thal = thal
        self.phone = phone
        self.prob = prob

    def to_dict(self):
        return {
            "doctor_id": self.doctor_id,
            "name": self.name,
            "age": self.age,
            "sex": self.sex,
            "cp": self.cp,
            "trestbps": self.trestbps,
            "chol": self.chol,
            "fbs": self.fbs,
            "restecg": self.restecg,
            "thalach": self.thalach,
            "exang": self.exang,
            "oldpeak": self.oldpeak,
            "slope": self.slope,
            "ca": self.ca,
            "thal": self.thal,
            "phone": self.phone,
            "prob": self.prob
        }

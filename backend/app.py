import flask
from flask import Flask, request, jsonify,  render_template
import pickle
import pandas as pd
from preprocess import preprocess
from flask_cors import CORS
preprocessor = pickle.load(open('preprocessor.pkl', 'rb'))
model = pickle.load(open('model.pkl', 'rb'))

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

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

     

if __name__ == '__main__':
	app.run(port=5000, debug=True)
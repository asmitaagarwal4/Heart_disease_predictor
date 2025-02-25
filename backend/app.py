import flask
from flask import Flask, request, jsonify,  render_template
import pickle
from preprocess import preprocess

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
@app.route('/fetch')
def fetch():
    return "flask app"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print(data)

    input_data = preprocess(data)
    print(input_data)
    # prediction = model.predict(data)
    # return jsonify(prediction)
    return "successfully received data"

      
      

if __name__ == '__main__':
	app.run(port=5000, debug=True)
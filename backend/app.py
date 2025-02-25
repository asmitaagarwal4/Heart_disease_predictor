import flask
from flask import Flask, request, jsonify,  render_template
import pickle

app = Flask(__name__)

@app.route('/')
@app.route('/fetch')
def fetch():
    return "flask app"



if __name__ == '__main__':
	app.run(port=5000, debug=True)
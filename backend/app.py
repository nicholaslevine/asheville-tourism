from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load("../models/fair_price_model.pkl")

#this is a flask server to create an API for the react frontend to connect to 
#it has one route, /predict, which takes in json of features of the airbnb in question, creates a dataframe out of it, puts it in the model, andsends the fair price back to the frontend
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    try:
        df = pd.DataFrame([data])

        pred_log = model.predict(df)[0]
        fair_price = np.expm1(pred_log)

        return jsonify({
            "fair_price": float(fair_price)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)

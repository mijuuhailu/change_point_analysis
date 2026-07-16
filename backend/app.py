from flask import Flask
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)

CORS(app)

df = pd.read_csv("data/BrentOilPrices.csv")

events = pd.read_csv("data/events.csv")

@app.route("/")
def home():
    return {
        "message": "Brent Oil API is running!"
    }

@app.route("/price")
def prices():
    return df.to_dict(orient="records")

@app.route("/events")
def get_events():
    return events.to_dict(orient="records")


change_point = {
    "date": "2025-02-24",
    "price_before":21.42,
    "price_after": 75.61,
    "increase_percent":253
}

@app.route("/change-point")
def get_change():
    return change_point


if __name__ == "__main__":
    app.run(debug=True)

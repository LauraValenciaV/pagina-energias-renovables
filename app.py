from flask import Flask, jsonify, render_template
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('calcula-consumo.html')  # usa render_template

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def leer_csv_y_limpiar(path):
    df = pd.read_csv(path)
    df = df.astype(object).where(pd.notnull(df), None)  # reemplaza NaN por None sin usar métodos deprecados
    return df.to_dict(orient='records')

# Construye la ruta absoluta al archivo CSV
@app.route('/api/renewableShareEnergy')
def renewableShareEnergy():
    path = os.path.join(BASE_DIR, 'data', 'renewable-share-energy.csv')
    return jsonify(leer_csv_y_limpiar(path))

@app.route('/api/modernRenewableProduction')
def modernRenewableProduction():
    path = os.path.join(BASE_DIR, 'data', 'modern-renewable-prod.csv')
    return jsonify(leer_csv_y_limpiar(path))


if __name__ == '__main__':
    app.run(debug=True)


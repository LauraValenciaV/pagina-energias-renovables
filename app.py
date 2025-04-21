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
@app.route('/api/consumoHidroenergia')
def consumoHidroenergia():
    path = os.path.join(BASE_DIR, 'data', 'hydropower-consumption.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/biofuelProduction')
def produccionBiofuel():
    path = os.path.join(BASE_DIR, 'data', 'biofuel-production.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/cumulativeInstalledWind')
def capacidadEolicaInstalada():
    path = os.path.join(BASE_DIR, 'data', 'cumulative-installed-wind-energy-capacity-gigawatts.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/installedGeothermalCapacity')
def capacidadGeothermalInstalada():
    path = os.path.join(BASE_DIR, 'data', 'installed-geothermal-capacity.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/installedSolarPvCapacity')
def capacidadSolarPVIntalada():
    path = os.path.join(BASE_DIR, 'data', 'installed-solar-PV-capacity.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/modernRenewableEnergyConsumption')
def consumoEnergiaRenovable():
    path = os.path.join(BASE_DIR, 'data', 'modern-renewable-energy-consumption.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/shareElectricityHydro')
def shareElectricityHydro():
    path = os.path.join(BASE_DIR, 'data', 'share-electricity-hydro.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/shareElectricityRenewables')
def shareElectricityRenewables():
    path = os.path.join(BASE_DIR, 'data', 'share-electricity-renewables.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/shareElectricitySolar')
def shareElectricitySolar():
    path = os.path.join(BASE_DIR, 'data', 'share-electricity-solar.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/shareElectricityWind')
def shareElectricityWind():
    path = os.path.join(BASE_DIR, 'data', 'share-electricity-wind.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/solarEnergyConsumption')
def solarEnergyConsumption():
    path = os.path.join(BASE_DIR, 'data', 'solar-energy-consumption.csv')
    return jsonify(leer_csv_y_limpiar(path))


@app.route('/api/windGeneration')
def windGeneration():
    path = os.path.join(BASE_DIR, 'data', 'wind-generation.csv')
    return jsonify(leer_csv_y_limpiar(path))

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


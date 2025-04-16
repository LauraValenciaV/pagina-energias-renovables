"""from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os
import numpy as np #para convertir los NaN en null, JSON no recibe los NaN

app = Flask(__name__)
CORS(app)
# Obtiene la ruta absoluta al directorio donde está este archivo app.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

#  ---------------------------------------------- Servicio GET hydropower-consumption.csv ----------------------------------------------

hydropowerConsumption_path = os.path.join(BASE_DIR, 'data', 'hydropower-consumption.csv')

@app.route('/api/consumoHidroenergia')
def consumoHidroenergia():
    df = pd.read_csv(hydropowerConsumption_path)
    data = df.where(pd.notnull(df), None) #Busca los valores NaN y los convierte en None, asi el JSON si los lee
    data_json = data.to_dict(orient='records')#coge la información y la convierte a diccionario.
    #columna_0 = df.iloc[:, 0] 
    #primeros_10 = columna_0.head(10)
    #print(primeros_10)  # Imprime las primeras filas del archivo
    return jsonify(data_json) #Retorna el diccionario convertido a JSON


#---------------------------------------------------- Servicio GET biofuel-production.csv ---------------------------------------------------
# Construye la ruta absoluta al archivo CSV
biofuelProduction_path = os.path.join(BASE_DIR, 'data', 'biofuel-production.csv')

@app.route('/api/biofuelProduction')
def produccionBiofuel():
    df = pd.read_csv(biofuelProduction_path)
    data = df.where(pd.notnull(df), None) #Busca los valores NaN y los convierte en None, asi el JSON si los lee
    data_json = data.to_dict(orient='records')#coge la información y la convierte a diccionario.
    return jsonify(data_json) #Retorna el diccionario convertido a JSON


#---------------------------------------------------- Servicio GET cumulative-installed-wind-energy-capacity-gigawatts.csv ---------------------------------------------------
# Construye la ruta absoluta al archivo CSV
cumulativeInstalledWind_path = os.path.join(BASE_DIR, 'data', 'cumulative-installed-wind-energy-capacity-gigawatts.csv')

@app.route('/api/cumulativeInstalledWind')
def capacidadEolicaInstalada():
    df = pd.read_csv(cumulativeInstalledWind_path)
    data = df.where(pd.notnull(df), None) #Busca los valores NaN y los convierte en None, asi el JSON si los lee
    data_json = data.to_dict(orient='records')#coge la información y la convierte a diccionario.
    return jsonify(data_json) #Retorna el diccionario convertido a JSON


#---------------------------------------------------- Servicio GET installed-geothermal-capacity.csv ---------------------------------------------------
# Construye la ruta absoluta al archivo CSV
installedGeothermalCapacity_path = os.path.join(BASE_DIR, 'data', 'installed-geothermal-capacity.csv')

@app.route('/api/installedGeothermalCapacity')
def capacidadGeothermalInstalada():
    df = pd.read_csv(installedGeothermalCapacity_path)
    data = df.where(pd.notnull(df), None) #Busca los valores NaN y los convierte en None, asi el JSON si los lee
    data_json = data.to_dict(orient='records')#coge la información y la convierte a diccionario.
    return jsonify(data_json) #Retorna el diccionario convertido a JSON



#---------------------------------------------------- Servicio GET installed-solar-PV-capacity.csv ---------------------------------------------------
# Construye la ruta absoluta al archivo CSV
installedSolarPvCapacity_path = os.path.join(BASE_DIR, 'data', 'installed-solar-PV-capacity.csv')

@app.route('/api/installedSolarPvCapacity')
def capacidadSolarPVIntalada():
    df = pd.read_csv(installedSolarPvCapacity_path)
    data = df.where(pd.notnull(df), None) #Busca los valores NaN y los convierte en None, asi el JSON si los lee
    data_json = data.to_dict(orient='records')#coge la información y la convierte a diccionario.
    return jsonify(data_json) #Retorna el diccionario convertido a JSON



#---------------------------------------------------- Servicio GET modern-renewable-energy-consumption.csv ---------------------------------------------------
# Construye la ruta absoluta al archivo CSV
modernRenewableEnergyConsumption_path = os.path.join(BASE_DIR, 'data', 'modern-renewable-energy-consumption.csv')

@app.route('/api/modernRenewableEnergyConsumption')
def consumoEnergiaRenovable():
    df = pd.read_csv(modernRenewableEnergyConsumption_path)
    data = df.where(pd.notnull(df), None) #Busca los valores NaN y los convierte en None, asi el JSON si los lee
    data_json = data.to_dict(orient='records')#coge la información y la convierte a diccionario.
    return jsonify(data_json) #Retorna el diccionario convertido a JSON



if __name__ == '__main__':
    app.run(debug=True)
"""


from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

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




if __name__ == '__main__':
    app.run(debug=True)


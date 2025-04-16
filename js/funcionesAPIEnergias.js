

async function obtenerConsumoHidroenergia() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/consumoHidroenergia');
        const data = await response.json();        
        document.getElementById('resultadoConsumoHidroenergia').textContent = "Datos obtenerConsumoHidroenergia() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}


async function obtenerProduccionBioenergia() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/biofuelProduction');
        const data = await response.json();        
        document.getElementById('resultadoProduccionBioenergia').textContent = "Datos obtenerProduccionBioenergia() convertidos correctamente.";
        console.log(data)
        return JSON.stringify(data)
        
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}



async function obtenerCapacidadEolicaInstalada() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/cumulativeInstalledWind');
        const data = await response.json();        
        document.getElementById('resultadoCapacidadEolicaInstalada').textContent = "Datos obtenerCapacidadEolicaInstalada() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}


async function obtenerCapacidadGeotermicaInstalada() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/installedGeothermalCapacity');
        const data = await response.json();        
        document.getElementById('resultadoCapacidadGeotermicaInstalada').textContent = "Datos obtenerCapacidadGeotermicaInstalada() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}


async function obtenerCapacidadSolarInstalada() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/installedSolarPvCapacity');
        const data = await response.json();        
        document.getElementById('resultadoCapacidadSolarPvInstalada').textContent = "Datos obtenerCapacidadSolarInstalada() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerConsumoEnergiaRenovableModerna() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/modernRenewableEnergyConsumption');
        const data = await response.json();        
        document.getElementById('resultadoCConsumoEnergiaRenovableModerna').textContent = "Datos obtenerConsumoEnergiaRenovableModerna() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadHidro() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityHydro');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadHidro').textContent = "Datos obtenerParticipacionElectricidadHidro() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadRenovable() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityRenewables');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadRenovable').textContent = "Datos obtenerParticipacionElectricidadRenovable() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadSolar() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricitySolar');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadSolar').textContent = "Datos obtenerParticipacionElectricidadSolar() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadEolica() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityWind');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadEolica').textContent = "Datos obtenerParticipacionElectricidadEolica() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerConsumoEnergiaSolar() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/solarEnergyConsumption');
        const data = await response.json();        
        document.getElementById('resultadoConsumoEnergiaSolar').textContent = "Datos obtenerConsumoEnergiaSolar() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerGeneracionEnergiaEolica() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/windGeneration');
        const data = await response.json();        
        document.getElementById('resultadoGeneracionEnergiaEolica').textContent = "Datos obtenerGeneracionEnergiaEolica() convertidos correctamente.";
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

window.onload = () => {
    obtenerConsumoHidroenergia();
    obtenerProduccionBioenergia();
    obtenerCapacidadEolicaInstalada();
    obtenerCapacidadGeotermicaInstalada();
    obtenerCapacidadSolarInstalada();
    obtenerConsumoEnergiaRenovableModerna();
    obtenerParticipacionElectricidadHidro();
    obtenerParticipacionElectricidadRenovable();
    obtenerParticipacionElectricidadSolar();
    obtenerParticipacionElectricidadEolica();
    obtenerConsumoEnergiaSolar();
    obtenerGeneracionEnergiaEolica();
};

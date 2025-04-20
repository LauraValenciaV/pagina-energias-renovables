//------------------------------------------- TOMAR LA FUNCION QUE NECESITE PARA EXTRAER LA INFORMACION DE LA BASE DE DATOS POR MEDIO DEL SERVIDOR ------------------------------------------- 
// ----------->>>>>>> No olvides conectar el html al jv con la etiquete <script type="module" src="../js/nombreDelDocumento.js"></script>   <<<<<<<-----------
async function obtenerConsumoHidroenergia() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/consumoHidroenergia');
        const data = await response.json();        
        document.getElementById('resultadoConsumoHidroenergia').textContent = "Datos obtenerConsumoHidroenergia() convertidos correctamente.";
        console.log("obtenerConsumoHidroenergia");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerProduccionBioenergia() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/biofuelProduction');
        const data = await response.json();        
        document.getElementById('resultadoProduccionBioenergia').textContent = "Datos obtenerProduccionBioenergia() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerProduccionBioenergia");
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerCapacidadEolicaInstalada() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/cumulativeInstalledWind');
        const data = await response.json();        
        document.getElementById('resultadoCapacidadEolicaInstalada').textContent = "Datos obtenerCapacidadEolicaInstalada() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerCapacidadEolicaInstalada");
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerCapacidadGeotermicaInstalada() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/installedGeothermalCapacity');
        const data = await response.json();        
        document.getElementById('resultadoCapacidadGeotermicaInstalada').textContent = "Datos obtenerCapacidadGeotermicaInstalada() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerCapacidadGeotermicaInstalada");
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerCapacidadSolarInstalada() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/installedSolarPvCapacity');
        const data = await response.json();        
        document.getElementById('resultadoCapacidadSolarPvInstalada').textContent = "Datos obtenerCapacidadSolarInstalada() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerCapacidadSolarInstalada");
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerConsumoEnergiaRenovableModerna() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/modernRenewableEnergyConsumption');
        const data = await response.json();        
        document.getElementById('resultadoCConsumoEnergiaRenovableModerna').textContent = "Datos obtenerConsumoEnergiaRenovableModerna() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerConsumoEnergiaRenovableModerna");
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadHidro() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityHydro');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadHidro').textContent = "Datos obtenerParticipacionElectricidadHidro() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerParticipacionElectricidadHidro");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadRenovable() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityRenewables');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadRenovable').textContent = "Datos obtenerParticipacionElectricidadRenovable() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerParticipacionElectricidadRenovable");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadSolar() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricitySolar');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadSolar').textContent = "Datos obtenerParticipacionElectricidadSolar() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerParticipacionElectricidadSolar");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerParticipacionElectricidadEolica() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityWind');
        const data = await response.json();        
        document.getElementById('resultadoParticipacionElectricidadEolica').textContent = "Datos obtenerParticipacionElectricidadEolica() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerParticipacionElectricidadEolica");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerConsumoEnergiaSolar() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/solarEnergyConsumption');
        const data = await response.json();        
        document.getElementById('resultadoConsumoEnergiaSolar').textContent = "Datos obtenerConsumoEnergiaSolar() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerConsumoEnergiaSolar");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerGeneracionEnergiaEolica() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/windGeneration');
        const data = await response.json();        
        document.getElementById('resultadoGeneracionEnergiaEolica').textContent = "Datos obtenerGeneracionEnergiaEolica() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerGeneracionEnergiaEolica");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function obtenerPorcentajeEnergiaRenovable() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/renewableShareEnergy');
        const data = await response.json();      
        document.getElementById('resultadoPorcentajeEnergiaRenovable').textContent = "Datos obtenerPorcentajeEnergiaRenovable() convertidos correctamente.";//OJOOOOOOO aquí hay que identifica el id que tenemos en el html <---.getElementById(TU ID AQUI)
        console.log("obtenerPorcentajeEnergiaRenovable");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}



//------------------------ Utilizar la función correspondiente para extraer y almacenar los datos previamente obtenidos de la base de datos mediante la función anterior. ---------------


async function trabajarConConsumoHidroenergia() {
    const datos = await obtenerConsumoHidroenergia();
    if (!datos) {
        console.error("No se pudo obtener los datos de hidroenergía");
        return;
    }
    return datos;
}

async function trabajarConProduccionBioenergia() {
    const datos = await obtenerProduccionBioenergia();
    if (!datos) {
        console.error("No se pudo obtener los datos de bioenergía");
        return;
    }
    return datos;
}

async function trabajarConCapacidadEolicaInstalada() {
    const datos = await obtenerCapacidadEolicaInstalada();
    if (!datos) {
        console.error("No se pudo obtener los datos de capacidad eólica instalada");
        return;
    }
    return datos;
}

async function trabajarConCapacidadGeotermicaInstalada() {
    const datos = await obtenerCapacidadGeotermicaInstalada();
    if (!datos) {
        console.error("No se pudo obtener los datos de capacidad geotérmica instalada");
        return;
    }
    return datos;
}

async function trabajarConCapacidadSolarInstalada() {
    const datos = await obtenerCapacidadSolarInstalada();
    if (!datos) {
        console.error("No se pudo obtener los datos de capacidad solar instalada");
        return;
    }
    return datos;
}

async function trabajarConConsumoEnergiaRenovableModerna() {
    const datos = await obtenerConsumoEnergiaRenovableModerna();
    if (!datos) {
        console.error("No se pudo obtener los datos de consumo de energía renovable moderna");
        return;
    }
    return datos;
}

async function trabajarConParticipacionElectricidadHidro() {
    const datos = await obtenerParticipacionElectricidadHidro();
    if (!datos) {
        console.error("No se pudo obtener los datos de participación hidroeléctrica");
        return;
    }
    return datos;
}

async function trabajarConParticipacionElectricidadRenovable() {
    const datos = await obtenerParticipacionElectricidadRenovable();
    if (!datos) {
        console.error("No se pudo obtener los datos de participación renovable");
        return;
    }
    return datos;
}


async function trabajarConParticipacionElectricidadSolar() {
    const datos = await obtenerParticipacionElectricidadSolar();
    if (!datos) {
        console.error("No se pudo obtener los datos de participación solar");
        return;
    }
    return datos;
}

async function trabajarConParticipacionElectricidadEolica() {
    const datos = await obtenerParticipacionElectricidadEolica();
    if (!datos) {
        console.error("No se pudo obtener los datos de participación eólica");
        return;
    }
    return datos;
}

async function trabajarConConsumoEnergiaSolar() {
    const datos = await obtenerConsumoEnergiaSolar();
    if (!datos) {
        console.error("No se pudo obtener los datos de consumo de energía solar");
        return;
    }
    return datos;
}

async function trabajarConGeneracionEnergiaEolica() {
    const datos = await obtenerGeneracionEnergiaEolica();
    if (!datos) {
        console.error("No se pudo obtener los datos de generación eólica");
        return;
    }
    return datos;
}

async function trabajarConPorcentajeEnergiaRenovable() {
    const datos = await obtenerPorcentajeEnergiaRenovable();
    if (!datos) {
        console.error("No se pudo obtener el porcentaje de energía renovable");
        return;
    }
    return datos;
}
// Utilizar esta funcion para llamar la funcion trabajarXXX(); que a su vez llama la funcion obtenerxxx(); 
//Dejar solo la que invoca la funcion que necesito
window.onload = () => {
    trabajarConDatosRenovables();
    trabajarConConsumoHidroenergia();
    trabajarConProduccionBioenergia();
    trabajarConCapacidadEolicaInstalada();
    trabajarConCapacidadGeotermicaInstalada();
    trabajarConCapacidadSolarInstalada();
    trabajarConConsumoEnergiaRenovableModerna();
    trabajarConParticipacionElectricidadHidro();
    trabajarConParticipacionElectricidadRenovable();
    trabajarConParticipacionElectricidadSolar();
    trabajarConParticipacionElectricidadEolica();
    trabajarConConsumoEnergiaSolar();
    trabajarConGeneracionEnergiaEolica();
    trabajarConPorcentajeEnergiaRenovable();
};



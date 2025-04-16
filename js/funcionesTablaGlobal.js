// Esta función la uso para conectarme con mi servidor y traer los datos de energía renovable
async function obtenerPorcentajeEnergiaRenovable() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/renewableShareEnergy');// Hago la solicitud al backend en esta URL
        const data = await response.json();  // Espero a que la respuesta se convierta en un objeto JSON      
        document.getElementById('resultadoPorcentajeEnergiaRenovable').textContent = "Datos obtenerPorcentajeEnergiaRenovable() convertidos correctamente.";// Le muestro al usuario (o a mí misma cuando pruebo) que los datos llegaron bien
        console.log("obtenerPorcentajeEnergiaRenovable")
        console.log("______________________")
        return data
    } catch (error) {// Si algo falla (por ejemplo, si el servidor no responde), muestro el error
        console.error('Error al obtener datos:', error);
        return null
    }
}

async function trabajarConDatosRenovables() {// Esta función la uso para tomar los datos y construir una tabla con ellos
    
    const datos = await obtenerPorcentajeEnergiaRenovable();// await: Espero a que se carguen los datos antes de continuar
    const contenedor = document.getElementById("cuadroDatosRenovables");// Busco el contenedor en mi HTML donde quiero mostrar mi tabla

    if (!datos) {// Si los datos no se obtienen bien, muestro un mensaje de error y detengo el resto
        console.error("No se pudo obtener los datos"); 
        return;
    }

    let tabla = "<table border='1'><tr><th>País</th><th>Año</th><th>Porcentaje</th></tr>";// contruyo tabla 

    datos.slice(0, 5).forEach(d => {// Recorro los primeros 5 registros y los convierto en filas de tabla
        tabla += `<tr>
                    <td>${d.Entity}</td>
                    <td>${d.Year}</td>
                    <td>${d["Renewables (% electricity)"]}</td>
                  </tr>`;
    });

    tabla += "</table>";


    if (contenedor) { // Si el contenedor existe, le pongo dentro la tabla que construí
        contenedor.innerHTML = tabla;
    } else {
        console.error("El elemento 'cuadroDatosRenovables' no existe en el DOM.");// Si no existe el contenedor, me aviso en consola para saber que algo está mal
    }
    console.log(datos)
}

// Cuando la página termine de cargarse(window.load) ejecute lo que esta adentro.
window.onload = () => {
    trabajarConDatosRenovables();
};


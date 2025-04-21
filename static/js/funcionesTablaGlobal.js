async function obtenerPorcentajeEnergiaRenovable() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/renewableShareEnergy');
        const data = await response.json();      
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

async function inicializarSelectConEntities() {
    const datos = await obtenerPorcentajeEnergiaRenovable();

    if (!datos) {
        console.error("No se pudo obtener los datos");
        return;
    }

    const entitiesUnicos = [...new Set(datos.map(d => d.Entity))].sort();
    const selector = document.getElementById("selectorEntity");

    // Limpia el select por si se reinicia
    selector.innerHTML = "";

    // Opción por defecto
    const opcionDefault = document.createElement("option");
    opcionDefault.value = "";
    opcionDefault.textContent = "Selecciona un país o continente...";
    selector.appendChild(opcionDefault);

    // Agrega las opciones reales
    entitiesUnicos.forEach(entity => {
        const opcion = document.createElement("option");
        opcion.value = entity;
        opcion.textContent = entity;
        selector.appendChild(opcion);
    });

    // Evento de cambio
    selector.addEventListener("change", function () {
        const entitySeleccionado = selector.value;

        // Limpia resultados si no se selecciona nada
        if (!entitySeleccionado) {
            document.getElementById("cuadroDatosEntity").innerHTML = "";
            return;
        }

        mostrarDatosPorEntity(entitySeleccionado, datos);
    });
}

function mostrarDatosPorEntity(entitySeleccionado, datos) {
    const datosFiltrados = datos.filter(d => d.Entity === entitySeleccionado);

    const contenedor = document.getElementById("cuadroDatosEntity");
    contenedor.innerHTML = ""; // Limpia antes de mostrar nuevos datos

    if (datosFiltrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron datos.</p>";
        return;
    }

    let tabla = "<table border='1'><tr><th>Año</th><th>Porcentaje</th></tr>";
    datosFiltrados.forEach(d => {
        tabla += `<tr>
                    <td>${d.Year}</td>
                    <td>${d["Renewables (% equivalent primary energy)"]}</td>
                  </tr>`;
    });
    tabla += "</table>";

    contenedor.innerHTML = tabla;
}

window.onload = () => {
    inicializarSelectConEntities();
};

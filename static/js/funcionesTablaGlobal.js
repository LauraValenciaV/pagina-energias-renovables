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

    // Saca los 'Entity' únicos del array
    const entitiesUnicos = [...new Set(datos.map(d => d.Entity))].sort();

    const selector = document.getElementById("selectorEntity");

    // Inserta una opción por cada entidad encontrada
    entitiesUnicos.forEach(entity => {
        const opcion = document.createElement("option");
        opcion.value = entity;
        opcion.textContent = entity;
        selector.appendChild(opcion);
    });

    // Evento para cuando el usuario selecciona uno
    selector.addEventListener("change", function () {
        const entitySeleccionado = selector.value;
        if (entitySeleccionado) {
            mostrarDatosPorEntity(entitySeleccionado, datos);
        } else {
            document.getElementById("cuadroDatosEntity").innerHTML = "";
        }
    });
}

function mostrarDatosPorEntity(entitySeleccionado, datos) {
    const datosFiltrados = datos.filter(d => d.Entity === entitySeleccionado);

    if (datosFiltrados.length === 0) {
        document.getElementById("cuadroDatosEntity").innerHTML = "<p>No se encontraron datos.</p>";
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

    document.getElementById("cuadroDatosEntity").innerHTML = tabla;
}

window.onload = () => {
    inicializarSelectConEntities();
};

// Función para obtener los datos de la API
async function obtenerDatos() {
    try {
        const respuesta = await fetch('/api/modernRenewableProduction');  // Hacemos la solicitud
        const data = await respuesta.json();  // Convertimos la respuesta a JSON
        return data;  // Retornamos los datos obtenidos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;  // Lanzamos el error para que pueda ser manejado en otro lugar
    }
}

// Función que se ejecuta al enviar el formulario
document.getElementById('formulario-energia').addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevenimos el comportamiento por defecto del formulario (recarga de página)

    // Obtenemos y validamos el consumo del usuario
    const consumoUsuarioKwh = parseFloat(document.getElementById('consumo').value);

    if (isNaN(consumoUsuarioKwh) || consumoUsuarioKwh <= 0) {
        alert("Por favor ingresa un valor válido.");
        return;  // Si no es un número válido, terminamos la ejecución
    }

    try {
        // Llamamos a la función para obtener los datos de la API
        const data = await obtenerDatos();

        // Buscamos los datos específicos de Colombia en 2021
        const colombia2021 = data.find(
            fila => fila.Code === 'COL' && fila.Year === 2021
        );

        // Si no se encuentran los datos, mostramos un mensaje de error
        if (!colombia2021) {
            document.querySelector('#produccion').innerText = "Datos no disponibles.";
            document.querySelector('#porcentaje').innerText = "--";
            return;  // Si no hay datos, terminamos la ejecución
        }

        // Calculamos la producción total de energía renovable en 2021 en TWh
        const totalProduccionTWh =
            (parseFloat(colombia2021["Electricity from wind (TWh)"]) || 0) +
            (parseFloat(colombia2021["Electricity from hydro (TWh)"]) || 0) +
            (parseFloat(colombia2021["Electricity from solar (TWh)"]) || 0) +
            (parseFloat(colombia2021["Other renewables including bioenergy (TWh)"]) || 0);

        // Convertimos la producción total a kWh
        const totalProduccionKWh = totalProduccionTWh * 1_000_000_000;

        // Calculamos el porcentaje del consumo del usuario respecto a la producción total
        const porcentaje = (consumoUsuarioKwh / totalProduccionKWh) * 100;

        // Mostramos los resultados en los elementos del HTML
        document.querySelector('#produccion').innerText =
            `${totalProduccionTWh.toFixed(2)} TWh = ${totalProduccionKWh.toLocaleString()} kWh`;

        document.querySelector('#porcentaje').innerText = `${porcentaje.toFixed(4)}%`;

    } catch (error) {
        // Si ocurre un error al obtener los datos o procesarlos, mostramos un mensaje de error
        console.error("Error al obtener los datos:", error);
        alert("Hubo un problema al obtener los datos. Intenta más tarde.");
    }
});

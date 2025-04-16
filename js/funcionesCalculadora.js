async function obtenerParticipacionElectricidadHidro() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/shareElectricityHydro');
        const data = await response.json(); 
        console.log("obtenerParticipacionElectricidadHidro");
        console.log("______________________"); // Esto es para darnos una idea señal en la consola de que se está ejecutando.
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}


async function trabajarConParticipacionElectricidadHidro() {
    const datos = await obtenerParticipacionElectricidadHidro();
    if (!datos) {
        console.error("No se pudo obtener los datos de participación hidroeléctrica");
        
        return;
    }
    const resultadoHidroCol2021 = datos.find(d => d.Entity === "Colombia" && d.Year === 2021);

    console.log(resultadoHidroCol2021["Hydro (% electricity)"]); // Esto imprime: 71.91941
    
   
    return datos;
}

window.onload = () => {
    trabajarConParticipacionElectricidadHidro();
};
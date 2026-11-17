function calcularPromedio() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const cal1Texto = document.getElementById("cal1").value.trim();
    const cal2Texto = document.getElementById("cal2").value.trim();
    const cal3Texto = document.getElementById("cal3").value.trim();

    // A. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (cal1Texto === "" || cal2Texto === "" || cal3Texto === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }

    const cal1 = Number(cal1Texto);
    const cal2 = Number(cal2Texto);
    const cal3 = Number(cal3Texto);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert("Ninguna calificación puede ser menor que 0 ni mayor que 10.");
        return;
    }

    // B. Calcular el promedio
    const promedio = (cal1 + cal2 + cal3) / 3;

    // C. Determinar el resultado (APROBADO o REPROBADO)
    let estado = "";
    let claseEstado = "";

    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
        claseEstado = "estado-aprobado";
    } else if (promedio >= 0 && promedio < 6) {
        estado = "REPROBADO";
        claseEstado = "estado-reprobado";
    } else {
        estado = "Promedio fuera de rango";
    }

    // D. Mostrar una observación según el promedio
    let observacion = "";

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 4. Presentar los resultados dentro de la página web
    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.style.display = "block";
    contenedorResultado.innerHTML = `
        <h3>📋 Resultado de la evaluación</h3>
        <p><strong>Estudiante:</strong> <span id="res-nombre"></span></p>
        <p><strong>Calificaciones:</strong> ${cal1} | ${cal2} | ${cal3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;

    // Insertar el nombre usando textContent para mayor seguridad
    document.getElementById("res-nombre").textContent = nombre;
}
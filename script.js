document.addEventListener('DOMContentLoaded', function() {
    // --- Manejo de Navegación ---
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    // Opcional: ocultar otras secciones si se desea una vista de 'pestaña única'
                    // section.style.display = 'none';
                }
            });

            // Scroll suave a la sección
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- Simulación de Envío de Formularios y Acciones CRUD (sin backend) ---
    // Esta es una simulación muy básica. En una aplicación real, aquí irían llamadas AJAX a un backend.

    // Compañías
    const formCompanias = document.getElementById('form-companias');
    if (formCompanias) {
        formCompanias.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Simulación: Guardando datos de la compañía...');
            // Aquí se recolectarían los datos del formulario
            // const formData = new FormData(this);
            // const data = Object.fromEntries(formData.entries());
            // console.log('Datos Compañía:', data);
            this.reset(); // Limpiar el formulario
        });
        // Simulación botones Modificar/Eliminar
        formCompanias.querySelector('.modificar')?.addEventListener('click', () => alert('Simulación: Modificar compañía.'));
        formCompanias.querySelector('.eliminar')?.addEventListener('click', () => alert('Simulación: Eliminar compañía.'));
    }

    // Aeronaves
    const formAeronaves = document.getElementById('form-aeronaves');
    if (formAeronaves) {
        formAeronaves.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Simulación: Guardando datos de la aeronave...');
            this.reset();
        });
        formAeronaves.querySelector('.modificar')?.addEventListener('click', () => alert('Simulación: Modificar aeronave.'));
        formAeronaves.querySelector('.eliminar')?.addEventListener('click', () => alert('Simulación: Eliminar aeronave.'));
    }

    // Pilotos
    const formPilotos = document.getElementById('form-pilotos');
    if (formPilotos) {
        formPilotos.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Simulación: Guardando datos del piloto...');
            this.reset();
        });
        formPilotos.querySelector('.modificar')?.addEventListener('click', () => alert('Simulación: Modificar piloto.'));
        formPilotos.querySelector('.eliminar')?.addEventListener('click', () => alert('Simulación: Eliminar piloto.'));
    }

    // Seguros
    const formSeguros = document.getElementById('form-seguros');
    if (formSeguros) {
        formSeguros.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Simulación: Guardando datos del seguro...');
            this.reset();
        });
        formSeguros.querySelector('.modificar')?.addEventListener('click', () => alert('Simulación: Modificar seguro.'));
        formSeguros.querySelector('.eliminar')?.addEventListener('click', () => alert('Simulación: Eliminar seguro.'));
    }

    // --- Generación de Reportes (Simulación) ---
    const btnGenerarReporte = document.getElementById('btn-generar-reporte');
    const areaReporte = document.getElementById('area-reporte');
    const selectReporteTipo = document.getElementById('reporte-tipo');

    if (btnGenerarReporte && areaReporte && selectReporteTipo) {
        btnGenerarReporte.addEventListener('click', function() {
            const tipoReporte = selectReporteTipo.value;
            areaReporte.innerHTML = `<p>Generando reporte simulado para: <strong>${tipoReporte}</strong>...</p>
                                     <p><em>En una aplicación real, aquí se mostrarían los datos del reporte.</em></p>`;
            if (tipoReporte === "tipo-permiso") {
                areaReporte.innerHTML += "<p>Ejemplo: Listado de compañías agrupadas por tipo de permiso de operación.</p>";
            } else if (tipoReporte === "caducidad-permiso") {
                areaReporte.innerHTML += "<p>Ejemplo: Listado de permisos de operación próximos a vencer (ej. en los próximos 30 días).</p>";
            }
        });
    }

    // --- Validación de Formularios (Ejemplo Básico) ---
    // Se pueden añadir validaciones más específicas según sea necesario.
    // Por ahora, la validación principal se hace con el atributo 'required' en HTML.
    // Ejemplo de validación simple con JavaScript:
    const inputsRequeridos = document.querySelectorAll('input[required]');
    inputsRequeridos.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() === "") {
                this.style.borderColor = 'red'; // Marcar si está vacío después de interactuar
            } else {
                this.style.borderColor = '#ccc'; // Color original
            }
        });
        input.addEventListener('invalid', function(event) {
            // Prevenir el mensaje de validación por defecto del navegador si se desea uno personalizado
            // event.preventDefault();
            // alert(`El campo "${this.previousElementSibling.innerText}" es obligatorio.`);
            this.style.borderColor = 'red';
        });
    });

    console.log('JavaScript cargado y listo.');
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Simulación de Envío de Formularios y Acciones CRUD (sin backend) ---
    // Esta es una simulación muy básica. En una aplicación real, aquí irían llamadas AJAX a un backend.

    // Función genérica para manejar formularios
    const handleFormSubmit = (formId, entityName, vinculationField = null) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const formData = new FormData(this);
                const data = Object.fromEntries(formData.entries());

                let message = `Simulación: Guardando datos de ${entityName}...`;
                if (vinculationField && data[vinculationField]) {
                    message += ` Vinculado a Compañía ID: ${data[vinculationField]}`;
                }
                console.log(`Datos ${entityName}:`, data);
                alert(message);
                this.reset(); // Limpiar el formulario
            });

            // Simulación botones Modificar/Eliminar
            form.querySelector('.modificar')?.addEventListener('click', () => {
                // En un caso real, se cargaría el ID del registro a modificar
                alert(`Simulación: Modificar ${entityName}. Se necesitaría seleccionar un registro.`);
            });
            form.querySelector('.eliminar')?.addEventListener('click', () => {
                // En un caso real, se cargaría el ID del registro a eliminar
                alert(`Simulación: Eliminar ${entityName}. Se necesitaría seleccionar un registro.`);
            });
        }
    };

    // Aplicar a cada formulario específico
    handleFormSubmit('form-companias', 'la compañía');
    handleFormSubmit('form-aeronaves', 'la aeronave', 'compania-id'); // 'compania-id' es el name del input
    handleFormSubmit('form-pilotos', 'el piloto', 'compania-id');    // 'compania-id' es el name del input
    handleFormSubmit('form-seguros', 'el seguro');

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
            // Aquí se podrían añadir más lógicas de reportes simulados.
            // Por ejemplo, si se quisiera un reporte de aeronaves por compañía:
            // else if (tipoReporte === "aeronaves-por-compania") {
            //     const companiaIdReporte = prompt("Ingrese el ID de la compañía para el reporte de aeronaves:");
            //     if(companiaIdReporte) {
            //        areaReporte.innerHTML += `<p>Listado de aeronaves para la compañía ID: ${companiaIdReporte}. (Simulado)</p>`;
            //     } else {
            //        areaReporte.innerHTML += `<p>ID de compañía no ingresado.</p>`;
            //     }
            // }
        });
    }

    // --- Validación de Formularios (Ejemplo Básico) ---
    // La validación principal se hace con el atributo 'required' en HTML.
    // Este script añade un feedback visual simple.
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        // Resaltar campos requeridos vacíos al perder el foco
        if (input.hasAttribute('required')) {
            input.addEventListener('blur', function() {
                if (this.value.trim() === "") {
                    this.style.borderColor = 'red';
                } else {
                    this.style.borderColor = '#ccc'; // Color original o el de :focus si aplica
                }
            });
            // Limpiar el borde rojo al empezar a escribir
            input.addEventListener('input', function() {
                if (this.style.borderColor === 'red' && this.value.trim() !== "") {
                    this.style.borderColor = '#4CAF50'; // Verde mientras escribe y es válido
                } else if (this.value.trim() === "") {
                     this.style.borderColor = 'red';
                }
            });
        }
        // Quitar borde rojo en el evento 'invalid' si el usuario empieza a corregir
        input.addEventListener('invalid', function(event) {
            this.style.borderColor = 'red';
            // Si el usuario empieza a escribir después de un error de validación
            this.addEventListener('input', function onInputAfterInvalid() {
                if (this.validity.valid) {
                    this.style.borderColor = '#4CAF50'; // Verde si se corrige
                } else {
                    this.style.borderColor = 'red'; // Mantener rojo si sigue inválido
                }
                // No es necesario remover este listener explícitamente aquí
                // porque la lógica de 'input' general ya cubre el cambio de color.
            }, { once: false }); // { once: false } es el comportamiento por defecto, solo para ser explícito
        });
    });

    // Eliminar la lógica de navegación por scroll y mostrar/ocultar secciones,
    // ya que ahora cada sección es una página diferente.
    // La navegación es manejada por los <a> tags directamente.

    console.log('JavaScript (script.js) cargado y adaptado para múltiples páginas.');
});

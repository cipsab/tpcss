document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón por su ID
    const scrollButton = document.getElementById('scrollButton');

    // Selecciona la sección a la que queremos hacer scroll
    const targetSection = document.getElementById('proyectos');

    // Verifica que ambos elementos existan antes de añadir el event listener
    if (scrollButton && targetSection) {
        scrollButton.addEventListener('click', function(event) {
            // Previene el comportamiento por defecto del enlace (salto instantáneo)
            event.preventDefault();

            // Usa scrollIntoView para un scroll suave con más control
            targetSection.scrollIntoView({
                behavior: 'smooth', // Hace el scroll suave
                block: 'start'      // Alinea la parte superior de la sección con la parte superior de la ventana
            });

            // Opcional: Si necesitas más control sobre la duración y la easing,
            // puedes implementar una función de scroll animado personalizada.
            // Aquí hay un ejemplo básico, pero scrollIntoView es suficiente para la mayoría:

            /*
            const startPosition = window.pageYOffset;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500; // Duración del scroll en milisegundos (1.5 segundos)

            let startTime = null;

            function animateScroll(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animateScroll);
            }

            // Función de easing (cuadrática, para un inicio y fin suaves)
            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animateScroll);
            */
        });
    }
});
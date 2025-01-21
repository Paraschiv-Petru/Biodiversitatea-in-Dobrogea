document.querySelectorAll('.imagine-container').forEach(container => {
    container.addEventListener('mousemove', function(e) {
        const tooltip = this.querySelector('::after');
        const x = e.clientX;
        const y = e.clientY;
        tooltip.style.top = `${y + 10}px`; // Ajustează poziția verticală
        tooltip.style.left = `${x + 10}px`; // Ajustează poziția orizontală
    });
});
function copyEmail() {
    const email = "Aguileralucas@gmail.com"; // Reemplaza con el email real
    const tooltip = document.getElementById("tooltip");

    // Crea un elemento de entrada temporal para copiar el email
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Muestra el tooltip
    tooltip.classList.add("show");

    // Oculta el tooltip después de 2 segundos con una animación de desvanecimiento
    setTimeout(() => {
        tooltip.classList.remove("show");
    }, 2000);
}
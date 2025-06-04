  document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".boton-agregar-lista");
    const lista = document.querySelector("#lista ul");
    const titulosAgregados = new Set();

    botonesAgregar.forEach((boton) => {
      boton.addEventListener("click", () => {
        const contenedor = boton.closest(".series");
        const nombre = contenedor.querySelector("h2").textContent;
        const puntuacion = contenedor.querySelector("p").textContent;

        if (titulosAgregados.has(nombre)) return;

        const li = document.createElement("li");
        li.textContent = `${nombre} - ${puntuacion}`;
        lista.appendChild(li);
        titulosAgregados.add(nombre);
      });
    });

    const botonBorrar = document.querySelector("#boton-borrar");
    botonBorrar.addEventListener("click", () => {
      lista.innerHTML = "";
      titulosAgregados.clear();
    });
  });

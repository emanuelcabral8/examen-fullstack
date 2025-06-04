  document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".add__to__list");
    const lista = document.querySelector("#list ul");
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

    const botonBorrar = document.querySelector("#delete__button");
    botonBorrar.addEventListener("click", () => {
      lista.innerHTML = "";
      titulosAgregados.clear();
    });
  });

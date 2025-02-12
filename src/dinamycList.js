// Selección de elementos
const input = document.querySelector(".input-text");
const validationIcon = document.querySelector(".validation-icon");
const ol = document.querySelector("ol");

// Cargar la lista desde sessionStorage si existe
function loadList() {
    const storedList = sessionStorage.getItem("myList");
    if (storedList) {
        ol.innerHTML = storedList;
    }
}

// Validar la entrada del usuario
function validateInput() {
    const regex = /^[A-Z][a-z0-9]*$/;
    if (regex.test(input.value)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        validationIcon.innerHTML = "&#x2705;"; // ✅
        return true;
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        validationIcon.innerHTML = "&#x274c;"; // ❌
        return false;
    }
}

// Agregar un elemento a la lista
function addToList(event) {
    if (event.key === "Enter" && validateInput()) {
        event.preventDefault(); // Evita el salto de línea

        const li = document.createElement("li");
        li.textContent = input.value;
        ol.appendChild(li);

        // Guardar en sessionStorage
        sessionStorage.setItem("myList", ol.innerHTML);

        // Limpiar input
        input.value = "";
        input.classList.remove("valid");
        validationIcon.innerHTML = ""; // Eliminar icono después de agregar
    }
}

// Eventos
input.addEventListener("input", validateInput);
input.addEventListener("keypress", addToList);

// Cargar la lista al abrir la página
export { loadList };

# Ejercicio 01 - Manejo de Input y Lista Ordenada con Validación

## Descripción  
Crea un código en JavaScript y HTML que permita agregar elementos a una lista ordenada (`<ol>`) cuando el usuario presione la tecla "Enter" en un input de texto. 

## Requisitos  
1. **Selección de Elementos:**  
   - No puedes usar la función `getElementById`.  
   - El `input` de texto se seleccionará por su clase.  
   - La lista ordenada (`<ol>`) se seleccionará por su nombre de etiqueta.  

2. **Validación del Input:**  
   - El texto ingresado debe seguir el formato:  
     - La primera letra debe ser una **mayúscula**.  
     - El resto pueden ser **minúsculas y/o números**.  
     - **No se permiten símbolos ni caracteres especiales.**  
   - Mientras el usuario escribe, el input debe cambiar de estilo:  
     - **Si es válido:** borde y fondo de color **verde**, con el emoticono ✅ (`&#x2705;`).  
     - **Si es inválido:** borde y fondo de color **rojo**, con el emoticono ❌ (`&#x274c;`).  
   - **Los emoticonos se deben aplicar con la misma clase CSS** que cambia el color del input. No deben añadirse con JavaScript.  

3. **Añadir elementos a la lista (`<ol>`)**  
   - Cuando el usuario presione "Enter", el texto válido se agregará a la lista.  
   - No se debe borrar el contenido ya existente en la lista; solo se debe añadir.  

4. **Uso de Web Storage:**  
   - Cada vez que se agregue un nuevo elemento a la lista, la lista completa debe guardarse en **sessionStorage** con la clave `"myList"`.  
   - La lista se eliminará automáticamente al cerrar el navegador.  

## Consideraciones  
- Utiliza solo `sessionStorage` para almacenar los datos.  
- No uses `getElementById` para seleccionar los elementos.  
- El código debe ser dinámico y actualizarse en tiempo real.  

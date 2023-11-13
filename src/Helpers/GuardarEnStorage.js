export const guardarEnStorage = (clave, elemento) => {
    /* Conseguir elementos */
    let elementos = JSON.parse(localStorage.getItem(clave)) /* Parse, pasamos a objeto lo que ya existe en local storage */

    /* Comprobar si es un array */
    if(Array.isArray(elementos)){
      elementos.push(elemento)
    }else{
      elementos = [elemento]
    }

    console.log(elementos)

    /* Guardar en Local Storage */
    localStorage.setItem(clave, JSON.stringify(elementos)) /* stringify pasamos a JSON para guardar en local storage.*/

    /* Devolver objeto */
    return elemento;
  }
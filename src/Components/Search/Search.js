import React, { useState } from "react";

const Search = ({listadoState, setListadoState}) => {

  const [busquedaP, setBusquedaP] = useState('')

  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = (e) => {

    e.preventDefault() /* Para que no recargue la web */

    /* Crear estado y actualizar */
    setBusquedaP(e.target.value)

    /* Filtrar para buscar coincidencias */
    let pelisEncontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busquedaP.toLocaleLowerCase())
    })

    if(busquedaP.length <= 1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem('pelis'))
      setNoEncontrado(true)
    }else{
      setNoEncontrado(false)
    }

    /* Actualizar el estado del listado principal con lo que he filtrado */
    setListadoState(pelisEncontradas)

  }

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador</h3>
        {(noEncontrado === true && busquedaP.length > 1)&& (<span>No se ha encontrado ninguna coincidencia</span>)}
        <form>
          <input type="text" id="searchField" name="busqueda" autoComplete="off" value={busquedaP} onChange={buscarPeli}/>
          <button>Buscar</button>
        </form>
      </div>
    </>
  );
};

export default Search;

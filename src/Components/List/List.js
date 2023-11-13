import React, { useEffect, useState } from "react";
import Edit from "../Editar/Edit";

const List = ({listadoState, setListadoState}) => {
  /* const [listadoState, setListadoState] = useState([]); */

  const [editar, setEditar] = useState(0)

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);
    return peliculas
  };

  const deleteMovie = (id)=>{
    /* Conseguir peliculas almacenadas */
    let pelisAlmacenadas = conseguirPeliculas()

    /* Filtrar las pelis para que elimine del array */
    let nuevoArrayPeliculas = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id))

    /* Actualizar estado de listado */
    setListadoState(nuevoArrayPeliculas)

    /* Actualizar listado */
    localStorage.setItem('pelis', JSON.stringify(nuevoArrayPeliculas))
  }

  return (
    <>
      {listadoState != null ? /* Si listadoState es diferente a vacío, muestra el return.. De lo contrario, muestra el h2 de abajo // listadoState != null ? return : h2*/
      listadoState.map((peli) => {
        return (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={ () => setEditar(peli.id) }>Editar</button>
            <button className="delete" onClick={ () => deleteMovie(peli.id) }>Delete</button>
            {/* Formulario para Editar */}
            {editar === peli.id && (<Edit peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>)}
          </article>
        );
      })
      :
      <div><h2>No hay peliculas para mostrar</h2></div>
    }
    </>
  );
};

export default List;

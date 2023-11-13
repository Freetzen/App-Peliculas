import React, { useState } from 'react'
import { guardarEnStorage } from '../../Helpers/GuardarEnStorage'

const AddMovie = ({setListadoState}) => {

  const tituloComponente = 'Añadir Pelicula'

  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  })

  const {titulo, descripcion} = peliState

  const limpiarCampos = () => {
    document.getElementById('titulo').value = ''
    document.getElementById('descripcion').value = ''

  }

  const conseguirDatosForm = (e) => {
    e.preventDefault()

    /* Conseguir datos del Form */

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    /* Crear objeto de Pelicula para guardar */

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    if (titulo === '') {
      alert('Ingrese un titulo')
    }else if(descripcion === ''){
      alert('Ingrese una Descripcion')
    }

    /* Guardar Estado */
    setPeliState(peli)
    console.log(peli)


    /* Actualizar estado del listado principal */
    setListadoState(elementos =>{
      return[...elementos, peli]
    })

    /* Guardar en Local (Local Storage solo permite guardar numeros o string) */
    guardarEnStorage('pelis', peli)

    limpiarCampos()


  }




  return (
    <>

    <div className="add">

          <h3 className="title">{tituloComponente}</h3>

          {(titulo && descripcion) && 'Has creado la película: '+ titulo}
          

          <form onSubmit={conseguirDatosForm} id='form'>

            <input 
            type="text"
            id='titulo'
            placeholder="Titulo" />

            <textarea 
            placeholder="Descripción"
            id='descripcion'></textarea>

            <input 
            type="submit" 
            value="Guardar"
            id='guardar'/>

          </form>

        </div>

    </>
  )
}

export default AddMovie
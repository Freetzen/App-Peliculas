import React from 'react'

const Edit = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const tituloComponente = 'Editar'

    const guardarEdit = (e, id) => {
        e.preventDefault()
        /* Consewguir target del evento */
        let target = e.target

        /* Buscar el indice del objeto de la peli a actualizar */
        const peliAlmacenada = conseguirPeliculas()
        const index = peliAlmacenada.findIndex(peli => peli.id === id)
        
        /* Crear objeto con ese id del indice, con tit y desc del formulario */
        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        } 

        /* Actualizar el elemento con el indice */
        peliAlmacenada[index] = peliActualizada

        /* Guardar el objeto en LocalStorage */
        localStorage.setItem('pelis', JSON.stringify(peliAlmacenada))

        /* Actualizar estados */
        setListadoState(peliAlmacenada)
        setEditar(0)

    }

  return (
    <div className='editForm'>
        <h3 className='titleEdit'>{tituloComponente}: {peli.titulo}</h3>
        <form className='formEdit' onSubmit={e=>guardarEdit(e, peli.id)}>
            <input type='text' id='titulo' className='tituloEditado' defaultValue={peli.titulo}/>
            <textarea id='descripcion' defaultValue={peli.descripcion} className='descripcionEditada'/>
            <input type='submit' className='editar' value='Actualizar'/>
        </form>
    </div>
  )
}

export default Edit
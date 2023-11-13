import React, { useState } from 'react'

const Pruebas = () => {

    const [condition, setCondition] = useState(false);

    const handleButtonClick = () => {
        setCondition(!condition)
    }

    
    return(
        <div className='App'>
            <button onClick={handleButtonClick}>Ver</button>
            {condition && <Condition/>}
        </div>
    )

}

export default Pruebas


const Condition = () => {
  return (
    <div>Puedes ver esto</div>
  )
}

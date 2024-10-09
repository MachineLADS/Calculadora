import React, { useState } from 'react'


function App(event) {
  event.preventDefault()
  const [altura, setAltura] = useState(0)

  const [peso, setPeso] = useState(0)

  const [Resultado, setResultado] = useState(null)
  
  const calcularImc = () => {
  
  const imc = peso / (altura * altura);
  setResultado(imc)
  alert (Resultado)
}
  
  return (
    <>
    <div>
      <input type="number" value={altura} onChange = {(e)=> setAltura(+e.target.value)} placeholder = "Altura"/>
    </div>
    <div>
      <input type="number" value={peso} onChange = {(e)=> setPeso(+e.target.value)} placeholder = "Peso"/>
    </div>
    
      
      <form onSubmit= {(e) => { e.preventDefault();calcularImc}}>
        <button>Calcular</button>
      </form>
    </>
  )
}

export default App

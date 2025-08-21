import './Pesquisa.css'
import { useState } from 'react'

const Pesquisa = ({ onBuscar, onFechar }) => {
  const [input, setInput] = useState('')

  const handleClick = () => {
    if (input.trim() !== '') {
      onBuscar(input.trim())
    }
  }

  return (
    <div className="modal">
      <h2>Pesquisar</h2>
      <input
        type="text"
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="botoes">
        <button onClick={handleClick}>Buscar</button>
        <button onClick={onFechar}>Cancelar</button>
      </div>
    </div>
  )
}

export default Pesquisa

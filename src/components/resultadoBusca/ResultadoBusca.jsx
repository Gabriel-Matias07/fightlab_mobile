import './ResultadoBusca.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ResultadoBusca = () => {
  const location = useLocation()
  const [resultados, setResultados] = useState([])
  const [carregando, setCarregando] = useState(true)

  const nome = new URLSearchParams(location.search).get('nome')

  useEffect(() => {
    const buscar = async () => {
      try {
        const headers = {
  'x-rapidapi-host': 'v1.mma.api-sports.io',
  'x-rapidapi-key': '135f61805696bd2e2365631dcd3ab119'
}
        const res = await fetch(
          nome
            ? `https://v1.mma.api-sports.io/fighters?search=${nome}`
            : `https://v1.mma.api-sports.io/fighters`,
          { headers }
        )

        const data = await res.json()
        setResultados(data.response || [])
      } catch (err) {
        console.error('Erro ao buscar:', err)
      } finally {
        setCarregando(false)
      }
    }

    buscar()
  }, [nome])

  return (
    <div className="container">
      <h1 className="titulo">
        RESULTADO DA BUSCA
        <div className="linha-vermelha"></div>
      </h1>

      {carregando ? (
        <p>Carregando...</p>
      ) : resultados.length === 0 ? (
        <p>Nenhum atleta encontrado.</p>
      ) : (
        <div className="cards">
          {resultados.map((atleta) => (
            <div className="card-atleta" key={atleta.id}>
              <img
                src={atleta.photo || 'https://via.placeholder.com/300x300'}
                alt={atleta.name}
                className="imagem-atleta"
              />
              <div className="info-atleta">
                <h2 className="nome-atleta">{atleta.name || 'NOME'}</h2>
                <p>{atleta.nationality || 'Sem Informações de Nacionalidade'}</p>
                <p>{atleta.category || 'Peso Médio'}</p>
              
                <button
                  onClick={() =>
                    window.location.href = `/atleta/${atleta.id}`
                  }
                >
                  ver perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ResultadoBusca

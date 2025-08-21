import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CardAtleta.css';

const CardAtleta = () => {
  const { id } = useParams();
  const [lutador, setLutador] = useState(null);
  const [record, setRecord] = useState(null);
  const [clicado, setClicado] = useState(false);
  const [carregando, setCarregando] = useState(true);

  function adicionarFavorito(lutador) {
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const index = favoritosSalvos.findIndex(f => f.id === lutador.id);

    if (index === -1) {
      const lutadorFavorito = {
        id: lutador.id,
        name: lutador.name,
        photo: lutador.photo,
        category: lutador.category,
        country: lutador.country?.name,
        wins: record?.total?.win || 0,
        losses: record?.total?.loss || 0,
        draws: record?.total?.draw || 0
      };
      favoritosSalvos.push(lutadorFavorito);
      setClicado(true);
    } else {
      favoritosSalvos.splice(index, 1);
      setClicado(false);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritosSalvos));
    window.location.href = '/favoritos';
  }

  useEffect(() => {
    const buscarLutador = async () => {
      try {
        const headers = {
  'x-rapidapi-host': 'v1.mma.api-sports.io',
  'x-rapidapi-key': '135f61805696bd2e2365631dcd3ab119'
}

        const res = await fetch(`https://v1.mma.api-sports.io/fighters?id=${id}`, { headers });
        const data = await res.json();
        const lutadorBuscado = data.response[0];
        setLutador(lutadorBuscado);

        const resRecord = await fetch(`https://v1.mma.api-sports.io/fighters/records?id=${id}`, { headers });
        const dataRecord = await resRecord.json();
        setRecord(dataRecord.response[0]);

        const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const jaFavorito = favoritosSalvos.find(f => f.id === lutadorBuscado.id);
        setClicado(!!jaFavorito);
      } catch (error) {
        console.error('Erro ao buscar lutador:', error);
      } finally {
        setCarregando(false);
      }
    };

    buscarLutador();
  }, [id]);

  if (carregando) return <p>Carregando dados do lutador...</p>;
  if (!lutador) return <p>Lutador não encontrado.</p>;

  const estiloFavButton = {
    cursor: 'pointer',
    width: '0',
    height: '0',
    borderLeft: `60px solid ${clicado ? 'red' : 'white'}`,
    borderRight: `60px solid ${clicado ? 'red' : 'white'}`,
    borderTop: `90px solid ${clicado ? 'red' : 'white'}`,
    borderBottom: '36px solid transparent',
    transition: 'all 0.2s ease-in-out'
  };

  return (
    <div className="container">
      <header>
        <div className="logo">FIGHTLAB</div>
      </header>

      <main>
        <div className="infoIniciais">
          <div
            className="imgLutador"
            style={{
              backgroundImage: `url(${lutador.photo || 'https://jacksonwink.com/wp-content/uploads/2023/09/642f3a306a28fe28935d27cb_jackson-wink-mma-fighter-profile-image-placeholder-male-01-p-20001-scaled-scaled.webp'})`
            }}
          ></div>

          <div className="nomeLutador">
            <h1>{lutador.name}</h1>
            <h2>"{lutador.nickname || 'Sem apelido'}"</h2>
            <h2>Última atualização: {lutador.last_update || 'Data desconhecida'}</h2>
          </div>

          <div
            className="favButton"
            style={estiloFavButton}
            onClick={() => adicionarFavorito(lutador)}
          ></div>
        </div>

        <div className="infoPrincipais">
          <div className="infoPrincipal"><h2>Data nascimento</h2><h2>{lutador.birth_date || '---'}</h2></div>
          <div className="infoPrincipal"><h2>Peso</h2><h2>{lutador.weight || '---'}</h2></div>
          <div className="infoPrincipal"><h2>Categoria</h2><h2>{lutador.category || '---'}</h2></div>
          <div className="infoPrincipal"><h2>Gênero</h2><h2>{lutador.gender === 'M' ? 'Masculino' : lutador.gender === 'F' ? 'Feminino' : '---'}</h2></div>
          <div className="infoPrincipal"><h2>Alcance</h2><h2>{lutador.reach || '---'}</h2></div>
          <div className="infoPrincipal"><h2>Base</h2><h2>{lutador.stance || '---'}</h2></div>
          <div className="infoPrincipal"><h2>Altura</h2><h2>{lutador.height || '---'}</h2></div>
        </div>

        <div className="equipe">
          <div className="cardEquipe">
            <h1>Equipe</h1>
            <h2>{lutador.team?.name || '---'}</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardAtleta;

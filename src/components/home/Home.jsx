import { useState } from 'react';
import Pesquisa from './Pesquisa';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const navigate = useNavigate();

  const handleBusca = (nomeAtleta) => {
    setModalAberto(false);
    navigate(`/resultado?nome=${nomeAtleta}`);
  };

  return (
    <div className="home-container">
      <div className="section-title">
        <h1 className="titles">Bem-vindo ao FightLab</h1>
        <h2>Do nome à nacionalidade, da categoria ao histórico — FightLab conecta você ao <br />perfil completo dos maiores nomes do MMA mundial</h2>
      </div>
      <div className="span-btn">
        <button className="btn" onClick={() => setModalAberto(true)}>Pesquisar Atletas</button>
        <button className="btn" onClick={() => window.location.href = 'https://github.com/Gabriel-Matias07/fightlab'}>Sobre Nós</button>
        <button className="btn" onClick={() => navigate('/favoritos')}>Ver Favoritos</button>
      </div>
      {modalAberto && <Pesquisa onBuscar={handleBusca} onFechar={() => setModalAberto(false)} />}
    </div>
  );
};

export default Home;
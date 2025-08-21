import "./Favoritos.css";
import { Link } from "react-router-dom";

const Favoritos = () => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <div className="container">
      <Link to="/" className="voltar-home">
        <span className="seta">&#8592;</span> Voltar
      </Link>

      <h1 className="titulo">ATLETAS FAVORITOS</h1>
      <div className="linha-vermelha"></div>

      <div className="cards">
        {favoritos.length > 0 ? (
          favoritos.map((atleta) => (
            <div key={atleta.id} className="card-atleta">
              <img
                src={
                  atleta.photo ||
                  "https://jacksonwink.com/wp-content/uploads/2023/09/642f3a306a28fe28935d27cb_jackson-wink-mma-fighter-profile-image-placeholder-male-01-p-20001-scaled-scaled.webp"
                }
                alt={atleta.name}
                className="imagem-atleta"
              />
              <div className="info-atleta">
                <div className="nome-atleta">{atleta.name}</div>
                <p>{atleta.country || "País desconhecido"}</p>
                <p>{atleta.category || "Categoria desconhecida"}</p>
                <p>
                  {`${atleta.wins || 0}V - ${atleta.losses || 0}D - ${
                    atleta.draws || 0
                  }E`}
                </p>
                <Link to={`/atleta/${atleta.id}`}>
                  <button>Ver perfil</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Você ainda não tem favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;

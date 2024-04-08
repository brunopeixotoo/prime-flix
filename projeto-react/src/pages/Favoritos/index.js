import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";


function Favoritos(params) {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);


    }, [])
    
    return(
        <div className="meus-filmes">
            <h1>Sua lista de desejos</h1>

            <ul>
                {filmes.map((filme)=> {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <Link to={`/films/${filme.id}`}> Ver detalhes</Link>
                            <button>Excluir</button>

                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Favoritos;
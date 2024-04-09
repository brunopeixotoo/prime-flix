import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos(params) {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);


    }, [])

    function excluirFilme(id) {
        let filterFilms = filmes.filter((filme) => {
            return (filme.id !== id);
        })
        setFilmes(filterFilms);
        localStorage.setItem("@primeflix", JSON.stringify(filterFilms));
        toast.success("Filme removido com sucesso!");
    }
    
    if (filmes.length === 0) {
        return(
            <span className="aviso">Você não possui nenhum filme :(</span>
        )
    }

    return(
        <div className="meus-filmes">
            <h1>Sua lista de desejos</h1>

            

            <ul>
                {filmes.map((filme)=> {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <Link to={`/films/${filme.id}`}> Ver detalhes</Link>
                            <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Favoritos;
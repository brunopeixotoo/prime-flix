//Criando componentes
import { useEffect, useState } from 'react';
import api from '../services/api'; //Importando API
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
    const [filmes, setFilme] = useState([]);//Criando useState para quando percorrer a API
    const [loading, setLoading] = useState(true);//Criando loading


    useEffect(() => {//Criando useEffect para quando inicializar o programa ser ativado.
        
        //O 'await' é para ele aguardar a requisição ser concluída
        async function loadFilmes(params) {
            const response = await api.get("movie/now_playing", {//Também vai receber alguns parÂmetros a URL
                params:{
                    api_key: "ba08530baafea9c394e3da5cdd865a2e",
                    language: "pt-BR",
                    page: 1
                }
            }) ;//Dentro do parêntese vai ficar a roda que estamos querendo puxar

            setFilme(response.data.results.slice(0, 10));
            setLoading(false);

        }

        loadFilmes();

    }, []);

    if(loading) {
        return(
            <div className='loading'> 
                <h2>
                    Carregando filmes...
                </h2>
            </div>
        )
    }


    return(
        <div className='container'>
            <div className='list-films'>
                {filmes.map((filme)=> {//Percorrendo o useState e renderizando para as rotas
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/films/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;

import "./films.css";
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import api from "../services/api";



//Criando componentes
function Films() {
    //Use useState vai receber um ' {} ', pois ele vai percorrer um objeto.
    //Diferente dos anteriores, pois percorriam uma array.
    const { id } = useParams({});
    const [detalhes, setDetalhes] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadFilms() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "ba08530baafea9c394e3da5cdd865a2e",
                    language: "pt-BR",
                    page: 1
                }
            })
            .then((response)=> {
                setDetalhes(response.data);
                setLoading(false);
            }).catch(()=> {
                console.log('Filme desconhecido');
            });
            
        }
        loadFilms();


        return(() => {
            console.log('Componente desmontado');
        })

    }, []);

    if (loading) {
        return(
            <div className='loading'> 
                
            </div>
        )
    }

    return (
        <div className="container">
            <h1>{detalhes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${detalhes.backdrop_path}`} alt={detalhes.title}></img>
            <h3>Sinopse</h3>
            <span className="details">{detalhes.overview}</span>
            <strong>{detalhes.vote_average} / 10 </strong>
        </div>
   )
}

export default Films;

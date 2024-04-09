import "./films.css";
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from "../services/api";
import { toast } from "react-toastify";



//Criando componentes
function Films() {
    //Use useState vai receber um ' {} ', pois ele vai percorrer um objeto.
    //Diferente dos anteriores, pois percorriam uma array.
    const { id } = useParams({});
    const [detalhes, setDetalhes] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
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
                navigate('/', { replace: true});//Esse método vai redirecionar o usuário para a página que for colocada como parâmetro.
                return;
            });
            
        }
        loadFilms();


        return(() => {
            console.log('Componente desmontado');
        })

    }, [navigate, id]);

    function salvarFilme() { //Salvando no LocalStorage
        const minhaLista = localStorage.getItem("@primeflix");//Craindo armazenamento
        
        let filmesSalvos = JSON.parse(minhaLista) || []; //Inicializando com os itens ou vazia

        //Comparando se o item adicionado é igual a algum filme do useState() 
        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === detalhes.id)
        
        if (hasFilme) {
            toast.warn("Esse filme já está na lista!");
            return;
        }

        //Se não for igual, é adicionado e trasnformado em JSON.
        filmesSalvos.push(detalhes);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }


    if (loading) {
        return(
            <div className='loading'> 
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="detalhes">
            <h1>{detalhes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${detalhes.backdrop_path}`} alt={detalhes.title}></img>
            <h3>Sinopse</h3>
            <span className="details">{detalhes.overview}</span>
            <strong>{`Avaliação: ${detalhes.vote_average.toFixed(1)}/10 `}</strong>

            <div className="area-button">
                <button onClick={salvarFilme}>+ Minha lista</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=}${detalhes.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
        
   )
}

export default Films;

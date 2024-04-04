//Criando componentes
import { useEffect, useState } from 'react';
import api from '../services/api'; //Importando API

function Home() {
    const [filmes, useFilme] = useState([]);//Criando useState para quando percorrer a API

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

            console.log(response.data.results);//Entrando dentro da API pelos seus índices. response(API geral) -> response.data(API no índice data) -> response.data.results(API dentro de data que contém o results);
        }

        loadFilmes();

    }, []);

    return(
        <div>
            <h1>Bem Vindo a Home</h1>
        </div>
    )
}

export default Home;
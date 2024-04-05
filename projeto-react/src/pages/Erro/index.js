import { Link } from "react-router-dom";
import "./erro.css";

function Erro(params) {
    
    return(
        <div className="notfound">
            <h1> Erro 404 Not Found</h1>
            <h2>Página não encontrada</h2>
            <Link to='/'>Veja nossos filmes</Link>
        </div>
    )

}

export default Erro;
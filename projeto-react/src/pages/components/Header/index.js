import { Link } from 'react-router-dom';
import './style.css';


function Header(params) {
    return(
        <header>
            <Link className='logo' to='/'>Prime Flix</Link>
            <Link className='favoritos' to='/favoritos'>Sua lista de desejos</Link>
        </header>
    )
}

export default Header;
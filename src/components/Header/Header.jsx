import {Link} from 'react-router-dom'
const Header= ()  =>{

    return(
        <>
        <header>
            <nav>
                <Link to="/home">Home</Link><br/>
                <Link to="/about">About</Link><br/>
                <Link to="/admission">Admission</Link>
            </nav>
        </header>

        </>
    )
}

export default Header ;

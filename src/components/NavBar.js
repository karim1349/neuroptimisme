import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="bg-brown-25 flex justify-between transition-all duration-500 ease-in-out">
            <img src="/assets/logo.png" alt="logo" className="w-20 h-20 object-contain" />
            <div className="flex items-center">
                <Link to="/"         className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">Accueil</Link>
                <Link to="/me_connaitre"    className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">Me connaître</Link>
                <Link to="/a_propos"    className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">À propos</Link>
                <Link to="/services" className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">Mes services</Link>
                <Link to="/tarifs"  className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">Mes tarifs</Link>
            </div>
        </div>
    )
}

export default NavBar;
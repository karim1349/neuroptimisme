import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="bg-brown-25 flex justify-between transition-all duration-500 ease-in-out">
            <img src="/assets/logo.png" alt="logo" className="w-20 h-20 object-contain" />
            <div className="flex items-center">
                <Link to="/"         className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">Accueil</Link>
                <div className="group flex justify-center cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">
                    <span>Me connaître</span>
                    <svg className="w-5 h-5 inline-block ml-1 transform group-hover:rotate-180 ease-in-out duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                    <div className="absolute hidden group-hover:block">
                        <div className="flex bg-white mt-9 rounded-md p-5 text-black">
                            <div>
                                <Link to="/experiences" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <p className=' text-sm'>Expériences professionnelles</p>
                                </Link>
                                <Link to="/psychoeducation" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <p className=' text-sm'>Mon parcours</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/a_propos"    className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">À propos</Link>
                <div className="group flex justify-center cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">
                    <span>Mes services</span>
                    <svg className="w-5 h-5 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                    <div className="absolute hidden group-hover:block">
                        <div className="flex bg-white mt-9 rounded-md p-5 text-black">
                            <div>
                                <Link to="/suivi_psychologique" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <img src="/assets/icons/psy.png" alt="logo" className="w-4 h-4 object-contain mr-3" />
                                    <p className=' text-sm'>Suivi Psychologique</p>
                                </Link>
                                <Link to="/psychoeducation" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <img src="/assets/icons/amis.png" alt="logo" className="w-4 h-4 object-contain mr-3" />
                                    <p className=' text-sm'>Psychoéducation</p>
                                </Link>
                                <Link to="/remediation_cognitive" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <img src="/assets/icons/cerveau.png" alt="logo" className="w-4 h-4 object-contain mr-3" />
                                    <p className=' text-sm'>Remédiation Cognitive</p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/habilite_sociale" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <img src="/assets/icons/conversation.png" alt="logo" className="w-4 h-4 object-contain mr-3" />
                                    <p className=' text-sm'>Habilité Sociale</p>
                                </Link>
                                <Link to="/bilan" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <img src="/assets/icons/liste.png" alt="logo" className="w-4 h-4 object-contain mr-3" />
                                    <p className=' text-sm'>Bilan</p>
                                </Link>
                                <Link to="/guidance_parentale" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <img src="/assets/icons/famille.png" alt="logo" className="w-4 h-4 object-contain mr-3" />
                                    <p className=' text-sm'>Guidance Parentale</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/tarifs"  className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50">Mes tarifs</Link>
            </div>
        </div>
    )
}

export default NavBar;
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    return (
        <div className="bg-brown-25 flex flex-col sm:flex-row justify-between transition-all duration-500 ease-in-out z-50">
            <div className="flex justify-between items-center">
                <Link to="/"> <img src="/assets/logo.png" alt="logo" className="w-20 h-20 object-contain" /></Link>
                <button className="sm:hidden px-5 py-2 text-white border-white hover:text-white hover:border-white" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
                </button>
            </div>
            <div className={`flex flex-col sm:flex-row sm:items-center ${isOpen ? 'block' : 'hidden'} sm:flex pl-3 sm:pl-0 transition-all duration-500 ease-in-out`}>
            <Link to="/"         className="cursor-pointer sm:mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50 z-50 text-2xl sm:text-base py-4">Accueil</Link>
                <div className="group sm:flex sm:justify-center cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50 text-2xl sm:text-base py-4">
                    <span>Me connaître</span>
                    <svg className="w-5 h-5 inline-block ml-1 transform group-hover:rotate-180 ease-in-out duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                    <div className="sm:absolute hidden group-hover:block delay-100">
                        <div className="sm:flex sm:bg-white sm:mt-9 rounded-md sm:p-5 text-black">
                            <div>
                                <Link to="/qui_suis_je" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <p className=' text-sm'>Qui suis-je ?</p>
                                </Link>
                                <Link to="/experiences" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <p className=' text-sm'>Expériences professionnelles</p>
                                </Link>
                                <Link to="/parcours" className="flex px-4 py-2 hover:bg-nude-50 hover:text-brown-50 items-center rounded-md">
                                    <p className=' text-sm'>Mon parcours</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/a_propos"    className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50 z-50 text-2xl sm:text-base py-4">À propos</Link>
                <div className="group sm:flex sm:justify-center cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50 text-2xl sm:text-base py-4">
                    <span>Mes services</span>
                    <svg className="w-5 h-5 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                    <div className="sm:absolute hidden group-hover:block">
                        <div className="sm:flex sm:bg-white sm:mt-9 rounded-md sm:p-5 text-black">
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
                <Link to="/tarifs"  className="cursor-pointer mr-11 transition-colors duration-200 ease-in-out hover:text-brown-50 z-50 text-2xl sm:text-base py-4">Mes tarifs</Link>
            </div>
        </div>
    )
}

export default NavBar;
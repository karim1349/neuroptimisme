import { Link } from "react-router-dom"
import Card3D from "./components/Card3D"

const Home = () => {
    return (
        <>
            <div className="flex items-center bg-nude-50 flex-1 flex-col">
                <div className="flex flex-col items-center">
                    <div className="relative flex w-screen flex-row justify-center bg-white">
                        <div className="flex flex-col flex-1 justify-center items-center">
                            <div className="hidden sm:flex">
                                <Card3D>
                                    <img src="/assets/card.png" alt="card" className="w-full h-full object-cover" />
                                </Card3D>
                            </div>
                            <p className=" hidden sm:block text-4xl text-center">Neuropsychologue - Psychologue - Neurofeedback à Mérignac </p>
                        </div>
                        <p className=" block sm:hidden text-xl self-center text-center">Neuropsychologue - Psychologue - Neurofeedback à Mérignac </p>
                        <div class="relative w-1/2 sm:w-96">
                            <img src="/assets/sophia.png" alt="sophia" class="h-full w-full object-cover self-end" />
                            <div class="absolute inset-0 bg-gradient-to-l from-transparent to-nude-50 opacity-100 -left-1 -bottom-1"/>
                        </div>
                    </div>
                    <div className="flex w-11/12 sm:w-full flex-col items-center max-w-6xl pb-16">

                        <h1 className=" mt-20 text-2xl font-medium">Mon <span className="text-brown-50">e-book</span> sur le TDAH</h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl flex flex-col md:flex-row items-center p-8">
                            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                                <img src="/assets/cover_ebook_tdah.avif" alt="E-book TDAH" className="w-64 h-auto object-contain rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105" />
                            </div>
                            <div className="md:w-2/3 md:pl-8 flex flex-col justify-center items-center md:items-start">
                                <h2 className="text-xl text-brown-50 font-medium mb-4 text-center md:text-left">Comprendre et gérer le TDAH au quotidien</h2>
                                <p className="text-center md:text-left mb-6">Et si vous compreniez enfin le TDAH de votre enfant pour mieux l’accompagner au quotidien ? Découvrez un e-book clair, pratique et pensé pour les parents mais aussi pour les professionnels qui débutent ! </p>
                                <a target="_blank" rel="noopener noreferrer" href="https://payhip.com/b/nQ2NX" className="self-center md:self-start bg-brown-50 text-white px-6 py-3 rounded-md font-medium transform transition-all duration-300 hover:bg-brown-25 hover:scale-105 flex items-center">
                                    <span className="mr-2">Je le veux !</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h1 className=" mt-20 text-2xl font-medium">Mes <span className="text-brown-50">Services</span></h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <p>Je vous reçois dans mon cabinet, situé à Merignac pour plusieurs types de prise en charge. </p>
                        <div className="flex flex-col md:flex-row justify-between w-full mt-20">
                            <div className="flex w-full flex-col items-center sm:mx-16">
                                <Link to="/bilan" className="cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/liste.png" alt="liste" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Bilan neuropsychologique</p>
                                            <p>Un bilan neuropsychologique est une évaluation clinique des fonctions cognitives, émotionnelles et comportementales d'une personne. Il comprend des tests et des questionnaires visant à d'une personne. Il peut comprendre des tests et des questionnaires. </p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/neurofeedback" className="cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/cerveau2.png" alt="cerveau" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Neurofeedback</p>
                                            <p>Le Neurofeedback EEGq (NFB) et Biofeedback est une approche thérapeutique combinée qui utilise des capteurs pour mesurer l'activité cérébrale et les fonctions physiologiques. En recevant des feedbacks en temps réel, le patient apprend à réguler son esprit et son corps, favorisant ainsi un meilleur équilibre mental et physique pour traiter des troubles tels que l'anxiété, la dépression, et les douleurs chroniques.</p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to="/remediation_cognitive" className="cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/cerveau.png" alt="cerveau" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Remédiation Cognitive</p>
                                            <p>La remédiation cognitive est une approche thérapeutique visant à améliorer ou restaurer les fonctions cognitives chez les personnes souffrant de troubles mentaux. Elle se concentre sur le développement ou la réhabilitation des compétences cognitives telles que la mémoire, l'attention, le raisonnement, la planification, et d'autres fonctions mentales altérées.</p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden sm:flex w-px bg-gray-300"/>
                            <div className="flex w-full flex-col items-center sm:mx-16"><Link to="/habilite_sociale" className="cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/conversation.png" alt="conversation" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Habiletés Sociales</p>
                                            <p>Le travail sur les habiletés sociales fait référence aux interventions visant à développer et améliorer les compétences relationnelles et interpersonnelles d'une personne. </p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/guidance_parentale" className="cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/famille.png" alt="famille" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Guidance Parentale</p>
                                            <p>La guidance parentale fait référence à un ensemble d'approches et de conseils fournis aux parents pour les aider à comprendre et à répondre aux besoins de leur enfant atypique de manière appropriée. </p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/psychoeducation" className="cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/suivi_psychologique" className=" cursor-pointer group bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/psy.png" alt="psy" className=" w-14 h-14 object-contain mr-7" />
                                        <div className="flex flex-col">
                                            <p className="text-brown-50 text-xl mb-2">Suivi Psychologique</p>
                                            <p>Je réalise du suivi psychologique en psychothérapie de soutien. Mon approche se veut intégrative avec des outils issus de plusieurs psychothérapies reconnues (TCC, ACT, ICV, thérapie des schémas)</p>
                                            <button className="self-end bg-brown-25 px-4 py-1 rounded-md mt-4 group-hover:bg-brown-50 transform transition-all duration-300 hover:scale-105">
                                                <span className="group-hover:text-white">En savoir plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <h1 className=" mt-20 text-2xl font-medium">Le cabinet <span className="text-brown-50">Neuroptimisme</span></h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl flex flex-col items-center p-11">
                            <img src="/assets/illustrations/room.png" alt="cabinet" className=" w-64 object-contain rounded-xl" />
                            <p className="text-center mt-8">Mon cabinet Neuroptimisme vous offre une vision de la psychologie et de la neuropsychologie qui se veut optimiste. Je vous accompagne pour atteindre l'autonomie et le développement des compétences pour faire face aux difficultés. J'offre un soutien professionnel pour aider les individus à surmonter les obstacles émotionnels et à améliorer leur bien-être mental, contribuant ainsi à l'amélioration de la qualité de vie des personnes confrontées à des défis cognitifs ou émotionnels.</p>
                        </div>
                        <h1 className=" mt-20 text-2xl font-medium">Comment me <span className="text-brown-50">contacter</span> ?</h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl flex flex-col items-center p-11">
                            <p className="text-center">Pour toute demande d'information ou pour prise de rendez-vous, n'hésitez pas à me retrouver sur <span>Doctolib</span>, <span>LinkedIn</span> et <span>Instagram</span>. Vous pouvez aussi m'envoyer un mail à l'adresse contact@neuroptimisme.fr, et trouver mon cabinet à l'adresse postale suivante. À bientôt ! </p>
                            <div className="flex flex-col sm:flex-row items-center mt-8">
                                <button className="group flex flex-col cursor-pointer items-center mx-11 my-8 sm:my-0" onClick={() => window.open("https://www.doctolib.fr/psychologue/merignac/sophia-boukoulo", "_blank")}>
                                    <img src="/assets/icons/doctolibFill.png" alt="doctolib" className=" w-16 h-16 object-contain" />
                                    <p className="group-hover:text-brown-50 mt-5 underline">Prendre RDV</p>
                                </button>
                                <button className="group flex flex-col cursor-pointer items-center mx-11 my-8 sm:my-0" onClick={() => window.open("https://www.linkedin.com/in/sophia-boukoulo-385680192/", "_blank")}>
                                    <img src="/assets/icons/linkedinFill.png" alt="linkedin" className=" w-16 h-16 object-contain" />
                                    <p className="group-hover:text-brown-50 mt-5 underline">Sophia Boukoulo</p>
                                </button>
                                <button className="group flex flex-col cursor-pointer items-center mx-11 my-8 sm:my-0" onClick={() => window.open("https://www.instagram.com/neuroptimisme?utm_medium=copy_link", "_blank")}>
                                    <img src="/assets/icons/instagramFill.png" alt="instagram" className=" w-16 h-16 object-contain" />
                                    <p className="group-hover:text-brown-50 mt-5 underline">@neuroptimisme</p>
                                </button>
                            </div>

                            <p className="mt-8 text-center"> Adresse du cabinet : 
                            <br/>Espace médical du Truc
                            <br/>74 Avenue du Truc, Entrée A
                            <br/>33700 Mérignac
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
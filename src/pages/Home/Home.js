import Card3D from "./components/Card3D"

const Home = () => {
    return (
        <>
            <div className="flex items-center bg-nude-50 min-h-screen flex-col">
                <div className="flex flex-col items-center">
                    <div className="relative flex w-screen flex-row justify-center bg-white">
                        <div className="flex flex-col flex-1 justify-center items-center">
                            <Card3D>
                                <img src="/assets/card.png" alt="card" className="w-full h-full object-cover" />
                            </Card3D>
                            <p className="text-4xl text-center">Neuropsychologue et psychologue à Mérignac</p>
                        </div>
                        <div class="relative w-96">
                            <img src="/assets/sophia.png" alt="sophia" class="h-full w-full object-cover self-end" />
                            <div class="absolute inset-0 bg-gradient-to-l from-transparent to-nude-50 opacity-100"/>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                        <h1 className=" mt-20 text-2xl font-medium">Mes <span className="text-brown-50">Services</span></h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <p>Je vous reçois dans mon cabinet, situé à Merignac pour plusieurs types de prise en charge. </p>
                        <div className="flex flex-col md:flex-row justify-between w-full my-20">
                            <div className="flex w-full flex-col items-center mx-16">
                                <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div>
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div>
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div>
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-px bg-gray-300"/>
                            <div className="flex w-full flex-col items-center mx-16">
                                <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div>
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div>
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-5">
                                    <div className="flex">
                                        <img src="/assets/icons/amis.png" alt="amis" className=" w-14 h-14 object-contain mr-7" />
                                        <div>
                                            <p className="text-brown-50 text-xl mb-2">Psychoéducation</p>
                                            <p>La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h1 className=" mt-20 text-2xl font-medium">Le cabinet <span className="text-brown-50">Neuroptimisme</span></h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl flex flex-col items-center p-11">
                            <img src="/assets/illustrations/room.png" alt="cabinet" className=" w-64 object-contain rounded-xl" />
                            <p className="text-center mt-8">Mon cabinet Neuroptimisme vous offre une vision de la psychologie et de la neuropsychologie qui se veut optimiste. Je vous accompagne pour atteindre l’autonomie et le développement des compétences pour faire face aux difficultés. J’offre un soutien professionnel pour aider les individus à surmonter les obstacles émotionnels et à améliorer leur bien-être mental, contribuant ainsi à l'amélioration de la qualité de vie des personnes confrontées à des défis cognitifs ou émotionnels.</p>
                        </div>
                        <h1 className=" mt-20 text-2xl font-medium">Comment me <span className="text-brown-50">contacter</span> ?</h1>
                        <div className="w-5/6 h-px bg-brown-50 my-8" />
                        <div className="bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl flex flex-col items-center p-11">
                            <p className="text-center">Pour toute demande d'information ou pour prise de rendez-vous, n'hésitez pas à me retrouver sur <span>Doctolib</span>, <span>LinkedIn</span> et <span>Instagram</span>. À bientôt ! </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
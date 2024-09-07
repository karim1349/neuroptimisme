const Neurofeedback = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-11/12 sm:w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/cerveau2.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Neurofeedback</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">
                Le neurofeedback EEGq (ou électroencéphalogramme quantitatif) est une technique avancée de neurofeedback qui utilise des mesures précises de l'activité cérébrale pour améliorer les fonctions cognitives et la gestion des difficultés au quotidien. Le processus commence par une évaluation EEGq, où des capteurs sont placés sur le cuir chevelu pour enregistrer les ondes cérébrales (l’activité de votre cerveau). Ces données sont ensuite analysées pour identifier les déséquilibres ou les anomalies dans les schémas d'activité cérébrale.
                <br/>
                <br/>
                Une fois l'évaluation terminée, des séances de neurofeedback personnalisées sont mises en place pour aider à réguler l'activité cérébrale. Pendant ces séances, le patient reçoit des feedbacks en temps réel sous forme de signaux visuels ou auditifs (des vidéos ou des sons), qui l’aident à ajuster son activité cérébrale vers un état plus équilibré. Je suis présente durant ces séances pour vous aider avec des stratégies pour atteindre vos objectifs. Le neurofeedback EEGq est particulièrement utile dans plusieurs situations :
                </p>
                <h1 className="text-5xl text-center text-brown-50 mt-16">Optimiser la performance</h1>
                <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10">
                    <img src="/assets/illustrations/neurofeedback1.svg" alt="tcc" className=" w-80 object-contain" />
                    <div>
                        <p className="text-justify mt-12 sm:mt-0 ml-4">
                        Le NFB est aussi conçu pour les sportifs (de haut niveau ou qui souhaitent acquérir un meilleur potentiel), les haut-dirigeants, et tous ceux qui aspirent à l'excellence. Le NFB permet d'optimiser les performances mentales, de renforcer la concentration, et de mieux gérer le stress pour atteindre des sommets dans les différents domaines.
                        </p>
                    </div>
                </div>
                <img src="/assets/icons/fleche.svg" alt="fleche" className=" h-48 object-contain -mt-9 z-0 ml-28 self-start" />
                        <h1 className="text-5xl text-center text-brown-50">Santé - gestion des troubles</h1>
                <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10">
                    <div>
                        <p className="text-justify mr-4">
                            Le NFB est particulièrement bénéfique pour les personnes souffrant de TDAH, de troubles des apprentissages, et de troubles du neurodéveloppement en général. Il apporte également un soutien précieux pour les difficultés cognitives liées aux AVC ou aux traumatismes crâniens, et contribue à soulager les douleurs chroniques, la fibromyalgie, ainsi que les migraines, en rééquilibrant le fonctionnement cérébral.
                        </p>
                    </div>
                    <img src="/assets/illustrations/neurofeedback2.svg" alt="tcc" className=" w-80 object-contain" />
                </div>
                <img src="/assets/icons/fleche2.svg" alt="fleche" className=" h-48 object-contain -mt-12 z-0 mr-28 self-end" />
                <h1 className="text-5xl text-center text-brown-50">Biofeedback</h1>
                <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/neurofeedback3.svg" alt="tcc" className=" w-80 object-contain" />
                    <div>
                        <p className="text-justify ml-4">
                        Le biofeedback est une méthode thérapeutique qui permet à une personne de prendre conscience de certaines fonctions physiologiques, comme la fréquence cardiaque, la respiration, ou la tension musculaire, souvent hors de contrôle conscient. À l'aide de capteurs placés sur le corps, le biofeedback mesure ces fonctions et les traduit en signaux visuels ou sonores que le patient peut interpréter.
                        <br/>
                        <br/>
                        L'objectif du biofeedback est d'apprendre au patient à contrôler volontairement ces fonctions physiologiques pour améliorer sa santé et son bien-être. Par exemple, en observant ses propres réponses corporelles, une personne peut apprendre à réduire son stress, à gérer la douleur chronique, ou à améliorer ses performances sportives. Le biofeedback est utilisé pour traiter une large gamme de conditions, allant des migraines à l'hypertension, en passant par les troubles anxieux et les phobies. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Neurofeedback

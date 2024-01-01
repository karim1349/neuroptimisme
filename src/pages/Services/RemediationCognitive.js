const RemediationCognitive = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-11/12 sm:w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/cerveau.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Remédiation Cognitive</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">
                    La remédiation cognitive est une approche thérapeutique visant à améliorer ou restaurer les fonctions cognitives chez les personnes souffrant de troubles mentaux. Elle se concentre sur le développement ou la réhabilitation des compétences cognitives telles que la mémoire, l'attention, le raisonnement, la planification, et d'autres fonctions mentales altérées.
                    <br/>
                    <br/>
                    Cette approche est souvent utilisée en neuropsychologie pour aider les individus ayant des troubles cognitifs liés à des conditions telles que les AVC, les traumatismes crâniens, le post-Covid ou encore la dépression. La remédiation cognitive implique des exercices et des activités spécifiques conçus pour renforcer les compétences cognitives et améliorer le fonctionnement global du cerveau.
                </p>
                <div className="flex mt-12">
                    <h2 className="text-brown-50 text-4xl">Il existe deux approches</h2>
                    <img src="/assets/icons/fleche3.svg" alt="fleche" className="hidden sm:block h-40 object-contain mt-8" />
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/rc1.png" alt="tcc" className=" w-80 object-contain" />
                    <div>
                        <h1 className="text-5xl text-center text-brown-50 mt-16"><span className="font-extrabold">01.</span> {' '} Stimulation Cognitive</h1>
                        <p className="text-justify mt-12 ml-4">
                            Il s’agit d’un ensemble d'activités, d'exercices et de techniques conçus pour activer et améliorer les fonctions cognitives chez les individus. Cette approche vise à maintenir, renforcer ou réhabiliter les capacités intellectuelles et mentales.
                            <br/>
                            <br/>
                            Les activités de stimulation cognitive peuvent inclure des jeux, des puzzles, des exercices de mémoire, des tâches de résolution de problèmes, et d'autres activités spécifiques visant à solliciter différentes fonctions du cerveau. Les exercices peuvent inclure des situations inspirer de la vie quotidienne.
                            <br/>
                            <br/>
                            L'objectif principal de la stimulation cognitive est d'améliorer la qualité de vie en favorisant le maintien ou l'amélioration des compétences, notamment la mémoire, l'attention, la concentration et d'autres processus cognitifs.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <div>
                        <h1 className="text-5xl text-center text-brown-50 mt-16"><span className="font-extrabold">02.</span> {' '} Stratégies</h1>
                        <p className="text-justify mt-12 mr-4">
                        Parfois, la stimulation seule ne suffit pas et la fonction cognitive ciblée ne peut pas être entièrement restaurée. Dans de telles situations, il est crucial de développer des stratégies pour contourner les difficultés et réussir à atteindre les objectifs fixés. La mise en place de stratégies joue un rôle essentiel en remédiation cognitive, car elle permet de surmonter les obstacles pour parvenir aux objectifs initiaux.
                        </p>
                    </div>
                    <img src="/assets/illustrations/rc1.png" alt="tcc" className=" w-80 object-contain" />
                </div>
            </div>
        </div>
    );
}

export default RemediationCognitive

const SuiviPsychologique = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/psy.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Suivi Psychologique</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">Je réalise du suivi psychologique en psychothérapie de soutien. Mon approche se veut intégrative avec des outils issus de plusieurs psychothérapies reconnues (TCC, ACT, ICV, thérapie des schémas)</p>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/tcc.png" alt="tcc" className=" w-80 object-contain" />
                    <p className="text-center text-brown-50 text-2xl mb-5">
                        TCC : Thérapie Cognitive et Comportementale
                    </p>
                    <p className="text-center">
                        Les thérapie cognitive et comportementale sont issus des méthodologies expérimentales et de la psychologie scientifique. En mettant l'accent sur la résolution de problèmes, la restructuration cognitive et la modification des schémas comportementaux, les TCC sont efficaces pour traiter divers troubles tels que l'anxiété et la dépression.
                    </p>
                </div>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/act.png" alt="act" className=" w-80 object-contain" />
                    <p className="text-center text-brown-50 text-2xl mb-5">
                        ACT : La Thérapie d'Acceptation et d'Engagement
                    </p>
                    <p className="text-center">
                    La thérapie d’acceptation et d’engagement est une approche thérapeutique qui combine des techniques de pleine conscience avec des stratégies visant à développer la flexibilité psychologique. Plutôt que de lutter contre les pensées indésirables, l'ACT encourage à les accepter et à s'engager dans des actions alignées avec les valeurs personnelles. Cette thérapie vise à aider les individus à créer une relation plus ouverte et détendue avec leurs pensées, tout en poursuivant des objectifs significatifs. Elle est utilisée pour traiter divers troubles émotionnels et comportementaux.
                    </p>
                </div>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/icv.png" alt="icv" className=" w-80 object-contain" />
                    <p className="text-center text-brown-50 text-2xl mb-5">
                        ICV : Intégration du Cycle de la Vie
                    </p>
                    <p className="text-center">
                        ICV (intégration du cycle de la vie) est utilisée pour le traitement des traumatismes. Cette thérapie vise à recréer une cohérence dans l’histoire de vie des patients, pour mieux intégrer les traumatismes et les rendre moins actifs au quotidien. 
                    </p>
                </div>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/tds.png" alt="tds" className=" w-80 object-contain" />
                    <p className="text-center text-brown-50 text-2xl mb-5">
                        Thérapie des Schémas
                    </p>
                    <p className="text-center">
                        La thérapie des schémas se concentre sur la compréhension et la modification des schémas cognitifs maladaptés, qui sont des modèles de pensées et de comportements profondément enracinés résultant souvent d'expériences de vie précoces. En identifiant ces schémas et leurs origines il est plus facile de les changer pour promouvoir des réponses émotionnelles et des comportements plus sains. Cette approche intégrative combine des éléments de thérapies cognitives, comportementales, émotionnelles et interpersonnelles. Elle est souvent utilisée pour traiter des troubles tels que les troubles de la personnalité, la dépression chronique et d'autres problèmes psychologiques liés à des schémas de pensée maladaptés.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SuiviPsychologique

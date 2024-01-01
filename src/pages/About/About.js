const About = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/liste.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-2xl">Neuropsychologie et Psychologie : Quelles différences ?</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <h1 className="text-5xl mt-16">Neuropsychologie</h1>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10">
                    <img src="/assets/illustrations/about1.png" alt="tcc" className=" w-80 object-contain" />
                    <p className="text-center">
                        La neuropsychologie est une discipline spécialisée qui explore les liens entre le fonctionnement cognitif, émotionnel et comportemental d'une personne et le fonctionnement de son cerveau. Le neuropsychologue cherche à comprendre et à traiter les altérations neurologiques et les troubles mentaux, visant ainsi à améliorer la qualité de vie de ses patients.
                        <br/>
                        <br/>
                        Son rôle principal consiste à évaluer les capacités cognitives des individus, en particulier dans les domaines tels que la mémoire, l'attention, les fonctions exécutives et les émotions. Ils interviennent auprès de patients présentant divers troubles/pathologies, telles que : 
                        <br/>
                        <br/>
                        <ul className="list-disc list-inside text-brown-50">
                            <li>Les troubles du neurodéveloppement (autisme, TDA(H), dys, retard mentale etc.) entraînant des difficultés scolaires</li>
                            <li>Les troubles émotionnels et/ou psychiatriques (dépression, trouble de la personnalité etc.) </li>
                            <li>Les pathologies neurologiques (AVC, Alzheimer, DLFT etc.)</li>
                        </ul>
                        <br/>
                        J’utilise des techniques d'évaluation et des tests psychométriques pour comprendre les capacités et les limitations cognitives des individus. En fonction des résultats, je fournis des conseils, met en place des interventions de rééducation cognitive et propose des orientations adaptées aux besoins spécifiques de chaque patient. Je réalise aussi un travail sur les habiletés sociales, mais également de la guidance parentale afin de mieux comprendre et s’adapter aux particularités de son enfant.  Enfin mon travail peut également impliquer des consultations de psycho-éducation visant à améliorer la compréhension du fonctionnement de la personne.
                    </p>
                </div>
                <h1 className="text-5xl mt-16">Psychologie</h1>
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-50">
                    <img src="/assets/illustrations/about2.png" alt="tcc" className=" w-80 object-contain" />
                    <p className="text-center mb-8">
                        La psychologie est l'exploration des facettes complexes de l'esprit humain, englobant les dimensions cognitives, émotionnelles et comportementales.
                        <br/>
                        <br/>
                        La psychothérapie est un processus professionnel et confidentiel où le patient, travaille en collaboration avec la psychologue pour explorer, comprendre et résoudre des problèmes émotionnels, comportementaux ou relationnels. Pendant les séances, la psychologue offre un espace sûr et non-jugeant pour permettre au patient d'exprimer librement ses pensées, sentiments et préoccupations. Je réalise du suivi psychologique en psychothérapie de soutien. Mon approche se veut intégrative avec des outils issus de plusieurs psychothérapies reconnues : 
                        <ul className="list-disc list-inside text-brown-50">
                            <li>ACT (Thérapie d’Acceptation et d’engagement) ayant prouvé son efficacité dans les troubles de l’humeur </li>
                            <li>Thérapie des schémas, qui aide, entre autre, dans les troubles de la personnalité (borderline)</li>
                            <li>TCC (Thérapie Cognitive et Comportementale) très utilisée dans les troubles anxieux </li>
                            <li>ICV (intégration du cycle de la vie) pour aider à surmonter les traumatismes </li>
                        </ul>
                        <br/>
                        L’objectif est d’aider le patient à mieux se comprendre, à identifier des schémas de pensée ou de comportement inadaptés, et à développer des stratégies pour faire face aux défis de la vie. Le suivi psychologique peut aborder une variété de problématiques, telles que le stress, la dépression, l'anxiété, le manque de confiance en soi et bien d'autres.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
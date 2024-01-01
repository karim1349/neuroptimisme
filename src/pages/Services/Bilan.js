const Bilan = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/liste.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Bilan</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">
                    Un bilan neuropsychologique est une évaluation clinique des fonctions cognitives, émotionnelles et comportementales d'une personne. Il comprend des tests et des questionnaires visant à d’une personne. Il peut comprendre des tests et des questionnaires.
                    <br/>
                    <br/>
                    Le bilan neuropsychologique comprend trois grandes étapes : 
                </p>
                <h1 className="text-5xl text-brown-50 mt-16"><span className="font-extrabold">01.</span> {' '} L'anamnèse</h1>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10">
                    <img src="/assets/illustrations/gp1.png" alt="tcc" className=" w-80 object-contain" />
                    <p className="text-center">
                    Il s’agit d’un entretien qui vise à la collecte d'informations détaillées sur l'histoire médicale, neurologique, développementale et psychologique d'un individu. Cela inclut des éléments tels que les antécédents médicaux, les événements traumatiques, les symptômes actuels et passés, les traitements précédents, ainsi que des informations sur le développement de l'individu. L'anamnèse est une composante importante du processus d'évaluation neuropsychologique, fournissant des informations contextuelles essentielles pour comprendre les difficultés cognitives, émotionnelles ou comportementales présentées par le patient.
                    </p>
                </div>
                <img src="/assets/icons/fleche.svg" alt="fleche" className=" h-48 object-contain -mt-9 z-0 ml-28 self-start" />
                <h1 className="text-5xl text-brown-50"><span className="font-extrabold">02.</span> {' '} Tests Neuropsychologiques et Psychométriques</h1>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-50">
                    <p className="text-center mb-8">
                    Les tests neuropsychologiques et psychométriques sont des outils standardisés conçus pour mesurer des aspects spécifiques du fonctionnement mental, cognitif ou comportemental d'une personne. Ces tests sont généralement administrés dans un cadre contrôlé et suivent des normes strictes pour garantir leur validité et leur fiabilité. Les résultats obtenus permettent d’objectiver les difficultés, et de fournir un profil cognitif pouvant aider dans le cadre d’un diagnostic (pathologie neurodéveloppementale ou neurodégénérative par exemple).
                    <br/>
                    <br/>
                    Les tests peuvent comprendre des tests de QI, ainsi que des tests sur les différentes fonctions cognitives : fonctions instrumentales, mnésiques, exécutives, attentionnelles et la cognition sociale. 
                    </p>
                </div>
                <img src="/assets/icons/fleche2.svg" alt="fleche" className=" h-48 object-contain -mt-12 z-0 mr-28 self-end" />
                <h1 className="text-5xl text-brown-50"><span className="font-extrabold">03.</span> {' '} Restitution du Bilan</h1>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <p className="text-center mb-8">
                    La restitution du bilan se réfère au processus par lequel les résultats d'une évaluation neuropsychologique sont communiqués au patient, à ses proches et, le cas échéant, à d'autres professionnels de la santé impliqués dans les soins. Cela implique souvent de présenter de manière compréhensible les conclusions de l'évaluation, les forces et faiblesses cognitives identifiées, ainsi que des recommandations éventuelles pour des interventions. La restitution vise à fournir des informations claires et utiles pour aider le patient à mieux comprendre son fonctionnement cognitif et à guider les plans thérapeutiques appropriés.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bilan

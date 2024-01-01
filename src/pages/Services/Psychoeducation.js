const Psychoeducation = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/amis.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Psychoéducation</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">La psychoéducation est une approche thérapeutique qui vise à informer les individus sur leur trouble. En étant conscient de ses difficultés on peut plus facilement y remédier. </p>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/psychoeducation.png" alt="Psychoéducation" className=" w-80 object-contain" />
                    <p className="text-center">
                        La psychoéducation combine des éléments de la psychologie et de l'éducation pour aider les personnes à mieux comprendre et à faire face à leurs problèmes émotionnels, comportementaux ou relationnels dans le cadre d’une pathologie ou d’un trouble.
                        <br/><br/>Dans le cadre de la psychoéducation, le psychologue fournit des informations, des conseils et des outils pratiques aux individus. L'objectif est d'accroître la compréhension des facteurs contribuant aux difficultés et d'enseigner des stratégies pour améliorer la qualité de vie. 
                        <br/><br/>La psychoéducation peut être utilisée pour traiter divers troubles mentaux, elle est souvent intégrée à d'autres approches thérapeutiques.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Psychoeducation

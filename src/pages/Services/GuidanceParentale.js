const GuidanceParentale = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/famille.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Guidance Parentale</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">La guidance parentale fait référence à un ensemble d'approches et de conseils fournis aux parents pour les aider à comprendre et à répondre aux besoins de leur enfant atypique de manière appropriée. </p>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/gp1.png" alt="tcc" className=" w-80 object-contain" />
                    <p className="text-center mb-8">
                        La guidance parentale est un accompagnement visant à renforcer les compétences parentales et à promouvoir des relations familiales positives pour le bien-être global des enfants. Elle aborde divers sujets tels que le développement de l'enfant, la gestion du comportement, la communication parent-enfant, et la résolution de conflits familiaux. L'objectif est d'autonomiser les parents en leur fournissant les outils nécessaires pour élever leurs enfants de manière adaptée à leurs besoins spécifiques, contribuant ainsi à un environnement familial sain.
                    </p>
                    <img src="/assets/illustrations/gp2.png" alt="act" className=" w-80 object-contain" />
                    <p className="text-center">
                        Dans le contexte de troubles tels que le TDAH, la guidance parentale revêt une importance particulière. Elle fournit des stratégies spécifiques pour comprendre et gérer le comportement de l'enfant atteint de TDAH, incluant des conseils sur la gestion de l'hyperactivité, de l'impulsivité, et des difficultés attentionnelles. Les interventions pour le TDAH peuvent impliquer des techniques de gestion du comportement, des méthodes d'organisation à la maison, et des conseils pour une communication efficace avec l'école. En collaborant avec les parents, le psychologue cherche à améliorer la compréhension du TDAH, renforcer les compétences parentales, et créer des stratégies adaptées pour favoriser le bien-être de l'enfant au quotidien.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GuidanceParentale

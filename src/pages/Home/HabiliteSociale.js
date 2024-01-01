const HabiliteSociale = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/conversation.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-3xl">Habilité Sociale</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <p className="text-center">Le travail sur les habiletés sociales fait référence aux interventions visant à développer et améliorer les compétences relationnelles et interpersonnelles d'une personne. </p>
                <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8">
                    <img src="/assets/illustrations/hs1.png" alt="tcc" className=" w-80 object-contain" />
                    <p className="text-center mb-8">
                    Aujourd’hui, le monde dans lequel nous vivons est un monde social. On se sert des habiletés sociales au quotidien sans s’en rendre compte ! Malheureusement dans certains troubles, celles-ci sont altérées. Le travail sur ces habiletés vise à restaurer et/ou installer une meilleure qualité dans les échanges sociaux. 
                    </p>
                    <img src="/assets/illustrations/hs2.png" alt="act" className=" w-80 object-contain" />
                    <p className="text-center mb-8">
                        Les habiletés sociales incluent la communication verbale et non verbale, la résolution de conflits, l'empathie, la gestion des émotions, la prise de perspective, et d'autres compétences sociales importantes.
                        <br/>
                        <br/>
                        Ce type de travail est souvent utilisé en psychologie et en neuropsychologie, en particulier pour aider les personnes qui rencontrent des difficultés dans leurs relations sociales. Il peut être appliqué à divers contextes, tels que l'autisme, les troubles du comportement, les troubles de l'anxiété sociale, ou simplement pour renforcer les compétences sociales chez des individus qui souhaitent améliorer leur interaction avec les autres.
                    </p>
                    <img src="/assets/illustrations/hs3.png" alt="act" className=" w-80 object-contain" />
                    <p className="text-center">
                    Les interventions sur les habiletés sociales peuvent prendre la forme de jeux de rôle, de discussions guidées, de modélisation de comportements sociaux appropriés, et d'autres activités visant à renforcer et généraliser les compétences sociales dans différentes situations de la vie quotidienne.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HabiliteSociale

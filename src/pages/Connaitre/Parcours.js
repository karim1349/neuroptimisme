const Parcours = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex flex-col items-center">
                <img src="/assets/illustrations/parcours.png" alt="parcours" className="flex w-screen flex-row justify-center h-96 object-cover"/>
                <div className="bg-nude-50 h-10 -mt-5 flex items-center px-10">
                    <h1 className="text-brown-50 text-2xl">Mon parcours</h1>
                </div>
                <div className="flex w-11/12 sm:w-full flex-col items-center max-w-6xl pb-28">
                    <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10 justify-between">
                        <img src="/assets/illustrations/parcours1.png" alt="univ" className=" w-64 object-contain sm:mr-16" />
                        <p className="">
                        Diplômée d'un baccalauréat scientifique en 2015, j'ai entamé un parcours en médecine pendant deux ans, acquérant ainsi des bases solides en biologie et en sciences. Je me suis ensuite intéressée aux neurosciences et à la psychologie en me tournant vers une licence de psychologie à l'université Paris Descartes. Durant cette période, j'ai enrichi mon parcours en passant une année en Espagne, à l'université des îles Baléares, où j’y ai découvert ma vocation pour la neuropsychologie.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10 justify-between">
                        <p className="">
                            De retour en France, j'ai persévéré pour intégrer le prestigieux master de neuropsychologie à l'université Paris Descartes, décrochant mon diplôme de psychologue spécialisée en neuropsychologie avec mention en 2022. Forte de cette expertise, je poursuis activement ma formation en participant à des conférences et des formations axées sur les troubles neurodéveloppementaux tels que l'autisme et le TDAH, ainsi que sur les dernières avancées neuropsychologiques émanant de la recherche.
                            <br/>
                            <br/>
                            Plus récemment, j’ai suivi une formation d’un an en 2023 sur le Neurofeedback EEGq et le Biofeedback afin de proposer des techniques innovantes et prometteuses. 
                            <br/>
                            <br/>
                            Mon engagement envers la formation continue reflète ma volonté de rester à la pointe des connaissances, garantissant ainsi à mes patients un accompagnement informé par les dernières découvertes scientifiques. Mon objectif est d'offrir des services de qualité, imprégnés des avancées les plus récentes, pour répondre au mieux aux besoins de ceux que j'accompagne.
                        </p>
                        <img src="/assets/illustrations/parcours2.png" alt="univ" className="w-64 object-contain sm:ml-16" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parcours;
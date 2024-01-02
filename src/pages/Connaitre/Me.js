const Me = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex flex-col items-center">
                <img src="/assets/illustrations/bordeaux.png" alt="bordeaux" className="flex w-screen flex-row justify-center h-96 object-cover"/>
                <div className="bg-nude-50 h-10 -mt-5 flex items-center px-10">
                    <h1 className="text-brown-50 text-2xl">Qui suis-je ?</h1>
                </div>
                <div className="flex w-11/12 sm:w-full flex-col items-center max-w-6xl pb-28">
                    <div className="flex flex-col sm:flex-row items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 my-8 z-10 justify-between">
                        <p className="text-center">
                            Passionnée par les neurosciences et la santé mentale, j’étudie les liens entre le fonctionnement cognitif, émotionnel et intellectuel. Originaire d'une petite ville charmante des Pays de la Loire, mon parcours m'a conduit à Paris, où j'ai poursuivi mes études au sein d'une université renommée. 
                            <br/>
                            <br/>
                            Forte d'une solide formation et d'une expérience diversifiée, je me suis établi à Bordeaux, prêt à mettre mes compétences au service de votre bien-être. Mon approche professionnelle repose sur l'empathie, la compréhension et la collaboration. Je m'engage à fournir un soutien personnalisé, que ce soit dans l'évaluation neuropsychologique, la rééducation, le suivi psychologique ou la psychothérapie.
                            <br/>
                            <br/>
                            Sur ce site, vous trouverez des informations détaillées sur mes services, ma méthodologie, mon parcours, ainsi que des ressources utiles. Mon objectif est de vous accompagner vers une meilleure compréhension de vous-même, en vous offrant des outils pour surmonter les défis émotionnels et améliorer votre qualité de vie.
                            <br/>
                            <br/>
                            N'hésitez pas à explorer le site et à me contacter pour toute question ou pour prendre rendez-vous. Je suis là pour vous accompagner dans vos parcours. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me;
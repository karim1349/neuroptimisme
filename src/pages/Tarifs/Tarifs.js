const Tarifs = () => {
    return (
        <div className="flex items-center bg-nude-50 flex-1 flex-col">
            <div className="flex w-11/12 sm:w-full flex-col items-center max-w-6xl pb-16">
                <div className="flex items-center mt-20">
                    <img src="/assets/icons/liste.png" alt="logo" className=" w-16 h-16 object-contain" />
                    <h1 className="text-brown-50 text-2xl">Tarifs des prestations</h1>
                </div>
                <div className="w-5/6 h-px bg-brown-50 my-8" />
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 sm:my-8 z-10">
                        <img src="/assets/illustrations/about2.png" alt="tcc" className=" w-64 object-contain" />
                        <p className="text-center">
                            <span className="text-brown-50">Suivi Psychologique</span>
                            <br/>
                            Durée : 1h00
                        </p>
                        <p className="bg-brown-50 px-12 py-2 rounded-full text-white mt-5">60€</p>
                    </div>
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 sm:my-8 z-10">
                        <img src="/assets/illustrations/bilan.png" alt="tcc" className=" w-64 object-contain" />
                        <p className="text-center">
                            <span className="text-brown-50">Bilan</span>
                            <br/>
                            Durée de 3 à 4h00
                        </p>
                        <p className="bg-brown-50 px-12 py-2 rounded-full text-white mt-5">de 350€ à 450€</p>
                    </div>
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 sm:my-8 z-10">
                        <img src="/assets/illustrations/rc1.png" alt="tcc" className=" w-64 object-contain" />
                        <p className="text-center">
                            <span className="text-brown-50">Remédiation Cognitive</span>
                            <br/>
                            Durée : 30min
                        </p>
                        <p className="bg-brown-50 px-12 py-2 rounded-full text-white mt-5">35€</p>
                    </div>
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 sm:my-8 z-10">
                        <img src="/assets/illustrations/hs3.png" alt="tcc" className=" w-64 object-contain" />
                        <p className="text-center">
                            <span className="text-brown-50">Habilité sociale</span>
                            <br/>
                            Durée : 1h00
                        </p>
                        <p className="bg-brown-50 px-12 py-2 rounded-full text-white mt-5">60€</p>
                    </div>
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 sm:my-8 z-10">
                        <img src="/assets/illustrations/gp1.png" alt="tcc" className=" w-64 object-contain" />
                        <p className="text-center">
                            <span className="text-brown-50">Guidance parentale</span>
                            <br/>
                            Durée : 1h00
                        </p>
                        <p className="bg-brown-50 px-12 py-2 rounded-full text-white mt-5">60€</p>
                    </div>
                    <div className="flex flex-col items-center bg-white w-full shadow-[0px_0px_10px_1px_#ECECEC] rounded-xl p-8 sm:my-8 z-10">
                        <img src="/assets/illustrations/psychoeducation.png" alt="tcc" className=" w-64 object-contain" />
                        <p className="text-center">
                            <span className="text-brown-50">Psychoéducation</span>
                            <br/>
                            Durée : 1h00
                        </p>
                        <p className="bg-brown-50 px-12 py-2 rounded-full text-white mt-5">60€</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tarifs;
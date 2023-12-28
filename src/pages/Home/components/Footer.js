const Footer = () => {
    return (
        <footer className="flex flex-1 flex-col items-center bg-brown-25">
            <img src="/assets/logo.png" alt="logo" className="w-20 h-20 object-contain" />
            <div className="flex items-center my-8">
                <p>Accueil</p>
                <p>Accueil</p>
                <p>Accueil</p>
            </div>
            <div className="flex items-center">
                <p>DC</p>
                <p>IG</p>
                <p>LI</p>
            </div>

            <div className="w-5/6 bg-white h-px my-8"/>

            <p>Copyright Neuroptimisme {new Date().getFullYear()}</p>

            
            
        </footer>
    );
}

export default Footer
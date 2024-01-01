import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-brown-25">
            <Link to="/"><img src="/assets/logo.png" alt="logo" className="w-20 h-20 object-contain" /></Link>
            <div className="flex items-center my-8">
                <button className="mx-2.5" onClick={() => window.open("https://www.instagram.com/neuroptimisme?utm_medium=copy_link", "_blank")}>
                    <img src="/assets/icons/instagram.png" alt="instagram" className=" w-11 h-11 object-contain" />
                </button>
                <button className="mx-2.5" onClick={() => window.open("https://www.doctolib.fr/psychologue/merignac/sophia-boukoulo", "_blank")}>
                    <img src="/assets/icons/doctolib.png" alt="doctolib" className=" w-11 h-11 object-contain" />
                </button>
                <button className="mx-2.5" onClick={() => window.open("https://www.linkedin.com/in/sophia-boukoulo-385680192/", "_blank")}>
                    <img src="/assets/icons/linkedin.png" alt="linkedin" className=" w-11 h-11 object-contain" />
                </button>
            </div>

            <div className="w-5/6 bg-white h-px"/>

            <p className=" my-8">Copyright Neuroptimisme {new Date().getFullYear()}</p>

            
            
        </footer>
    );
}

export default Footer
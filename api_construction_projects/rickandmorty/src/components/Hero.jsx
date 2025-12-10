import ram from "../assets/ram.png"
import img1 from "../assets/hero-bg.webp"
import { FaPlay, FaStar } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

            <img
                src={img1}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="relative z-20 h-full flex items-center px-5 md:px-16 lg:px-24">
                <div className="max-w-3xl space-y-6 animate-fade-in">

                    <div className="w-[280px] md:w-[500px] lg:w-[600px] drop-shadow-2xl">
                        <img
                            src={ram}
                            alt="Rick and Morty"
                            className="w-full drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 items-center">
                        {['Animation', 'Adventure', 'Comedy', 'Sci-Fi'].map((genre) => (
                            <span
                                key={genre}
                                className="px-3 py-1 text-xs md:text-sm bg-white/10 backdrop-blur-sm text-green-400 rounded-full border border-green-500/30 hover:bg-green-500/20 transition-colors"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>


                    <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
                        Una serie animada que muestra las hazañas de un súper científico y su no tan brillante nieto en aventuras interdimensionales llenas de humor negro y ciencia ficción.
                    </p>


                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-yellow-500/30">
                            <FaStar className="text-yellow-500 text-lg" />
                            <span className="text-white text-2xl md:text-3xl font-bold">9.1</span>
                            <span className="text-gray-400 text-sm">/10</span>
                        </div>
                        <span className="text-gray-400 text-sm">IMDb</span>
                    </div>


                    <div className="space-y-2 text-sm md:text-base">
                        <p className="text-gray-300">
                            <span className="text-green-500 font-semibold">Creadores:</span>{" "}
                            <span className="text-white">Dan Harmon, Justin Roiland</span>
                        </p>
                        <p className="text-gray-300">
                            <span className="text-green-500 font-semibold">Reparto:</span>{" "}
                            <span className="text-white">Justin Roiland, Chris Parnell, Spencer Grammer</span>
                        </p>
                    </div>


                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="group flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/50">
                            <FaPlay className="group-hover:scale-110 transition-transform" />
                            Ver Episodio 1
                        </button>
                        <button className="px-6 py-3 text-white font-semibold rounded-lg border-2 border-green-500 hover:bg-green-500/10 backdrop-blur-sm transition-all duration-200">
                            Ver Trailer
                        </button>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};

export default Hero;
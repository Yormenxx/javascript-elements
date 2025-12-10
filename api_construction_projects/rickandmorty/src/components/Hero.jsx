import ram from "../assets/ram.png"
import { FaPlay } from "react-icons/fa6";
import img1 from "../assets/hero-bg.webp"

const Hero = () => {
    return (
        <section  >
            <div className="relative z-20  w-full h-screen ">

                <img src={img1} className="absolute inset-0 w-full h-full object-cover -z-10">
                </img>

                <div className="h-full flex  flex-col justify-center">
                    <div className="w-[300px] md:w-[600px]  justify-center overflow-hidden">
                        <img src={ram} alt="rickandmorty" className="w-full" />

                    </div>
                    <div className="flex space-x-4 items-center justify-start text-neutral-400 text-[10px] ml-5  md:ml-10">
                        <span>Animation</span>
                        <span>Adventure</span>
                        <span>Comedy</span>
                    </div>

                    <p className="text-white text-sm md:text-lg ml-5 md:ml-10 mt-2 md:mt-6 w-[300px] md:w-[600px]">
                        Una seria animada que muestra las hazañas de un súper científico y su no tan brillante nieto.
                    </p>

                    <div className="text-green-500 font-bold text-xl md:text-4xl ml-5 mt-4 md:ml-10">
                        IMDb rating <span className="text-white text-2xl md:text-5xl">9.1</span>
                    </div>

                    <div>
                        <p className="text-white text-sm md:text-lg ml-5 mt-2 md:ml-10 w-[300px] md:w-[600px]"><span className="text-green-500 font-bold">Creator:</span> Dan Harmon, Justin Roiland</p>
                        <p className="text-white text-sm md:text-lg ml-5 mt-4 md:ml-10 w-[300px] md:w-[600px]"><span className="text-green-500 font-bold">Starring:</span> Justin Roiland, Chris Parnell, Spencer Grammer</p>

                    </div>

                    <div className="flex space-x-3 items-center ml-5 mt-4 md:ml-10">
                        <a href="#" className="flex items-center px-5 py-2 rounded-sm bg-green-500 text-white hover:opacity-80 ease-in-out duration-150"><FaPlay />Episode 1</a>
                        <a href="#" className="px-5 py-2 text-white rounded-sm border border-green-500 hover:opacity-80 ease-in-out duration-200">Trailer</a>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default Hero

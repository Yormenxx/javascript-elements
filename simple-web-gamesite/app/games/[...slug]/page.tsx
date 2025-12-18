import { games, categories } from "@/app/data/games";
import { FaGamepad, FaCalendarAlt, FaDesktop, FaStar, FaArrowLeft } from "react-icons/fa";
import Image from "next/image"; 
import Link from "next/link"; 

type Props = {
    params: Promise<{ slug: string[] }>
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const [category, gameSlug] = slug;
    const game = games.find(g => g.category === category && g.slug === gameSlug);

    return {
        title: game ? `${game.title} - GameDetails` : 'Game Not Found',
    };
}

export default async function GamePage({ params }: Props) {
    const { slug } = await params;
    const [category, gameSlug] = slug;

    const game = games.find(g => g.category === category && g.slug === gameSlug);

    if (!game) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
                <h2 className="text-3xl font-bold mb-4">Game not found 😢</h2>
                <Link href="/games" className="text-blue-400 hover:underline">
                    Back to games list
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 pb-12">

            
            <div className="relative w-full h-[60vh] lg:h-[70vh]">
                <Image
                    src={game.image}
                    alt={game.title}
                    fill 
                    className="object-cover"
                    priority 
                />

            
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

            
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/games"
                            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6 transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                        >
                            <FaArrowLeft className="mr-2" /> Back to library
                        </Link>

                        <div className="flex flex-col md:flex-row items-end gap-6">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight shadow-black drop-shadow-lg">
                                {game.title}
                            </h1>
                            <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg border border-yellow-500/50 backdrop-blur-md mb-2">
                                <FaStar className="mr-2 text-xl" />
                                <span className="text-xl font-bold">{game.rating}</span>
                                <span className="text-sm ml-1 opacity-75">/10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  
            <div className="max-w-7xl mx-auto px-6 mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

           
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">About the game</h2>
                    <p className="text-lg text-gray-300 leading-8">
                        {game.description}
                    </p>
                </div>


                <div className="lg:col-span-1">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm sticky top-8">
                        <h3 className="text-xl font-bold mb-6 text-white">Game Info</h3>

                        <div className="space-y-4">
                            <InfoRow
                                icon={<FaCalendarAlt className="text-blue-400" />}
                                label="Release Date"
                                value={game.releaseDate}
                            />
                            <InfoRow
                                icon={<FaGamepad className="text-purple-400" />}
                                label="Developer"
                                value={game.developer}
                            />
                            <InfoRow
                                icon={<FaDesktop className="text-green-400" />}
                                label="Platforms"
                                value={game.platforms.join(", ")}
                            />
                        </div>

                        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20 transform hover:-translate-y-1">
                            Play Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function InfoRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-center justify-between border-b border-gray-700 pb-3 last:border-0">
            <div className="flex items-center text-gray-400">
                <span className="mr-3 text-lg">{icon}</span>
                <span>{label}</span>
            </div>
            <span className="font-medium text-gray-200 text-right">{value}</span>
        </div>
    );
}
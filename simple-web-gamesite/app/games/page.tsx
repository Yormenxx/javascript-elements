import Link from "next/link";
import { games } from "../data/games";
import Image from "next/image";
export default function HomePage() {


    return (
        <div className="max-w-7xl mx-auto p-6 bg-neutral-950 text-white">

           
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold  mb-2">Explore Games</h1>
                <p className="text-lg text-gray-600">
                    Discover a variety of games to play and enjoy!
                </p>
            </div>

      
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game) => (
                    <Link
                        key={game.id}
                        href={`/games/${game.category}/${game.slug}`}
                        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                    >
                    
                        <div className="relative h-56 w-full bg-gray-200">
                            <Image
                                src={game.image}
                                alt={game.title}
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {game.title}
                                </h2>
                                <span className="flex items-center text-sm font-semibold text-yellow-500 bg-yellow-50 px-2 py-1 rounded">
                                    ⭐ {game.rating}
                                </span>
                            </div>

                            <p className="text-gray-600 line-clamp-2 text-sm flex-grow">
                                {game.description}
                            </p>

                            <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-blue-600 font-medium">
                                Play now →
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}



const Characters = ({ character }) => {


    return (
        <li className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30 hover:shadow-green-500/20 list-none flex flex-col">

            
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative p-6 flex justify-center items-center">
               
                <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-75" />

                <img
                    src={character.image}
                    alt={character.name}
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-300 z-10"
                />

                
                <div className={`absolute bottom-6 right-1/4 translate-x-4 px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20 shadow-lg z-20 flex items-center gap-1 backdrop-blur-md ${character.status === 'Alive' ? 'bg-green-500/80' :
                        character.status === 'Dead' ? 'bg-red-500/80' : 'bg-gray-500/80'
                    }`}>
                    <span className={`w-2 h-2 rounded-full bg-white ${character.status === 'Alive' ? 'animate-pulse' : ''}`}></span>
                    {character.status}
                </div>
            </div>

        
            <div className="p-5 pt-0 flex flex-col flex-grow items-center text-center z-10">
                <h2 className="text-white text-xl font-bold mb-1 group-hover:text-green-400 transition-colors">
                    {character.name}
                </h2>
                <p className="text-green-400/80 text-sm font-semibold tracking-wider uppercase mb-6">
                    {character.species}
                </p>

         
                <div className="w-full grid grid-cols-2 gap-2 border-t border-white/10 pt-4 mt-auto">
                    <div className="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Gender</span>
                        <span className="text-gray-200 font-medium">{character.gender}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Location</span>
                        <span className="text-gray-200 font-medium truncate w-full text-center">
                            {character.location?.name?.split(' ')[0] || 'Unknown'}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Characters

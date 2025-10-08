import {useState}from 'react'

const SearchBar = ({onSearch}) => {

     const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(searchTerm.trim())
    }

    const handleClear = () => {
        setSearchTerm("")
        onSearch("")
    }
  return (
       <div className="w-full max-w-2xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="relative">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar personajes por nombre..."
                            className="w-full px-4 py-3 pl-12 bg-neutral-800 text-white rounded-lg border-2 border-neutral-700 focus:border-green-500 focus:outline-none transition-colors"
                        />
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Buscar
                    </button>

                    
                        <button
                            type="button"
                            onClick={handleClear}
                            className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            Limpiar
                        </button>
                    
                </div>
            </form>
        </div>
  )
}

export default SearchBar

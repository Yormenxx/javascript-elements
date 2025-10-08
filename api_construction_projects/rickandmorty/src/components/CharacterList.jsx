import { useEffect, useState, CSSProperties } from "react"
import Characters from "./Characters"
import NavPage from "./NavPage"
import Hero from "./Hero"
import Loading from "./Loading"
import { getCharacters} from "../api/rickAndMorty"
import SearchBar from "./SearchBar"

const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("")
    const [totalPages, setTotalPages] = useState(1)


    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

     const handleSearch = (query) => {
        setSearchQuery(query)
        setPage(1) 
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {

        setIsLoading(true);

        async function recivingData() {

            const promises = [];


            const fetchingData = getCharacters(searchQuery,page)
                .then(data => {
                    setCharacters(data.results || [])
                    setTotalPages(data.info?.pages || 1);
                })
                .catch(error => {
                    console.error("Error al obtener personajes:", error);
                    setCharacters([]);
                    setTotalPages(1);
                })

            // const fetchingData = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            //     .then(res => {
            //         if (!res.ok) {
            //             throw new Error(`Error en la respuesta: ${res.status}`);
            //         }
            //         return res.json();
            //     })
            //     .then(data => {
            //         setCharacters(data.results)
            //     })
            promises.push(fetchingData);


            promises.push(delay(1000));



            try {
                await Promise.all(promises);
            } catch (error) {
                console.log("Ocurio un error", error);
                setCharacters([]);
            } finally {
                setIsLoading(false);
            }
        }
        recivingData();
    }, [page,searchQuery])
    return (
        <section className="bg-neutral-900">

            {isLoading && <Loading />}
            {
                !isLoading &&

                <article className="opacity-100 transition-opacity duration-500 ease-in-out">
                    <Hero />
                    <SearchBar onSearch={handleSearch}/>
                    <div>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 md:p-20">
                            {
                                characters.map(character => (
                                    <Characters key={character.id} character={character} />
                                ))
                            }
                        </ul>
                    </div>

                    <NavPage page={page} setPage={handlePageChange} totalPages={totalPages}/>
                </article>



            }
        </section>


    )
}

export default CharacterList

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Characters from "./Characters"
import NavPage from "./NavPage"
import Hero from "./Hero"
import Loading from "./Loading"
import { getCharacters } from "../api/rickAndMorty"
import SearchBar from "./SearchBar"

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [totalPages, setTotalPages] = useState(1)

    const handlePageChange = (newPage) => {
        setPage(newPage)
     
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSearch = (query) => {
        setSearchQuery(query)
        setPage(1)
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    useEffect(() => {
        setIsLoading(true)

        async function recivingData() {
            const promises = []

            const fetchingData = getCharacters(searchQuery, page)
                .then(data => {
                    setCharacters(data.results || [])
                    setTotalPages(data.info?.pages || 1)
                })
                .catch(error => {
                    console.error("Error al obtener personajes:", error)
                    setCharacters([])
                    setTotalPages(1)
                })

            promises.push(fetchingData)
            promises.push(delay(1000))

            try {
                await Promise.all(promises)
            } catch (error) {
                console.log("Ocurrió un error", error)
                setCharacters([])
            } finally {
                setIsLoading(false)
            }
        }
        recivingData()
    }, [page, searchQuery])

  
    const containerVariants = {
        visible: {
            transition: {
        
                staggerChildren: 0.1, 
                delayChildren: 0.2
            }
        }
    }


    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },

        visible: (index) => ({ 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
                delay: index * 0.1 
            }
        }),
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.3
            }
        }
    }


    const heroVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }


    const searchBarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3
            }
        }
    }

    return (
        <section className="bg-neutral-900 min-h-screen">
            <AnimatePresence mode="wait">
                {isLoading && <Loading key="loading" />}
                
                {!isLoading && (
                    <motion.article 
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Hero />
                        </motion.div>

                        <motion.div
                            variants={searchBarVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <SearchBar onSearch={handleSearch} />
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                      
                            key={page + searchQuery}
                        >
                            <motion.ul 
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 md:p-12 auto-rows-fr"
                            >
                                <AnimatePresence>
                                    {characters.map((character, index) => (
                                        <motion.li
                                            key={character.id}
                                            variants={cardVariants}
                                            custom={index}
                                         
                                            initial="hidden"
                                            whileInView="visible"
                                            exit="exit"
                                        
                                            viewport={{ once: true, amount: 0.2 }}
                                            layout
                                        >
                                            <Characters character={character} />
                                        </motion.li>
                                    ))}
                                </AnimatePresence>
                            </motion.ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <NavPage 
                                page={page} 
                                setPage={handlePageChange} 
                                totalPages={totalPages} 
                            />
                        </motion.div>
                    </motion.article>
                )}
            </AnimatePresence>
        </section>
    )
}

export default CharacterList
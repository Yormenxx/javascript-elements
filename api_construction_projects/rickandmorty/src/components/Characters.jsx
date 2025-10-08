
const Characters = ({ character }) => {


    return (
        <li className=" text-white flex flex-col items-center justify-center text-center" >

            <img src={character.image} alt={character.name} className="rounded-full w-[150px]" />
            <h2 className="text-green-500 text-xl font-bold">{character.name}</h2>
            <p> <span className="text-neutral-300">Status: </span> {character.status}</p>
            <p> <span className="text-neutral-300">Gender: </span>{character.gender}</p>
            {/* <p> <span className="text-neutral-300 ">Location: </span> {character.location.name}</p> */}
            <p> <span className="text-neutral-300">Species:</span> {character.species}</p>
        </li>
    )
}

export default Characters



const NavPage = ({ page, setPage }) => {

    const goToNextPage = () => {
        setPage(page + 1);
        window.scrollTo(0, 0);
    }

    const goToPrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            window.scrollTo(0, 0);
        }
    }



    return (
        <div className="text-white flex items-center justify-evenly pb-10">
            <p className="text-xl font-bold">Page {page}</p>
            <div className="flex space-x-4 justify-center">
                <button onClick={goToPrevPage} className="px-4 py-2 bg-white text-neutral-900 font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition duration-150">Prev page</button>
                <button onClick={goToNextPage} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150">Next Page</button>
            </div>

        </div>
    )
}

export default NavPage
 
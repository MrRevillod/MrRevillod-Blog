
export const PagesBar = ({ page, setPage, maxOfTabs, prevImg, nextImg }) => {

    const prevPage = () => {
        page > 1 ? setPage(page - 1) : setPage(page)
    }

    const nextPage = () => {
        page < maxOfTabs ? setPage(page + 1) : setPage(page)
    }

    return (
        <>
            <div className='flex justify-center items-center flex-row gap-4 mt-10 mb-4 mx-0'>
                <button key="prev-btn" className='m-0 p-1 rounded-lg flex justify-center items-center bg-zinc-800 cursor-pointer' onClick={prevPage}>
                    <img src={prevImg} alt="<" width={20} />
                </button>

                <p className='font-bold'>{page} de {maxOfTabs}</p>

                <button key="next-btn" className='m-0 p-1 rounded-lg flex justify-center items-center bg-zinc-800 cursor-pointer' onClick={nextPage}>
                    <img src={nextImg} alt=">" width={20} />
                </button>
            </div >
        </>
    )
}
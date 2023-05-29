export default function SearchFilter() {
    return (
        <>
            <div className="filter-block-container">
                <div className="input-search-container">
                    <div className="full-search-container">
                        <span> <img src="src\assets\Images\Icons\search.png" alt="" /></span>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>

                <div className='filter-container-button'>
                    <button>
                        <img src="src\assets\Images\Icons\sort.png" alt="" />
                    </button>
                </div>

            </div>

        </>
    )
}

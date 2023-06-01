// import React, { useState } from 'react';

// export default function SearchFilter() {
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     const openModal = () => {
//         setModalIsOpen(true);
//     }

//     const closeModal = () => {
//         setModalIsOpen(false);
//     }

//     return (
//         <>
//             <div className="filter-block-container">
//                 <div className="input-search-container">
//                     <div className="full-search-container">
//                         <span><img src="Images/Icons/search.svg" alt="" /></span>
//                         <input type="search" placeholder='Search' />
//                     </div>
//                 </div>

//                 <div className='filter-container-button'>
//                     <button type="button" onClick={openModal}>
//                         <img src="/Images/Icons/sort.svg" alt="" />
//                     </button>
//                 </div>
//             </div>

//             {modalIsOpen && (
//                 <div className="modal-overlay">
//                     <div className="modal">
//                         <div className='box-close-control'>
//                             <button className="close-button" onClick={closeModal}>
//                                 <span>&times;</span>
//                             </button>
//                         </div>

//                         <div className='check-box-container'>
//                         <div className="numeric-filter">
//                             <div className='titulo-filter-container'>
//                                 <h3>Filtrar por numero</h3>
//                             </div>

//                             <div className='input-checkbox-container'>

//                             </div>
//                             <div className='separador'></div>
//                         </div>

//                         <div className="name-filter">
//                             <div className='titulo-filter-container'>
//                                 <h3>Filtrar por nombre</h3>
//                             </div>

//                             <div className='input-checkbox-container'>

//                             </div>
//                             <div className='separador'></div>
//                         </div>

//                         <div className="type-filter">
//                             <div className='titulo-filter-container'>
//                                 <h3>Filtrar por tipo</h3>
//                             </div>










//                             <div className='type-container'>







//                             </div>
//                             <div className='separador'></div>
//                         </div>
//                         </div>






//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }


import React, { useState, useEffect } from 'react';

export default function SearchFilter() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const words = ['All', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Normal', 'Grass', 'Ground', 'Ice', 'Posion', 'Psychic', 'Rock', 'Steel', 'Water'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const typeColors = {
        All: '#212121',
        Bug: '#A7B723',
        Dark: '#7557AC',
        Dragon: '#7037FF',
        Electric: '#F9CF30',
        Fairy: '#E69EAC',
        Fighting: '#C12239',
        Fire: '#F57D31',
        Flying: '#A891EC',
        Ghost: '#70559B',
        Normal: '#AAA67F',
        Grass: '#74CB48',
        Ground: '#DEC16B',
        Ice: '#9AD6DF',
        Posion: '#A43E9E',
        Psychic: '#FB5584',
        Rock: '#B69E31',
        Steel: '#B7B9D0',
        Water: '#6493EB',
    };

    return (
        <>
            <div className="filter-block-container">
                <div className="input-search-container">
                    <div className="full-search-container">
                        <span><img src="Images/Icons/search.svg" alt="" /></span>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>

                <div className='filter-container-button'>
                    <button type="button" onClick={openModal}>
                        <img src="/Images/Icons/sort.svg" alt="" />
                    </button>
                </div>
            </div>

            {modalIsOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className='box-close-control'>
                            <button className="close-button" onClick={closeModal}>
                                <span>&times;</span>
                            </button>
                        </div>

                        <div className='check-box-container'>
                            <div className="numeric-filter">
                                <div className='titulo-filter-container'>
                                    <h3>Filtrar por numero</h3>
                                </div>

                                <div className='input-checkbox-container'>
                                    <input name="cssCheckbox" id="numberFilter" type="checkbox" class="css-checkbox" />
                                    <label for="numberFilter">Activo</label>
                                </div>





                                <div className='separador'></div>
                            </div>

                            <div className="name-filter">
                                <div className='titulo-filter-container'>
                                    <h3>Filtrar por nombre</h3>
                                </div>

                                <div className='input-checkbox-container'>
                                <input name="cssCheckbox" id="textFilter" type="checkbox" class="css-checkbox" />
                                    <label for="textFilter">Activo</label>

                                </div>
                                <div className='separador'></div>
                            </div>

                            <div className="type-filter">
                                <div className='titulo-filter-container'>
                                    <h3>Filtrar por tipo</h3>
                                </div>

                                <div className='type-container'>
                                    <div className="carousel-container">
                                        <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                            {words.map((word, index) => (
                                                <a key={index} href="#" className={`carousel-item ${index === currentIndex ? 'active' : ''}`} style={{ backgroundColor: typeColors[word] }}>
                                                    {word}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

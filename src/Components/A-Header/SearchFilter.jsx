import React, { useState } from 'react';

const TypeContainer = ({ activeTags, handleTagContainerClick }) => {
  const tagColors = {
    all: '#212121',
    bug: '#A7B723',
    dark: '#7557AC',
    dragon: '#7037FF',
    electric: '#F9CF30',
    fairy: '#E69EAC',
    fighting: '#C12239',
    fire: '#F57D31',
    flying: '#A891EC',
    ghost: '#70559B',
    normal: '#AAA67F',
    grass: '#74CB48',
    ground: '#DEC16B',
    ice: '#9AD6DF',
    poison: '#A43E9E',
    psychic: '#FB5584',
    rock: '#B69E31',
    steel: '#B7B9D0',
    water: '#6493EB',
  };

  const handleTagClick = (tag) => {
    handleTagContainerClick(tag);
  };

  return (
    <div className="type-container">
      <div className="tags-container">
        {Object.keys(tagColors).map((tag) => (
          <h6
            key={tag}
            id={tag}
            className={`type-tag ${activeTags.includes(tag) ? 'active' : ''}`}
            style={{ backgroundColor: activeTags.includes(tag) ? tagColors[tag] : '' }}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default function SearchFilter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('/Images/Icons/sort.svg');
  const [activeTags, setActiveTags] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.id === 'nameFilter' && event.target.checked) {
      setSelectedIcon('/Images/Icons/name.svg');
    } else if (event.target.id === 'numberFilter' && event.target.checked) {
      setSelectedIcon('/Images/Icons/tag.svg');
    } else {
      setSelectedIcon('/Images/Icons/sort.svg');
    }
  };

  const handleTagContainerClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
    } else {
      if (activeTags.length < 2 && tag !== 'all') {
        setActiveTags([...activeTags, tag]);
      } else if (tag === 'all') {
        setActiveTags([tag]);
      }
    }
  };

  return (
    <>
      <div className="filter-block-container">
        <div className="input-search-container">
          <div className="full-search-container">
            <span>
              <img src="Images/Icons/search.svg" alt="" />
            </span>
            <input type="search" placeholder="Search" />
          </div>
        </div>

        <div className="filter-container-button">
          <button type="button" onClick={openModal}>
            <img src={selectedIcon} alt="" />
          </button>
        </div>
      </div>

      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="box-close-control">
              <button className="close-button" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>

            <div className="check-box-container">
              <div className="numeric-filter">
                <div className="titulo-filter-container">
                  <h3>Filtrar por número</h3>
                </div>

                <div className="input-checkbox-container">
                  <input
                    name="cssCheckbox"
                    id="numberFilter"
                    type="checkbox"
                    className="css-checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="numberFilter">Activo</label>
                </div>
                <div className="separador"></div>
              </div>

              <div className="name-filter">
                <div className="titulo-filter-container">
                  <h3>Filtrar por nombre</h3>
                </div>

                <div className="input-checkbox-container">
                  <input
                    name="cssCheckbox"
                    id="nameFilter"
                    type="checkbox"
                    className="css-checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="nameFilter">Activo</label>
                </div>
                <div className="separador"></div>
              </div>

              <div className="type-filter">
                <div className="titulo-filter-container">
                  <h3>Filtrar por tipo</h3>
                </div>

                <TypeContainer activeTags={activeTags} handleTagContainerClick={handleTagContainerClick} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

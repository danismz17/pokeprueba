import { icon } from '../PokeCard.components/icons.js'

// Contenedor externo de la PokeCard
export const PkCardContainer = ({ children }) => {
  return (
    <>
      <div className="details__container bg-color">
        <img className='bg-card' src={icon["pk_bg"]} alt="background Pokeball" />
        {children}
      </div>
    </>
  );
};
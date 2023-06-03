import { icon } from '../PokeCard.components/icons.js'

// Imagen central de la PokeCard
export const PkCardPicture = ({ img }) => {
  return (
    <div className="details__picture">

      {/* Falta funcion para disminuir de numero de pokemon */}
      <div className="details__chevron">
        <img
          src={icon.chevron["left"]}
          alt="to left"
          className="details__chevron_left"
        />
      </div>

      {/* imagen central  */}
      <div className="details__img">
        <img
          src={img}
          alt="Imagen del Pokemon"
          className="details__img-size"
        />
      </div>

      {/* Falta funcion para avanzar de numero de pokemon */}
      <div className="details__chevron">
        <img
          src={icon.chevron.right}
          alt="to right"
          className="details__chevron_right"
        />
      </div>
    </div>
  );
};
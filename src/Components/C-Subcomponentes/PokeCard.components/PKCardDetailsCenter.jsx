import { icon } from '../PokeCard.components/icons.js'

// Parte central de los detalles de la PokeCard
export const PKCardDetailsCenter = ({ weight, height, moves, text }) => {
  return (
    <>
      <div className="details__atributes">
        <div className="details__atr_weight">
          <div className='details__atr_weight-icon'>
            <img
              src={icon.weight}
              alt="Weight icon"
              className='Z-icon'
            />
            <span>{weight / 10} kg</span>
          </div>
          <span className='details__atributes_alt'>Weight</span>
        </div>

        <img src={icon.divider} alt="" />

        <div className="details__atr_height">
          <div className="details__atr_height-icon">
            <img src={icon.height} alt="H"
              className='Z-icon' />
            <span>{height / 10} m</span>
          </div>
          <span className='details__atributes_alt'>Height</span>
        </div>

        <img src={icon.divider} alt="" />

        <div className="details__atr_moves">
          <ul className="details__atr_moves-move">
            {moves.slice(0, 2).map((row, index) => (
              <li key={index} className="">{row.move.name}</li>
            ))}
          </ul>
          <span className='details__atributes_alt'>Moves</span>
        </div>

      </div>

      <p className="details__about_text">
        {text}
      </p>
    </>
  );
};
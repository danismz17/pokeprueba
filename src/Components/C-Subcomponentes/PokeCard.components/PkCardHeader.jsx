import { icon } from '../PokeCard.components/icons.js'
import { useNavigate } from "react-router-dom";
import { addZeros } from "../../Ohters/Function.js";

// Parte superior de la PokeCard 
export const PkCardHeader = ({ name, number }) => {
    // Funcion para regresar a la " home"
    let navigate = useNavigate();
    const handleArrowClick = () => {
      const url = `/`;
      navigate(url)
    }
  
    return (
      <div className="details__header">
        <img
          src={icon["arrow_left"]}
          alt="Arrow to the Left"
          className='details__header_arrow'
          onClick={handleArrowClick}
        />
  
        <h1 className='details__header_name'>
          {name ? (<> {name} </>) : (<i>Error</i>)}{" "}
        </h1>
        <span className='details__header_number'>
          {number ? (<> #{addZeros(number)} </>) : (<i>Error</i>)}{" "}
        </span>
      </div>
    );
  };
// Parte superior de los detalles de la PokeCard
export const PKCardDetailsTop = () => {
    return (
      <div className='details__card_type'>
        <div className='details__type'>
  
          {/* Cambia segun el tipo de pk */}
          <span className={`type f-bg-fire`}>
            fire
          </span>
          {/* <span className={`type fire`}>dragon</span> */}
  
        </div>
        <h3 className="details__about f-fire">About</h3>
      </div>
    );
  };
  
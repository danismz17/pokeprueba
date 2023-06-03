const icon = {
  pk_bg: "/Images/Icons/bg-pokeball.svg",
  arrow_left: "/Images/Icons/arrow-left.svg",
  chevron: {
    left: "/Images/Icons/chevron_left.svg",
    right: "/Images/Icons/chevron_right.svg",
  },
  weight: "/Images/Icons/weight.svg",
  height: "/Images/Icons/height.svg",
  divider: "/Images/Icons/Divider.svg",
  divider96: "/Images/Icons/Divider96.svg",

}

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

// Parte superior de la PokeCard 
export const PkCardHeader = ({ name, number }) => {
  // Agrega ceros al inicio de un número si corresponde.
  const addZeros = (numero) => {
    const numeroStr = numero.toString();
    return numeroStr.length < 4 ? numeroStr.padStart(3, '0') : numeroStr;
  }

  return (
    <div className="details__header">
      <img
        src={icon["arrow_left"]}
        alt="Arrow to the Left"
        className='details__header_arrow'
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

// Contenedor de los detalles de la PokeCard
export const PkCardDetailsContainer = ({ children }) => {
  return (
    <div className="details__card">
      {children}
    </div>
  );
};

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

// Contenedor de los stats de la PokeCard
export const PkCardStatsContainer = ({ children }) => {
  return (
    <>
      <h3 className="stats__title f-fire">Base Stats</h3>
      <div className="stats__container">
        {children}
      </div>
    </>
  );
};

// Stats de la PokeCard
export const PkCardStats = ({ hp, atk, def, satk, sdef, spd }) => {
  // Agrega ceros al inicio de un número si corresponde.
  const addZeros = (numero) => {
    const numeroStr = numero.toString();
    return numeroStr.length < 4 ? numeroStr.padStart(3, '0') : numeroStr;
  }

  return (
    <div className="stats__box">
      <div className="stats__text">
        <span className='stats__text'>HP</span>
        <span className='stats__text'>ATK</span>
        <span className='stats__text'>DEF</span>
        <span className='stats__text'>SATK</span>
        <span className='stats__text'>SDEF</span>
        <span className='stats__text'>SPD</span>
      </div>

      <img src={icon.divider96} alt="" />

      <div className='stats_counter'>
        <span className='stats__text_counter'>{addZeros(hp)}</span>
        <span className='stats__text_counter'>{addZeros(atk)}</span>
        <span className='stats__text_counter'>{addZeros(def)}</span>
        <span className='stats__text_counter'>{addZeros(satk)}</span>
        <span className='stats__text_counter'>{addZeros(sdef)}</span>
        <span className='stats__text_counter'>{addZeros(spd)}</span>
      </div>


      {/* Corregir ProgressBar */}
      <div className="stats_progres">
        <div className='progres-bar'>
          <div className='progres-bar-charge progres-1'></div>
        </div>
        <div className='progres-bar'>
          <div className='progres-bar-charge progres-2'></div>
        </div>
        <div className='progres-bar'>
          <div className='progres-bar-charge progres-3'></div>
        </div>
        <div className='progres-bar'>
          <div className='progres-bar-charge progres-4'></div>
        </div>
        <div className='progres-bar'>
          <div className='progres-bar-charge progres-5'></div>
        </div>
        <div className='progres-bar'>
          <div className='progres-bar-charge progres-6'></div>
        </div>
      </div>
    </div>
  );
}


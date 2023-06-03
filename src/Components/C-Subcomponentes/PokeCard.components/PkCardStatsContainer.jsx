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
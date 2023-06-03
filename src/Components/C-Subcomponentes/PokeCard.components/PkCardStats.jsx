import { icon } from '../PokeCard.components/icons.js'
import { addZeros } from "../../Ohters/Function";

// Stats de la PokeCard
export const PkCardStats = ({ hp, atk, def, satk, sdef, spd }) => {
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
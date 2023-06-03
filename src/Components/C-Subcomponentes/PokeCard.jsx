import '../../Styles/PokeCard.css'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { PkCardContainer } from './PokeCard.components/PkCardContainer';
import { PkCardHeader } from './PokeCard.components/PkCardHeader';
import { PkCardPicture } from './PokeCard.components/PkCardPicture';
import { PkCardDetailsContainer } from './PokeCard.components/PkCardDetailsContainer';
import { PKCardDetailsTop } from './PokeCard.components/PKCardDetailsTop';
import { PKCardDetailsCenter } from './PokeCard.components/PKCardDetailsCenter';
import { PkCardStatsContainer } from './PokeCard.components/PkCardStatsContainer';
import { PkCardStats } from './PokeCard.components/PkCardStats';

const PokeCard = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonById = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const responseOther = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
      const responseData = await response.json();
      const responseOtherData = await responseOther.json();

      setPokemon({ ...responseData, ...responseOtherData });
    } catch (error) {
      console.log('Ha ocurrido un error: ', error);
    } finally {
      setIsLoading(false);
      console.log("PokeCard: carga de datos completa");
    }
  };

  useEffect(() => {
    getPokemonById();
  }, []);
  return (
    <>
      {isLoading && (
        <p>Pikachu corriendo - Loading...</p>
      )}
      {pokemon && (
        <PkCardContainer>
          <PkCardHeader
            name={pokemon.name}
            number={pokemon.id}
          />
          <PkCardPicture
            img={pokemon.sprites["other"]["official-artwork"]["front_default"]}
          />
          <PkCardDetailsContainer>
            <PKCardDetailsTop />
            <PKCardDetailsCenter
              weight={pokemon.weight}
              height={pokemon.height}
              moves={pokemon.moves}

              // Importanete! Hay que tener cuidado porque no todos lo textos estan en ingles, e inclusive hay veces que no existe el texto.
              // Se debera poner un operador ternario.
              text={pokemon["flavor_text_entries"][10]["flavor_text"]}
            // textES={pokemon["flavor_text_entries"][26]["flavor_text"]}
            />

            <PkCardStatsContainer>
              <PkCardStats
                hp={pokemon["stats"][0]["base_stat"]}
                atk={pokemon["stats"][1]["base_stat"]}
                def={pokemon["stats"][2]["base_stat"]}
                satk={pokemon["stats"][3]["base_stat"]}
                sdef={pokemon["stats"][4]["base_stat"]}
                spd={pokemon["stats"][5]["base_stat"]}
              />
            </PkCardStatsContainer>
          </PkCardDetailsContainer>
        </PkCardContainer>
      )}
    </>
  );
};

export default PokeCard;

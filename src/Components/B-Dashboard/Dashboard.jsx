import React from 'react';
import { MiniCards } from './MiniCards';
import { Outlet } from 'react-router-dom';


export default function Dashboard({ pokemonList, nextPageEffect }) {

  function handleScroll() {
    var scrollableDiv = document.getElementById('myWindows');
    var isScrolledToBottom = scrollableDiv.scrollTop + scrollableDiv.clientHeight === scrollableDiv.scrollHeight;

    if (isScrolledToBottom) {
      nextPageEffect()
      console.log("Carga")
    }
  }

  return (
    <main
      onScroll={handleScroll}
      id='myWindows'
    >
      {pokemonList.map((pokemon, index) => (
        <MiniCards
          key={index}
          name={pokemon.name}
          number={pokemon.id}
          img={pokemon.sprites["other"]["official-artwork"]["front_default"]}
        />
      ))}

      <Outlet />
    </main>
  );
}
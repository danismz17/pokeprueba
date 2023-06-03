// CSS
import './../Styles/App.css'
// Componentes
import Header from '../Components/A-Header/Header'
import Dashboard from '../Components/B-Dashboard/Dashboard'

// Manejo de estados
import { useEffect, useState } from 'react'

function Root() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Comienza en 1, para mantener el valor inicial del offset en 0.
  const pageSize = 20; // Numero de pokemons por pagina

  const [isLoading, setIsLoading] = useState(false);

  const getPokemons = async (page) => { // 'page' se utiliza para calcular el offset en la URL, el cual indica en que pagina se encuentra
    try {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * pageSize}&limit=20`);
      const data = await response.json();
      const pokemonsData = await Promise.all(
        data.results.map(async (item) => {
          const response = await fetch(`${item.url}`);
          return await response.json();
        })
      );
      setPokemonList(prevList => [...prevList, ...pokemonsData]); // Concatenar los nuevos datos con los previos
    } catch (error) {
      console.log('Ha ocurrido un error: ', error);
    } finally {
      setIsLoading(false);
      console.log('Root: carga de datos completa');
    }
  };

  // Funcion para agregar una nueva pagina
  const nextPage = () => {
    // Aumenta en 1 el numero de pagina ('page') solicitando que se muestren mas pokemons, luego para 
    // que se renderizen los cambios se lo pasa al useEffect.
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 2000);
  };

  useEffect(() => {
    getPokemons(currentPage);
  }, [currentPage]);

  return (
    <>
      {isLoading &&
        <p>Pikachu corriendo - Loading...</p>// Borrar esto. 
      }
      <div className="web-container">
        <Header />
        <Dashboard pokemonList={pokemonList} nextPageEffect={nextPage} />
      </div>
    </>
  )
}

export default Root;
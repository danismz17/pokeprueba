import React from 'react';
import { MiniCards } from './MiniCards';

export default function Dashboard(props) {

  let valorSearch = "Pr"


  let arrayPrueba = [
    { nombre: "Joaco" },
    { nombre: "Beto" },
    { nombre: "Clara" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
    { nombre: "Prueba4" },
    { nombre: "Prueba5" },
  ];

  return (

    <main>

      {arrayPrueba.map((item, index) => (

        item.nombre.includes(valorSearch) ?
          <MiniCards
            key={index}
            nombre={item.nombre} 
          /> : ""

        // traer el valor search para este componente

      ))}
    </main>
  );
}

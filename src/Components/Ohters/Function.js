// Agrega ceros al inicio de un número si corresponde.
export const addZeros = (numero) => {
  const numeroStr = numero.toString();
  return numeroStr.length < 4 ? numeroStr.padStart(3, "0") : numeroStr;
};


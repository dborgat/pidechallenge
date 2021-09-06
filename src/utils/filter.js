//La idea de esta funcion es que puedas filtrar productos por categorias.
const filterProducts = (obj, n) => {
  const arr = [];
  for (const key in obj) {
    if (obj[key].idCategoria === n) arr.push(obj[key]);
  }
  return arr;
};
export default filterProducts;

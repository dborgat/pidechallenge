//La idea de esta funcion es poder tener el json que está alojado en la carpeta public.
const getData = (fn) => {
  fetch("Test_Data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((myJson) => fn(myJson));
};

export default getData;

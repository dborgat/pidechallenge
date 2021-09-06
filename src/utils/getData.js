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

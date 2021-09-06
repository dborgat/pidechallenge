import React, { useEffect, useState } from "react";
import getData from "../../utils/getData";
import styles from "./tabs.module.css";
import SwipeableTabs from "../../components/tabs";

const Sections = () => {
  const [info, setInfo] = useState(null);
  const [products, setProducts] = useState(null);

  //cuando se monta el componente hago un fetch para poder setear la info del json en un estate local.
  useEffect(() => {
    getData(setInfo);
  }, []);

  //cuando tengo la info seteo los productos en un state local y luego se lo paso por props en la linea 22.
  useEffect(() => {
    info && setProducts(info.Productos);
  }, [info]);

  return (
    <div className={styles.mainContainer}>
      <SwipeableTabs products={products}/>
    </div>
  );
};

export default Sections;

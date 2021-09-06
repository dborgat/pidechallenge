import React, { useEffect, useState } from "react";
import getData from "../../utils/getData";
import styles from "./tabs.module.css";
import SwipeableTabs from "../../components/tabs";

const Sections = () => {
  const [info, setInfo] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getData(setInfo);
  }, []);

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

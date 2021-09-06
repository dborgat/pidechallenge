import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@tarragon/swipeable-tabs";
import styles from "../containers/Tabs/tabs.module.css";
import FoodCard from "./foodCard";
import filterProducts from "../utils/filter";

const SwipeableTab = ({ products }) => {
  const [selectedTab, setSelectedTab] = useState("SANDWICH");
  const [sandwich, setSandwich] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [fritas, setFritas] = useState([]);
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    setSandwich(filterProducts(products, 9));
    setPizzas(filterProducts(products, 7));
    setFritas(filterProducts(products, 83));
    setCombos(filterProducts(products, 102));
  }, [products]);

  const changeTab = (updatedTab) => {
    return setSelectedTab(updatedTab.label);
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={changeTab}
      tabBarCSS={"background-color: whitesmoke"}
      tabItemCSS={"color:gray"}
      styleProps={{ activeInkBarColor: "green" }}
    >
      <Tab label="SANDWICH" key={0}>
        <div className={styles.cardsMainContainer}>
          {sandwich?.map(
            ({
              descriProducto,
              imagenProducto,
              nombreProducto,
              precioProducto,
            },i) => (
              <FoodCard
                descriProducto={descriProducto}
                imagenProducto={imagenProducto}
                nombreProducto={nombreProducto}
                precioProducto={precioProducto}
                key={i}
              />
            )
          )}
        </div>
      </Tab>
      <Tab label="PIZZAS" key={1}>
        <div className={styles.cardsMainContainer}>
          {pizzas?.map(
            ({
              descriProducto,
              imagenProducto,
              nombreProducto,
              precioProducto,
            },i) => (
              <FoodCard
                descriProducto={descriProducto}
                imagenProducto={imagenProducto}
                nombreProducto={nombreProducto}
                precioProducto={precioProducto}
                key={i}
              />
            )
          )}
        </div>
      </Tab>
      <Tab label="FRITAS" key={2}>
        <div className={styles.cardsMainContainer}>
          {fritas?.map(
            ({
              descriProducto,
              imagenProducto,
              nombreProducto,
              precioProducto,
            },i) => (
              <FoodCard
                descriProducto={descriProducto}
                imagenProducto={imagenProducto}
                nombreProducto={nombreProducto}
                precioProducto={precioProducto}
                key={i}
              />
            )
          )}
        </div>
      </Tab>
      <Tab label="COMBOS" key={3}>
        <div className={styles.cardsMainContainer}>
          {combos?.map(
            ({
              descriProducto,
              imagenProducto,
              nombreProducto,
              precioProducto,
            },i) => (
              <FoodCard
                descriProducto={descriProducto}
                imagenProducto={imagenProducto}
                nombreProducto={nombreProducto}
                precioProducto={precioProducto}
                key={i}
              />
            )
          )}
        </div>
      </Tab>
    </Tabs>
  );
};

export default SwipeableTab;


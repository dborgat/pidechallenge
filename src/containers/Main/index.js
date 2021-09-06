import React from "react";
import styles from "./index.module.css";
import Navbar from "../Navbar";
import Sections from "../Tabs";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/pide-cloud.appspot.com/o/banner_comercios%2FPidePCREPortada2021.jpg?alt=media&token=763ac456-67e4-476d-9d2f-ddcc99a26764"
        alt="logo"
        className={styles.imgFoodCard}
      />
      <Sections />
    </div>
  );
};

export default App;

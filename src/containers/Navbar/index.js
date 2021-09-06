import React from "react";
import styles from "./navbar.module.css"
import {AiOutlineMenu, AiOutlineShopping} from "react-icons/ai";


const navbar = () => {
  return <div className={styles.mainContainer}>
    <AiOutlineMenu className={styles.menuIcon}/>
    <AiOutlineShopping className={styles.shopIcon}/>
  </div>;
};

export default navbar;
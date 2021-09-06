import React from "react";
import styles from "../containers/Tabs/tabs.module.css";
import {
  AiOutlineShareAlt,
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillHeart,
} from "react-icons/ai";

const FoodCard = ({descriProducto, imagenProducto, nombreProducto, precioProducto}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          src={`${imagenProducto}`}
          alt="comida"
          className={styles.imgFoodCard}
        ></img>
      </div>
      <div className={styles.textContainer}>
        <div>
          <p className={styles.title}>{nombreProducto}</p>
        </div>
        <div>
          <p className={styles.description}>
            {descriProducto}
          </p>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.price}>{`$${precioProducto}`}</p>
        </div>
      </div>
      <div className={styles.likeContainer}>
        <div className={styles.downIconContainer}>
          <AiOutlineMinus className={styles.minusIcoin}/>
        </div>
        <div className={styles.heartIconContainer}>
          <AiFillHeart className={styles.heartIcoin}/>
        </div>
      </div>
      <div className={styles.shareContainer}>
        <div className={styles.plusIconContainer}>
          <AiOutlinePlus className={styles.plusIcoin}/>
        </div>
        <div className={styles.shareIconContainer}>
          <AiOutlineShareAlt className={styles.shareIcoin}/>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

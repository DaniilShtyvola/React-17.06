import React, { FC } from 'react';
import styles from './Card.module.css';

interface CardProps {
  cost: string;
  description: string;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ cost, description, imageUrl }) => (
  <div className={styles.Card}>
    <div>
      <div className={styles.image}>
        <img src={imageUrl} />
      </div>
      <p>{description}</p>
    </div>
    <div>
      <div className={styles.bottom}>
        <h4>{cost}</h4>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
);

export default Card;

import React, { FC } from 'react';
import Stars from '../Stars/Stars';
import styles from './RichCard.module.css';

interface RichCardProps {
  cost: string;
  description: string;
  imageUrl: string;
  stars: number;
}

const RichCard: FC<RichCardProps> = ({ cost, description, imageUrl, stars }) => (
  <div className={styles.RichCard}>
    <div className={styles.top}>
      <div className={styles.image}>
        <img src={imageUrl}/>
      </div>
      <h4>{cost}</h4>
      <Stars rating={stars} />
      <p>{description}</p>
    </div>
    <div className={styles.button}>
      <button>КУПИТЬ</button>
    </div>
  </div>
);

export default RichCard;

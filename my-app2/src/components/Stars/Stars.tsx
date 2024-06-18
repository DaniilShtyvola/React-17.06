import React, { FC } from 'react';
import styles from './Stars.module.css';

interface StarsProps {
  rating: number;
}


const Stars: FC<StarsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i className={index < rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
  ));

  return <div className={styles.Stars}>{stars}</div>;
};

export default Stars;

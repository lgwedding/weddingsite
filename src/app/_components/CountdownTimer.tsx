"use client";

import React, { useState, useEffect } from "react";
import styles from "./countdown.module.css";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-08-30T15:00:00+01:00"); // Hungarian time (UTC+1)

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown_wrapper}>
      <h2>Esküvőnkig hátralevő idő</h2>
      <div className={styles.countdown}>
        <div className={styles.countdown_item}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Nap</span>
        </div>
        <div className={styles.countdown_item}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Óra</span>
        </div>
        <div className={styles.countdown_item}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Perc</span>
        </div>
        <div className={styles.countdown_item}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Másodperc</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

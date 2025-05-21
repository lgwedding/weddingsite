"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';

const images = [
    {
        src: '/IMG_2251.jpg',
        alt: 'Boróka Tábor külső kép'
    },
    {
        src: '/IMG_2252.jpg',
        alt: 'Boróka Tábor belső tér'
    },
    {
        src: '/szoba.jpg',
        alt: 'Boróka Tábor belső tér'
    },
    {
        src: '/mosdo.jpg',
        alt: 'Boróka Tábor belső tér'
    },
    {
        src: '/furdo.jpg',
        alt: 'Boróka Tábor belső tér'
    },
    {
        src: '/IMG_2253.jpg',
        alt: 'Boróka Tábor környezet'
    },
    {
        src: '/IMG_2247.jpg',
        alt: 'Boróka Tábor külső kép'
    },
    {
        src: '/IMG_2267.jpg',
        alt: 'Boróka Tábor belső tér'
    },
    {
        src: '/IMG_2259.jpg',
        alt: 'Boróka Tábor környezet'
    },
    {
        src: '/IMG_2262.jpg',
        alt: 'Boróka Tábor környezet'
    },
    {
        src: '/IMG_2261.jpg',
        alt: 'Boróka Tábor környezet'
    }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.carousel}>
            <button onClick={prevSlide} className={`${styles.arrow} ${styles.left}`}>
                {'<'}
            </button>
            <div className={styles.imageWrapper}>
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <button onClick={nextSlide} className={`${styles.arrow} ${styles.right}`}>
                {'>'}
            </button>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import './Smoke.css';

const Smoke: React.FC = () => {
    const smokeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (smokeRef.current) {
            const smokeElements = smokeRef.current.querySelectorAll('.smoke-layer');

            smokeElements.forEach((el) => {
                const direction = Math.random() < 0.5 ? -1 : 1;
                const speed = Math.random() * 5000 + 10000;
                const delay = Math.random() * 2000;
                const rotation = Math.random() * 10 - 5;
                const riseAmount = Math.random() * 100 + 200;

                // Randomize CSS styles
                el.style.borderRadius = `${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% / ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}%`;
                el.style.transform = `skew(${Math.random() * 10 - 5}deg)`;
                el.style.filter = `blur(${Math.random() * 5}px) brightness(${Math.random() * 0.2 + 0.9}) contrast(${Math.random() * 0.2 + 0.9})`;

                anime({
                    targets: el,
                    translateX: [direction * -100 + '%', direction * 100 + '%'],
                    translateY: [0, -riseAmount],
                    opacity: [0.6, 0.1],
                    scale: [1, 1.2],
                    rotate: [rotation, rotation + (Math.random() * 2 - 1)],
                    duration: speed,
                    easing: 'easeInOutQuad',
                    loop: true,
                    delay: delay,
                });
            });
        }
    }, []);

    return (
        <div ref={smokeRef} className="smoke-container">
            {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="smoke-layer"></div>
            ))}
        </div>
    );
};

export default Smoke;
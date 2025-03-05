import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef } from 'react';
import './Home.css';

export default function Home() {
    const animationRef = useRef<anime.AnimeInstance>(null);

    useEffect(() => {
        const dots = document.querySelectorAll('.dot');
        const radius = 100; // Radius of the sphere
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

        const updateDots = (progress: number) => {
            dots.forEach((dot, i) => {
                const theta = phi * i;
                const y = (i / dots.length - 0.5) * 2 * radius; // Distribute dots along the y-axis
                const r = Math.sqrt(radius * radius - y * y); // Radius at y

                const x = Math.cos(theta + progress * 2 * Math.PI) * r;
                const z = Math.sin(theta + progress * 2 * Math.PI) * r;

                const scale = 0.5 + 0.5 * (z + radius) / (2 * radius); // Scale based on z position

                // Calculate color based on z position
                const colorValue = Math.floor((z + radius) / (2 * radius) * 255);
                const color = `rgb(${colorValue}, 0, ${255 - colorValue})`;

                // Update the position, scale, and color of the dot
                (dot as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                (dot as HTMLElement).style.backgroundColor = color;
            });
        };

        updateDots(0); // Initial position

        animationRef.current = anime({
            targets: '.sphere',
            duration: 50000,
            easing: 'linear',
            loop: true,
            update: function(anim) {
                const progress = anim.progress / 100;
                updateDots(progress);
            }
        });
    }, []);

    const createDots = () => {
        const dots = [];
        for (let i = 0; i < 400; i++) {
            dots.push(<div key={i} className="dot"></div>);
        }
        return dots;
    };

    return (
        <div className="Home">
            <div className="sphere">
                {createDots()}
            </div>
        </div>
    );
}
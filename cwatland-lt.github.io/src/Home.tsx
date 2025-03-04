import anime from 'animejs/lib/anime.es.js';
import {useEffect, useRef} from "react";

export default function Home() {
    const animationRef = useRef<anime.AnimeInstance>(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 250,
            delay: function(_el, i) {
                return i * 100;
            },
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine"
        });
    }, []);
    return (
        <div className={"Home"}>
            <button onClick={() => animationRef.current?.restart()}>Restart</button>
            <div className={'el'} style={{height: '16px', width: '16px', backgroundColor: 'green'}}/>
        </div>
    )
}
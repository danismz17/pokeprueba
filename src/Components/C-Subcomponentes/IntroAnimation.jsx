import React, { useState, useEffect } from 'react';

export default function IntroAnimation() {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prevProgress) => {
                const newProgress = prevProgress + 1;
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 20);

        setTimeout(() => {
            setShowAnimation(false);
            clearInterval(interval);
        }, 3000); // Cambia el tiempo en milisegundos para ajustar la duración de la animación

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!showAnimation) {
        return null; // No renderizar nada una vez que la animación ha finalizado
    }

    return (
        <>
            <div className={`introAnimation-container ${showAnimation ? 'fade-out' : ''}`}>
                <div className="pokebola-container">
                    <img className='scale-up-center' src="/Images/Icons/bg-pokeball.svg" alt="" />
                </div>
                <div className='loading-intro'>
                    <h2>Cargando Pokedex: <span>{loadingProgress}%</span></h2>
                </div>
            </div>
        </>
    );
}

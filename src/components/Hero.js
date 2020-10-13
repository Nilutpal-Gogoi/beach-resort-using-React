import React from 'react'

// children and hero 
export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    );
}

Hero.defaultProps = {
    hero:"defaultHero"
}
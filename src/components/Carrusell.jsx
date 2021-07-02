import React from 'react'

import "../styles/components/CarrusellItem.scss";

const Carrusell = ({children}) => {
    return (
        <section className="carrusel">
            <div className="carrusel__container">
                {children}
            </div>
        </section>
    )
}

export default Carrusell

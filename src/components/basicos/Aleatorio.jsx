import React from 'react'

export default (props) => {
    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Maximo: </strong> {max}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {aleatorio}
            </p>
        </>
    )
}
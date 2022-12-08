/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef() - Identificar elementos dentro de la vista
 * - useEffect() - Controlar los cambios en la vista
 */

import React, { useRef, useState, useEffect } from 'react';

const Ejemplo2 = () => {

    // Creamos dos contadores distintos
    // Cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Creamos una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente ( vista HTML )

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del componente")
    //     console.log("Mostrando referencia a elemento del DOM:")
    //     console.log(miRef)

    //     })

    /**
     * ? Caso 2: ejecutar SÓLO cuando cambie contador1
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
     * En caso que cambie contador2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del Contador1")
    //     console.log("Mostrando referencia a elemento del DOM:")      
    //     console.log(miRef)  
    // }, [contador1]);

    /**
     * ? Caso 3: ejecutar SÓLO cuando cambie contador1 y contador2
     * Cada vez que haya un cambio en contador1 y c2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() => {
        console.log("Cambio en el estado del Contador1/Contador2")
        console.log("Mostrando referencia a elemento del DOM:")      
        console.log(miRef)  
    }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR1: {contador1}</h2>
            <h2>CONTADOR2: {contador2}</h2>
            {/* Elemento referenciaado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;

import React, { useState } from 'react';

/**
 * 
 * @returns Definiendo estilos en constantes
 */

const loggedStyle = {
    color:'white'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, { props.name }</p>) 
    const pleaseLogin = () => (<p>Please, login</p>)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? 
            greetingUser() 
            : 
            pleaseLogin()
            }
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;

import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in Input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }
    

    return (
        <div style={{background:'cyan',padding:'30px'}}>
            <p onMouseOver={ console.log('On mouse over')}>
                Hello, { name }
            </p>
            <button onClick={() => console.log('Clicked button 1')}>
                Button 1
            </button>
            <button onClick={ pressButton }>
                Button 2
            </button>
            <button onClick={ () => pressButtonParams('Hello') }>
                Button 3
            </button>
            <input 
            placeholder='Send a text to your father' 
            onFocus={() => console.log('Input focused')}
            onChange={(e) => console.log('Input changed', e.target.value)}
            onCopy={() => console.log('Copied text from imput')}
            ref= { messageRef }
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send message
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={ submitName }>
                    <input ref={ nameRef } placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;

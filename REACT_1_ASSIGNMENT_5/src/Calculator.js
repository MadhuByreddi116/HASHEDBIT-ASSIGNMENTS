import React, { useState } from 'react';
import  './Calci.css';

const Calci = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const changeHandlerNum1 = (event) => {
        setNum1(event.target.value);
    };

    const changeHandlerNum2 = (event) => {
        setNum2(event.target.value);
    };

    const add = () => {
        const number1 = Number(num1);
        const number2 = Number(num2);
        setResult(number1 + number2);
        setError('');
    };

    const sub = () => {
        const number1 = Number(num1);
        const number2 = Number(num2);
        setResult(number1 - number2);
        setError('');
    };

    const mul = () => {
        const number1 = Number(num1);
        const number2 = Number(num2);
        setResult(number1 * number2);
        setError('');
    };

    const div = () => {
        const number1 = Number(num1);
        const number2 = Number(num2);
        if (number2 === 0) {
            setError('Division by zero is not allowed');
            setResult(null);
        } else {
            setResult(number1 / number2);
            setError('');
        }
    };

  const stylebody ={
    
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', /* Full viewport height */
        margin: '0',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'lightgrey' /* Light gray background for better contrast */
    
  }

 


    return (
        <>
            <div className='calculator'>
                <h1 >SIMPLE REACT CALCULATOR</h1>
                <br />
                Num1: <input type='number' value={num1} onChange={changeHandlerNum1} /> <br />
                Num2: <input type='number' value={num2} onChange={changeHandlerNum2} /> <br /> <br />
                
                <button onClick={add}>ADD</button>     <button onClick={sub}>SUB</button>  <br />
                
                <button onClick={mul}>MUL</button>     <button onClick={div}>DIV</button>  <br />  
                  
            
                <div className='result'>
                    <h2>RESULT: {result !== null ? result : 'No result'}</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </>
    );


}


export default Calci;

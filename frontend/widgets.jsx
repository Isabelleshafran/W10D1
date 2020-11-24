import React from 'react';
import ReactDOM from 'react-dom';
// import Widget from './widget';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';



function Widget(){
    return (
        <>
        <p>Widget</p>
        <Clock />
        <Tabs />
        <Weather />

        </>
    )
}

document.addEventListener('DOMContentLoaded',()=>{
    
    const root = document.getElementById('root');
    ReactDOM.render(<Widget />, root);
})
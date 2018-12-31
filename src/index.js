//Import the React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = function(){
    return (
    <div>
        <label class='name' for='name'>Write your Name</label>
        <input id='name' type='text'/>
        <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
    </div>  
    );   
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const another = (
    <>
    <a href='https://google.com' target="_blank">Visit Google</a>
    <p>hello I am here </p>
    </>
)

const reactElement = React.createElement(
    'a',
    {href:'https://google.com' , target: '_blank'},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // another

    reactElement

)

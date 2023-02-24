import React from 'react'
import ReacDOM from 'react-dom/client'

const el = document.getElementById('root');
const root = ReacDOM.createRoot(el);

function App() {
    const msg = "Enchante! Salut!"
    return <h1>{msg}</h1>
}

root.render(<App/>);

import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import {useState} from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";

function App() {
    return <Like onClick={() => console.log('clicked')}/>
}

export default App;
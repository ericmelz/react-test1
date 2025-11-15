import Button from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            {showAlert && <Alert onDismiss={() => setShowAlert(false)}>Hello World!</Alert>}
            <Button color='danger' label="Click me" onClick={() => setShowAlert(true)}/>
        </>
    )
}

export default App;
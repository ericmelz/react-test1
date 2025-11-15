import Button from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            <ListGroup items={["cat", "dog", "horse"]} heading={"Animals"}
                       onSelectItem={() => console.log("Selected")}/>
            {showAlert && <Alert onDismiss={() => setShowAlert(false)}>Hello World!</Alert>}
            <Button color='danger' label="Click me" onClick={() => setShowAlert(true)}/>
        </>
    )
}

export default App;
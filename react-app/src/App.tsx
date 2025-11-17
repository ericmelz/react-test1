import {useState} from "react";
import {ExpandableText} from "./components/ExpandableText/ExpandableText";

function App() {
    return (
        <>
            <ExpandableText numChars={10}>
                Hey there - this is a long text that I want to expand!
            </ExpandableText>
        </>
    )
}

export default App;
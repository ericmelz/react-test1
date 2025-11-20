import * as React from "react";
import {ProductList} from "./components/ProductList";

function App() {
    const [category, setCategory] = React.useState<string>('');

    return (
        <>
            <select name="product" id="product" className="form-select" onChange={(e) => setCategory(e.target.value)}>
                <option value="Toys">Toys</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
            </select>
            <ProductList category={category}/>

        </>
    );
}

export default App;
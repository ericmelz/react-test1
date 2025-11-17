import {useState} from "react";

function App() {
    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: 'Product 1', quantity: 1},
            {id: 2, title: 'Product 2', quantity: 2}
        ]
    })
    const handleClick = () => {
        setCart({
            ...cart,
            items: cart.items.map(item =>
                item.id === 1 ? {...item, quantity: item.quantity + 1} :
                    item)
        })
    }

    return (
        <>
            {cart.items.map(item => <p key={item.id}>{item.title}: {item.quantity}</p>)}
            <button onClick={handleClick}>Add 1 to {cart.items[0].title}</button>
        </>
    )
}

export default App;
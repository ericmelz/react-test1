import ListGroup from './components/ListGroup';

function App() {
    const heading = 'Cities';
    const items = [
        'New York',
        'London',
        'Paris',
        'Tokyo',
        'Rome',
        'Berlin',
        'Madrid',
        'Barcelona',
        'Los Angeles'
    ]
    const handleSelectItem = (item: string) => console.log(`You selected ${item}`)
    return <div><ListGroup heading={heading} items={items} onSelectItem={handleSelectItem} /></div>
}

export default App;
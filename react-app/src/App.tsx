import axios, {AxiosError, CanceledError} from 'axios';
import {useEffect, useState} from "react";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        axios
            .get('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
            .then(response => setUsers(response.data))
            .catch(error => {
                if (error instanceof CanceledError)
                    return;
                setError((error as AxiosError).message);
            });

        return () => controller.abort();
    }, []);

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>)
}

export default App;
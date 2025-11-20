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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        axios
            .get('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
            .then(response => {
                setUsers(response.data);
                setIsLoading(false);
                setError(
                    null
                )
            })
            .catch(error => {
                if (error instanceof CanceledError)
                    return;
                setError((error as AxiosError).message);
                setIsLoading(false);
            })
            // .finally(() => setIsLoading(false));

        return () => controller.abort();
    }, []);

    return (
        <>
            {isLoading && <div className="spinner-border"></div>}
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>)
}

export default App;
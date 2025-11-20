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

    function deleteUser(user: User) {
        const originalUsers = [...users];
        setUsers(users.filter(u => u.id !== user.id));
        axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
            .catch(error => {
                setError(error.message);
                setUsers(originalUsers);
            });
    }

    return (
        <>
            {isLoading && <div className="spinner-border"></div>}
            {error && <p className="text-danger">{error}</p>}
            <ul className="list-group">
                {users.map(user =>
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {user.name}
                        <button className="btn btn-outline-danger"
                                onClick={() => deleteUser(user)}>
                            Delete
                        </button>
                    </li>)}
            </ul>
        </>)
}

export default App;
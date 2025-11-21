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

    const addUser = () => {
        const newUser = {
            id: 0,
            name: 'Eric',
            username: 'ericmelz',
            email: 'eric@emelz.com'
        };
        setUsers([newUser, ...users]);

        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
            .then(({data: savedUser}) => setUsers([savedUser, ...users]))
            .catch(error => {
                setError(error.message);
                setUsers(users);  // sets to original users at the time this catch was defined
            });
    }

    const updateUser = (user: User) => {
        const updatedUser = {...user, name: 'Updated Name'};
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));
        axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser)
            .catch(error => {
                setError(error.message);
                setUsers(users);
            });
    }

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
            <button className="btn btn-primary mx-2" onClick={addUser}>Add User</button>
            <ul className="list-group">
                {users.map(user =>
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {user.name}
                        <div>
                            <button className="btn btn-outline-secondary m-2"
                                    onClick={() => updateUser(user)}>
                                Update
                            </button>
                            <button className="btn btn-outline-danger"
                                    onClick={() => deleteUser(user)}>
                                Delete
                            </button>
                        </div>
                    </li>)}
            </ul>
        </>)
}

export default App;
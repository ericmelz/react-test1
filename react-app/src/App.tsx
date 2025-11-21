import userService, {User} from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
    const {users, error, isLoading, setUsers, setError} = useUsers();

    const addUser = () => {
        const newUser = {
            id: 0,
            name: 'Eric',
            username: 'ericmelz',
            email: 'eric@emelz.com'
        };
        setUsers([newUser, ...users]);

        userService.create(newUser)
            .then(({data: savedUser}) => setUsers([savedUser, ...users]))
            .catch(error => {
                setError(error.message);
                setUsers(users);  // sets to original users at the time this catch was defined
            });
    }

    const updateUser = (user: User) => {
        const updatedUser = {...user, name: 'Updated Name'};
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));
        userService.update(updatedUser)
            .catch(error => {
                setError(error.message);
                setUsers(users);
            });
    }

    function deleteUser(user: User) {
        const originalUsers = [...users];
        setUsers(users.filter(u => u.id !== user.id));
        userService.delete(user.id)
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
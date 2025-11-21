import {useEffect, useState} from "react";
import userService, {User} from "../services/user-service";
import {AxiosError, CanceledError} from "axios";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);
        const {request, cancel} = userService.getAll<User>();
        request.then(response => {
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
            .finally(() => setIsLoading(false));

        return () => cancel();
    }, []);

    return {users, isLoading, error, setUsers, setError};
}


export default useUsers;

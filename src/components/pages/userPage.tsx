import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchUsers } from "../../redux/users/slice";


interface IUser {
    id?: string;
    name?: string;
    email?: string;
}

export const UserPage = () => {
  
    const dispatch = useAppDispatch();
    const {users, loading , error} = useAppSelector(state=>state.users); 

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    console.log(users); 

    return (
        <div>
            
            <h2>Hello </h2>
            
        <div>
                {loading && <div>Loading...</div> }
                {error && <div>{error}</div>}
                {users && (
                    <ul>
                    {users.map((user: IUser) => (
                    <li key={user.id}>Name:{user.name} Email: {user.email}</li>
                    ))}
                    </ul>
                )}
               
            </div> 
        </div>
    )

}





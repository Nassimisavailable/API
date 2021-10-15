
export const UserList = ({users}) => {
    return (
        <ul>
            {users.map((users) => (<li> {users.dara} </li> ))}
        </ul>
    )
}

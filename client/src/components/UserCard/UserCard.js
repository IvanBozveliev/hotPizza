const UserCard = ({
   username,
   id,
   roles
}) => {

    return (
        <div className="usersDiv">
            <h4>{username}</h4>
            <p>{id}</p>
            <p>{roles}</p>
        </div>
    )
}

export default UserCard;
const Comment = ({
    user,
    comment,
    date,
    id
}) => {
    return (
        <div className='comments'>

            <div className='contentComments'>
                <h5 id='titleComment'>{user}</h5>
                <p id='pComment'>{comment}</p>
                <p id='dateComment'>{date}</p>
                <button id='editbtn'>Edit</button>
                <button id='deletebtn'>Delete</button>
            </div>
        </div>
    )
}

export default Comment;
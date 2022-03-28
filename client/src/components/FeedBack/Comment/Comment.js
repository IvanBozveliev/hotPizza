import * as storageService from '../../../services/storageService'
import * as feedbackService from '../../../services/feedbackServices';
import {useNavigate} from 'react-router-dom';

const Comment = ({
    user,
    comment,
    date,
    id,
    setNewComments
}) => {

    let userName = storageService.getLocalStorage()?.username;
    let navigate = useNavigate();

    const deleteHandler = (id) => {
         
        feedbackService.deleteOneComment(id)
           .then(() => {

              feedbackService.getAllComments()
               .then(result => {
                     setNewComments(result)
               })
              navigate('/feedback')
           })
    }
    return (
        <div className='comments'>

            <div className='contentComments'>
                <h5 id='titleComment'>{user}</h5>
                <p id='pComment'>{comment}</p>
                <p id='dateComment'>{date}</p>
               
               {userName &&
                  userName == user ? 
                  <>
                  <button id='editbtn' onClick={()=> navigate(`/feedback/edit/${id}`)}>Edit</button>
                  <button id='deletebtn' onClick={() => deleteHandler(id)}>Delete</button>
                 </>
                 : ''
               }
                

            </div>
        </div>
    )
}

export default Comment;
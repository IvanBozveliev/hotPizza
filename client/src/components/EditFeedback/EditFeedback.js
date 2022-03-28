import "./EditFeedback.css";
import * as feedbackServices from '../../services/feedbackServices';

import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';

const EditFeedback = () => {
  
  const [commentData, setCommentData] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => { 
    feedbackServices.getOneComment(id)
      .then(result => setCommentData(result))
  }, []);


  const onEditFeedbackHandler = (e) => {
     e.preventDefault();
    
     let formData = new FormData(e.currentTarget);
     let comment = formData.get('commentContent');
     
     feedbackServices.putOneComment(id, {comment})
       .then(() => {
           navigate('/feedback')
       })
  }

  return (
    <div className="editFeedback">
       <h2>Edit Comment</h2>
       <form onSubmit={onEditFeedbackHandler} id='formEditFeedback'>
           <textarea name='commentContent' id='textAreaStyle' defaultValue={commentData.comment}></textarea>
           <button type="submit" id='submitBtnEditFeedback'>Send</button>
       </form>
    </div>
  )
}

export default EditFeedback
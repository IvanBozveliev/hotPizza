import './FeedBack.css';
import { getLocalStorage } from '../../services/storageService';
import * as feedbackServices from '../../services/feedbackServices';
import { useEffect, useState } from 'react';


import Comment from './Comment/Comment';

const FeedBack = () => {

  let [commentsArr, setCommentsArr] = useState([]);
  let [error, setError] = useState('');
  let userInfo = getLocalStorage();


  useEffect(() => {
    feedbackServices.getAllComments()
      .then(comments => setCommentsArr(comments))
  }, []);


  const handleFeedback = (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);
    let comment = formData.get('comment');
    let user = userInfo?.username;
    let creator = userInfo?.id;

    feedbackServices.postComment({ comment, user, creator })
      .then((data) => {
        if (data.message) {
          setError(data.message);
          setTimeout(() => {
            setError('');
          },2000)
        }
        feedbackServices.getAllComments()
          .then(newData => {
            setCommentsArr(newData)
          })
      })

  }


  return (
    <>
      {error && <div id='errorDiv'><p>{error}</p></div>}
      <div className='feedbackContent'>
        <h2>Feedback</h2>
        <form id='feedbackForm' method='POST' onSubmit={handleFeedback}>
          <textarea className='textarea' name='comment' placeholder="Are you happy with us? Type..." />
          <input type='submit' id='submitBtn' value="Comment" />
        </form>
        <h3>Comments:</h3>

        {commentsArr.length !== 0 ?
          (commentsArr.map(commentData =>
            <Comment
              key={commentData._id}
              id={commentData._id}
              user={commentData.user}
              comment={commentData.comment}
              date={commentData.date} />)
          ) : <p>Still don`t have comments...</p>
        }

      </div>
    </>

  )
}

export default FeedBack;
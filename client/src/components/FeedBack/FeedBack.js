import './FeedBack.css';

const FeedBack = () => {
  return (
    <div className='feedbackContent'>
      <h2>Feedback</h2>
      <form id='feedbackForm'>
        <textarea className='textarea' placeholder="Are you happy from us? Type..." />
        <input type='submit' value="Comment" />
      </form>
      <h3>Comments:</h3>
      <div className='comments'>

        <div className='contentComments'>
          <h5 id='titleComment'>Ivan Petrov</h5>
          <p id='pComment'>I like this restourant!I like this restourant!I like this restourant!</p>
          <p id='dateComment'>Date: 20/12/22 23:34</p>
          <button id='editbtn'>Edit</button>
          <button id='deletebtn'>Delete</button>
        </div>
      </div>
      <div className='comments'>

        <div className='contentComments'>
          <h5 id='titleComment'>Ivan Petrov</h5>
          <p id='pComment'>I like this restourant!I like this restourant!I like this restourant!</p>
          <p id='dateComment'>Date: 20/12/22 23:34</p>
          <button id='editbtn'>Edit</button>
          <button id='deletebtn'>Delete</button>
        </div>
      </div>
      <div className='comments'>

        <div className='contentComments'>
          <h5 id='titleComment'>Ivan Petrov</h5>
          <p id='pComment'>I like this restourant!I like this restourant!I like this restourant!</p>
          <p id='dateComment'>Date: 20/12/22 23:34</p>
          <button id='editbtn'>Edit</button>
          <button id='deletebtn'>Delete</button>
        </div>
      </div>
      {/* <p>Still don`t have...</p> */}
    </div>
  )
}

export default FeedBack;
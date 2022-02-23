import './Main.css';


const Main = () => {
  return (
    <div className='container'>
     {/* <button id='startBtn'>Start</button>
     <button id='endBtn'>End</button> */}
    <div className='gridDiv'>
     
      <div>
        <img className='imageDiv' src='../../../img/pizza5.png' />
        <h5>Title</h5>
        <button>Details</button>
        <button>Order</button>
      </div>
      <div>
        <img className='imageDiv' src='../../../img/pizza7.png' />
        <h5>Title</h5>
        <p>12 lv</p>
        {/* <button>Details</button>
        <button>Order</button> */}
      </div>
      <div>
        <img className='imageDiv' src='../../../img/pizza8.png' />
        <h5>Title</h5>
        <button>Details</button>
        <button>Order</button>
      </div>
    </div>
    
    </div>
   
  )
}

export default Main
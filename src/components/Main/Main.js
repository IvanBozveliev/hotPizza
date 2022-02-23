import './Main.css';


const Main = () => {

  const leftClick = (e) => {
     console.log(e.target)
  }

  return (
    <div className='container'>
     <img id='imgLeft' src='../../../img/arrowsleft.png' onClick={leftClick}/>
     
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
    <img src='../../../img/arrowr.png' id='imgRight' />
    </div>
   
  )
}

export default Main
import './CreatePizza.css';

const CreatePizza = () => {
    return (
        <div className='createPizza'>
            <h2>Create Pizza</h2>
            <form method='POST' id='loginForm'>
                <label htmlFor='inputText'>Title:</label>
                <input type='text' name='username' id='inputText' />
                <label htmlFor='inputDescription'>Description:</label>
                <input type='text' name='description' id='inputDescription' />
                <label htmlFor='inputImage'>Image Url:</label>
                <input type='text' name='image' id='inputImage' />
                <label htmlFor='inputImage'>Price:</label>
                <input type='number' name='price' id='inputImage' />
                <div>
                    <input type='submit' value='Create' />
                </div>

            </form>
        </div>
    )
}

export default CreatePizza;
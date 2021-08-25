import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/TodoActions";

const AddTodo = () => {

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const dispatcher = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        if(!title){
            alert('Please add a title');
            return;
        }

        dispatcher(addTodo({title, completed}));
        setTitle('');
        setCompleted(false);
    }

    return (
        <form className='container' onSubmit={submit}>
            <div className='row-form justify-content-center'>
                <div className='form-group col-sm-12'>
                    <label htmlFor='title'>Title</label> 
                    <input id='title' 
                        className='form-control' 
                        type='text' 
                        placeholder='New Todo' 
                        value={title}
                        onChange={(e) => setTitle(e.target.value) }/>
                </div>
            </div>
            <div className='row-form'>
                <div className='form-group col-sm-12'>
                    <div className='form-check-inline d-flex justify-content-between'>
                        <label htmlFor='completed' className='form-check-label'>Completed ?</label> 
                        <input id='completed' 
                            className='form-check-input' 
                            type='checkbox'
                            checked={completed}
                            onChange={(e) => setCompleted(e.currentTarget.checked) }/>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='form-group col-sm-12'>
                    <input type='submit' 
                        className='btn btn-primary btn-block' 
                        value='Save'/>
                </div>
            </div>
        </form>
    )
}

export default AddTodo

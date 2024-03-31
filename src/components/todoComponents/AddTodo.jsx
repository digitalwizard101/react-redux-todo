import React, { useState } from 'react'
import { addTodo } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {

    const [inputVal, setInputVal] = useState('')
    const [message, setMessage] = useState(false)


    const dispatch = useDispatch()


    const handleFormSubmit = (e) => {



        e.preventDefault()
        if (inputVal.trim() !== "") {

            dispatch(addTodo({
                todo: inputVal
            }))
        } else {
            setMessage(true)
            setTimeout(() => {
                setMessage(false)
            }, 1500);
        }

        setInputVal("")

    }

    return (
        <div className='container-fluid  mb-4 mt-4'>

            <form onSubmit={handleFormSubmit}    >

                <input type="text" value={inputVal}   onChange={(e) => setInputVal(e.target.value)} placeholder='Type todo here...' className='form-control' />


            </form>


            {
                message ? <div className='alert alert-danger m-2  p-1  text-center'> Todo cannot be empty... </div> : null
            }

        </div>

    )
}

export default AddTodo
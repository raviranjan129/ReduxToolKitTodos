import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/ToDo/todoSlice'

const AddTodo = () => {
const [input,setInput] = useState('')
const dispatch=useDispatch()

const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
}

  return (
   <form onSubmit={addTodoHandler} >
<input type="text"
placeholder='Enter a todo...'
value={input}
onChange={(e)=>setInput(e.target.value)}
/>

<button 
type='submit'>
AddTodo
</button>

   </form>
  )
}

export default AddTodo

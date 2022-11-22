import React, { useState } from "react"
import "./movies-add-form.css"

const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: "", views: "" })
  ///////
  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const addFormHandler = (e) => {
    e.preventDefault()
    if (state.name === "" || state.views === "") return
    const data = { name: state.name, viewers: state.views }
    addForm(data)
    setState({ name: "", views: "" })
  }

  return (
    <div className='movies-add-form'>
      <h3>Add new Movie</h3>
      <form onSubmit={addFormHandler} className='add-form d-flex'>
        <input
          onChange={changeHandlerInput}
          name='name'
          value={state.name}
          type='text'
          className='form-control new-post-label'
          placeholder='Movie name...'
        />
        <input
          onChange={changeHandlerInput}
          name='views'
          value={state.views}
          type='number'
          className='form-control new-post-label'
          placeholder='How many watched?...'
        />
        <button type='submit' className='btn btn-outline-dark'>
          Add
        </button>
      </form>
    </div>
  )
}
export default MoviesAddForm

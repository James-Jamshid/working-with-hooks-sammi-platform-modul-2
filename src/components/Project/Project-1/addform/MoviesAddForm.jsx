import React from "react"
import "./movies-add-form.css"

const MoviesAddForm = () => {
  return (
    <div className='movies-add-form'>
      <h3>Add new Movie</h3>
      <form className='add-form d-flex'>
        <input
          type='text'
          className='form-control new-post-label'
          placeholder='Movie name...'
        />
        <input
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

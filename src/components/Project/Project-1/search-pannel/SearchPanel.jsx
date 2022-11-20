import React, { Fragment } from "react"
import "./search-panel.css"
const SearchPanel = () => {
  return (
    <Fragment>
      <input
        type='text'
        className='form-control search-input'
        placeholder='Search movies...'
      />
    </Fragment>
  )
}
export default SearchPanel

import "./movie-list-item.css"

const MovieListItem = (props) => {
  const { name, viewers, onDelete, onToggleProp, favourite, like } = props
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite && "favourite"
      } ${like && "like"}`}
    >
      <span
        onClick={onToggleProp}
        data-toggle='like'
        className='list-group-item-label'
      >
        {name}
      </span>
      <input
        defaultValue={viewers}
        type='number'
        className='list-group-item-input'
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          onClick={onToggleProp}
          data-toggle='favourite'
          type='button'
          className='btn-cookie btn-sm'
        >
          <i className='fas fa-cookie'></i>
        </button>
        <button onClick={onDelete} type='button' className='btn-trash btn-sm '>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  )
}

export default MovieListItem

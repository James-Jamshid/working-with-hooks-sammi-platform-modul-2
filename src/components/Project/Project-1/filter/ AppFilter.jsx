import "./app-filter.css"
const AppFilter = ({ updateFilterHandler, filter }) => {
  const btnsArr = [
    { name: "all", label: "All Movies" },
    { name: "popular", label: "Favourite Movies " },
    { name: "mostViewers", label: "Most Watched Movies" },
  ]
  return (
    <div className='btn-group'>
      {btnsArr.map((btn) => (
        <button
          onClick={() => updateFilterHandler(btn.name)}
          key={btn.name}
          className={`btn ${
            filter === btn.name ? "btn-dark bg-black" : "btn-outline-dark "
          } `}
          type='button'
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}
export default AppFilter

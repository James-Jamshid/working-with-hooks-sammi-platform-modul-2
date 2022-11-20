import "./app-filter.css"
const AppFilter = () => {
  const btnsArr = [
    { name: "all", label: "All Movies" },
    { name: "popular", label: "Favourite Movies " },
    { name: "mostViewers", label: "Most Watched Movies" },
  ]
  return (
    <div className='btn-group'>
      {btnsArr.map((btn) => (
        <button key={btn.name} className='btn btn-outline-dark' type='button'>
          {btn.label}
        </button>
      ))}
    </div>
  )
}
export default AppFilter

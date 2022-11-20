import React from "react"
import MoviesAddForm from "../addform/MoviesAddForm"
import AppFilter from "../filter/ AppFilter"
import AppInfo from "../info/AppInfo"
import MovieList from "../movie-list/MovieList"
import SearchPanel from "../search-pannel/SearchPanel"
import "./app.css"
// import { v4 as uuidv4 } from "uuid"

const App = () => {
  const datas = {
    data: [
      {
        name: "Empire of osman",
        viewers: 988,
        favourite: false,
        like: false,
        id: 1,
      },
      {
        name: "Ertugrul",
        viewers: 789,
        favourite: false,
        like: false,
        id: 2,
      },
      { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3 },
    ],
  }

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  )
}
export default App

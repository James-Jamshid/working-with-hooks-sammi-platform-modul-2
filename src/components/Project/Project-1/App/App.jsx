import React, { useState, useEffect } from "react"
import MoviesAddForm from "../addform/MoviesAddForm"
import AppFilter from "../filter/ AppFilter"
import AppInfo from "../info/AppInfo"
import MovieList from "../movie-list/MovieList"
import SearchPanel from "../search-pannel/SearchPanel"
import "./app.css"
import { v4 as uuidv4 } from "uuid"

const App = () => {
  // const arr = [
  //   {
  //     name: "Empire of osman",
  //     viewers: 988,
  //     favourite: false,
  //     like: false,
  //     id: 1,
  //   },
  //   {
  //     name: "Ertugrul",
  //     viewers: 789,
  //     favourite: false,
  //     like: false,
  //     id: 2,
  //   },
  //   { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3 },
  // ]
  const [data, setData] = useState([])
  const [term, setTerm] = useState("")
  const [filter, setFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  //////
  const onDelete = (id) => {
    const newArr = data.filter((c) => c.id !== id)
    setData(newArr)
  }
  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    }
    const newArr = [...data, newItem]
    setData(newArr)
  }
  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] }
      }
      return item
    })
    setData(newArr)
  }
  const searchHandler = (arr, term) => {
    if (term === 0) {
      return arr
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1)
  }
  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like)
      case "mostViewers":
        return arr.filter((c) => c.viewers > 800)
      default:
        return arr
    }
  }
  const updateTermHandler = (term) => {
    setTerm(term)
  }
  const updateFilterHandler = (filter) => {
    setFilter(filter)
  }
  useEffect(() => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 29,
          favourite: false,
          like: false,
        }))
        setData(newArr)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])
  // bu nima degani?:
  //user bizning dasturimizga kirishi bn shu ma'lumotlarno bizga ko'rsatgin degani.
  // useeffectni ichiga bosh massiv qoyganimiz uchun daturimiz ochilgandagina serverga sorov yuboriladi va boshqa payt yuborilmidi.
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo
          allMoviesCount={data.length}
          favouriteMoviesCount={data.filter((c) => c.favourite).length}
        />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter
            updateFilterHandler={updateFilterHandler}
            filter={filter}
          />
        </div>
        {isLoading && "Loading..."}
        <MovieList
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
        />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  )
}
export default App

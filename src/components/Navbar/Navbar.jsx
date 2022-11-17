import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex bg-accent h-20  w-auto justify-evenly'>
      <div className='flex flex-2 justify-center items-center'>
        <h1 className='flex px-4 italic  justify-center items-center  '>
          React Hooks
        </h1>
      </div>
      <div className='flex flex-1  justify-center gap-8 items-center  '>
        <Link to='/'>
          <button className='btn btn-outline-dark'>main</button>
        </Link>

        <Link to='/test'>
          <button className='btn btn-outline-dark'>Test</button>
        </Link>
        <Link to='/states'>
          <button className='btn btn-outline-dark'>States</button>
        </Link>
        <Link to='/callback'>
          <button className='btn btn-outline-dark'>Callback Hooks</button>
        </Link>
        <Link to='/usememo'>
          <button className='btn btn-outline-dark'>UseMemo Hooks</button>
        </Link>
        <Link to='/useref'>
          <button className='btn btn-outline-dark'>UseRef Hooks</button>
        </Link>
        <Link to='/project'>
          <button className='btn btn-outline-dark'>Project</button>
        </Link>
      </div>
      <div className=' flex flex-2 justify-center items-center px-6'>
        <button className='btn btn-dark'>Login</button>
      </div>
    </div>
  )
}
export default Navbar

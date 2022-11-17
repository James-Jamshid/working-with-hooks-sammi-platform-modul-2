import React, { useState, useMemo } from "react"
const UseMemoHook = () => {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(true)
  const color = {
    fontWeight: "bold",
    color: active ? "green" : "red",
  }
  const onInc = () => {
    setCounter(counter + 1)
  }
  const onActive = () => {
    setActive((active) => !active)
  }
  const bigNumber = (number) => {
    console.log("render")
    let i = 0
    while (i < 1000000) i++
    return number * 2
  }

  const number = useMemo(() => bigNumber(counter), [counter])
  // usememo hooki ham usecallback hookiga oxshab ortiqcha rendering bolishni oldini oladi.
  //u ham deps qabul qilib faat deps ichidagi buyruqni ishlagandagina render boladi.

  return (
    <div className='flex justify-center w-[100%] mx-auto '>
      <div className='border p-20 mt-5'>
        <button
          onClick={onInc}
          type='button'
          className='btn btn-success bg-green-600'
        >
          add
        </button>
        <button onClick={onActive} type='button' className='btn btn-info'>
          change
        </button>
        <div>
          <p className='text-center' style={color}>
            user activated: {number}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default UseMemoHook

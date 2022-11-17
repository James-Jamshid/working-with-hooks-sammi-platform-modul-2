import React, { useState, useEffect } from "react"
const Generate = ({ counterGenerate }) => {
  const [item, setItem] = useState([])
  useEffect(() => {
    const newItem = counterGenerate()
    setItem(newItem)
    console.log("render")
  }, [counterGenerate])

  return (
    <ul>
      {item.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
export default Generate

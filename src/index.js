import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CallbackHook from "./components/Hooks/UseCallback/Callback"
import UseStates from "./components/Hooks/States/UseStates"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Project/Project-1"
import Test from "./components/Test/Test"
import "./index.css"
import Root from "./Root"
import UseMemoHook from "./components/Hooks/UseMemo/UseMemo"
import UseRefHook from "./components/Hooks/UseRef/UseRefHook"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Root />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/states' element={<UseStates />}></Route>
        <Route path='/callback' element={<CallbackHook />}></Route>
        <Route path='/usememo' element={<UseMemoHook />}></Route>
        <Route path='/useref' element={<UseRefHook />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

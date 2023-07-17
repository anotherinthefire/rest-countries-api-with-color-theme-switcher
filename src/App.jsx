import { BrowserRouter, Routes, Route } from "react-router-dom"
import Countries from "./components/Countries"
import SingleCountry from "./components/SingleCountry"

import NavBar from "./components/NavBar"

import Error from "./components/Error"

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
          <Route path="/" element={<Countries />} ></Route>
          <Route path="/:name" element={<SingleCountry />} ></Route>
          <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

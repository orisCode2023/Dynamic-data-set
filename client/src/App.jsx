import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import DataPage from './pages/DataPage'
import Quiz from './pages/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<DataPage />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Pagination } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Pagination />
      </div>

    </>
  )
}

export default App

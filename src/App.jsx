import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1 className='text-amber-300 text-4xl text-center'>CAPTURE THE FLAG</h1>
      </div>
  )
}

export default App

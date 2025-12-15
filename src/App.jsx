import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="">
     <h1 className="text-6xl font-bold text-blue-600 text-center mt-20">
        Tailwind v4 is working!
    </h1>
   </div>
  )
}

export default App

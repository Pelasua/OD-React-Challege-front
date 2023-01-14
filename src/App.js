import React, { useState } from 'react'

import logo from './logo.svg'

import './App.css'

function App () {
  const [page, setpage] = useState(null)

  return (
    <div className="App">
      {page}
    </div>
  )
}

export default App

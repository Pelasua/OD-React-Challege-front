import React, { createContext, useEffect, useState } from 'react'

import TopMenu from './infrastructure/ui/components/TopMenu'

import './App.css'

export const AppContext = createContext(null)
function App () {
  const [store, setStore] = useState({
    selectedPage: 'gallery'
  })
  // eslint-disable-next-line no-unused-vars
  const [actions, setActions] = useState({
    selectPage: (page) => setStore({ ...store, selectedPage: page })
  })

  useEffect(() => {
    console.log('Ha cambiado')
  }, [store])

  return (
    <div className="App">
      <AppContext.Provider value={{ store, actions }}>
        <TopMenu title={store.selectedPage === 'gallery' ? 'Gallery' : 'Page Details'}/>
      </AppContext.Provider>
    </div>
  )
}

export default App

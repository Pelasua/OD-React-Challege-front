import React, { createContext, useState } from 'react'

import TopMenu from './infrastructure/ui/components/TopMenu'
import Gallery from './infrastructure/ui/pages/Gallery'

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

  return (
    <div className="App">
      <AppContext.Provider value={{ store, actions }}>
        <TopMenu title={store.selectedPage === 'gallery' ? 'Gallery' : 'Page Details'}/>
        {store.selectedPage === 'gallery' ? <Gallery/> : null}
      </AppContext.Provider>
    </div>
  )
}

export default App

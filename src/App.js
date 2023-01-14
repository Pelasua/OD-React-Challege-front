import React, { createContext, useState } from 'react'

import TopMenu from './infrastructure/ui/components/TopMenu'
import Gallery from './infrastructure/ui/pages/Gallery'
import PageDetails from './infrastructure/ui/pages/PageDetails'

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
        <TopMenu title={store.selectedPage === 'gallery' ? 'Gallery'.toUpperCase() : 'Page Details'.toUpperCase()}/>
        {store.selectedPage === 'gallery' ? <Gallery/> : <PageDetails/>}
      </AppContext.Provider>
    </div>
  )
}

export default App

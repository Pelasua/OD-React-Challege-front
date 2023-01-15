import React, { createContext, useState } from 'react'
import Box from '@mui/material/Box'

import '@fontsource/roboto'

import TopMenu from './infrastructure/ui/components/TopMenu'
import Gallery from './infrastructure/ui/pages/Gallery'
import PageDetails from './infrastructure/ui/pages/PageDetails'

import './App.scss'

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
    <Box
      className="App"
    >
      <AppContext.Provider value={{ store, actions }}>
        <TopMenu
          title={
            store.selectedPage === 'gallery'
              ? 'Gallery'.toUpperCase()
              : 'Detail Page'.toUpperCase()
          }
          isTransparent={store.selectedPage !== 'gallery'}
        />
        {store.selectedPage === 'gallery' ? <Gallery /> : <PageDetails />}
      </AppContext.Provider>
    </Box>
  )
}

export default App

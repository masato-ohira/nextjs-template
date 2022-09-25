import { configureStore } from '@reduxjs/toolkit'
import { siteSlice } from './site'
import { sheetsSlice } from './sheets'

export const store = configureStore({
  reducer: {
    site: siteSlice.reducer,
    sheets: sheetsSlice.reducer,
  },
})

export const { dispatch } = store

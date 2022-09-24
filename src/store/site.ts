import { createSlice } from '@reduxjs/toolkit'
import { colors as styleColors } from '@/styles/cmn.styles'

export type SiteState = {
  name: string
  colors: {}
}

const initialState: SiteState = {
  name: 'siteName',
  colors: styleColors,
}

export const getters = {
  siteData: (state: any) => {
    return state.site
  },
  colors: (state: any) => {
    return state.site.colors
  },
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {},
})

export const { siteData, colors } = getters
export const siteReducer = siteSlice.reducer

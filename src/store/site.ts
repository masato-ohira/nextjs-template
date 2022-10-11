import { createSlice, createSelector } from '@reduxjs/toolkit'
import { colors as styleColors } from '@/styles/colors'
import { RootState } from '@/store'

export type SiteState = {
  name: string
  colors: {}
}

const initialState: SiteState = {
  name: 'siteName',
  colors: styleColors,
}

export const selectors = {
  siteData: createSelector(
    (state: RootState) => state.site,
    (data) => data,
  ),
  colors: createSelector(
    (state: RootState) => state.site.colors,
    (colors) => colors,
  ),
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {},
})

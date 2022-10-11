import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@/store'

type stateType = {
  ready: boolean
  all: any
}

const initialState: stateType = {
  ready: false,
  all: {},
}

export const selectors = {
  isReady: createSelector(
    (state: RootState) => state.sheets.ready,
    (ready) => ready,
  ),

  getSheet: (id: string) => {
    return createSelector(
      (state: RootState) => state.sheets.all,
      (sheets) => sheets[id],
    )
  },
}
export const { getSheet, isReady } = selectors

export const fetchData: any = createAsyncThunk('sheets/fetchData', async () => {
  const url = `https://jsonplaceholder.typicode.com/todos`
  let { data } = await axios.get(url)
  return { samples: data }
})

export const sheetsSlice = createSlice({
  name: 'sheets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return {
        ...state,
        ready: true,
        all: action.payload,
      }
    })
  },
})

// export const { setSheets } = sheetsSlice.actions

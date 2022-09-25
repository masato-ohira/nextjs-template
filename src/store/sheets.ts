import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type stateType = {
  ready: boolean
  all: any
}

const initialState: stateType = {
  ready: false,
  all: {},
}

export const getters = {
  isReady: (state: any) => state.sheets.ready,
  getSheet: (id: string) => (state: any) => {
    return state.sheets.all[id]
  },
}
export const { getSheet, isReady } = getters

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

import { createSlice } from '@reduxjs/toolkit'

const pubbliufficioStore = createSlice({
  name: 'pubbliufficio',
  initialState: {
      isMobile: /Mobi/i.test(window.navigator.userAgent)
  },
  reducers: {
    incremented: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      //action.payload;
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = pubbliufficioStore.actions

export default pubbliufficioStore.reducer
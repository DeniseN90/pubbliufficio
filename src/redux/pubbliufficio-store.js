import { createSlice } from '@reduxjs/toolkit'

const pubbliufficioStore = createSlice({
  name: 'pubbliufficio',
  initialState: {
      isMobile: /Mobi/i.test(window.navigator.userAgent),
      isMenuOpen: false,
      isFormSubmitted: false,
      formValues: null,
  },
  reducers: {
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setIsFormSubmitted: (state, action) => {
      state.isFormSubmitted = action.payload;
    },
  }
})

export const { setIsMenuOpen, setIsFormSubmitted } = pubbliufficioStore.actions

export default pubbliufficioStore.reducer
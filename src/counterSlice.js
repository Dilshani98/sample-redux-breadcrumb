import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{id:0,name:"Home",path:'/home'}]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addElement: (state,action) => {
      if (!state.value.find(item => item.name ===action.payload.name)) {
        state.value.push(action.payload);
      }
      console.log("fgh",state.value)
      },
    removeElement: (state,action) => {
      state.roundScore = state.roundScore.filter((arrow) => arrow.id !== action.payload);
       const arrayFilter = state.value.filter((i) => i.name === action.payload.name);
        console.log('regrg',action.payload,state.value)
        },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addElement ,removeElement} = counterSlice.actions

export default counterSlice.reducer
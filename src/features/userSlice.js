import { createSlice } from '@reduxjs/toolkit';
//import { selectUser } from './features/userSlice';
const initialState = { user: null }
export const userSlice = createSlice({
  name: "user",
  initialState : {
    user : null,
  },
  reducers: { 
    login: (state , actions) => {
      state.user = actions.payload;
      state.user = actions.payload
    },
    logout: (state) => {
      state.user = null;
    },
  
  },
});

export const { login , logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;

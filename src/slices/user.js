import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //initial value berguna seperti react.usstate yang memberikan nilai default pada state
  resultUser: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //reducer berguna untuk mengubah nilai dari  state yang awal menjadi hasil terkini dari sebuah proses di page lain
    setResultUser: (state, action) => {
      state.resultNowshowing = action.payload; //nilai payload didapat dari hasil API atau hasil sebuah proses di page lain
    },
  },
});

// kita export si setter agar bisa diakses di halaman lain
export const {setResultUser} = counterSlice.actions;

export default counterSlice.reducer;

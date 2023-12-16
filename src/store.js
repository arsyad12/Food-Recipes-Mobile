import {configureStore} from '@reduxjs/toolkit';

//import data state dari slice/movie.js ke store
import userSlices from './slices/user';

export const store = configureStore({
  reducer: {
    user: userSlices,
    //nah nama store nya movie, trus object movieSlices bakal digunain buat
    //controller si setter di movie slice ada setResultNowshowing,setResultUpcoming,setAllResult
  },
});

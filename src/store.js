import {configureStore} from '@reduxjs/toolkit'
import profilReducer from './reducers/profilSlice'


const store = configureStore({
    reducer: {
          profil: profilReducer,
    },
})

export default store
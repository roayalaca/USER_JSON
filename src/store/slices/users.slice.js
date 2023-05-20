import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const userSlice = createSlice({
	name: 'users',
    initialState: 
        {
                  
        }
    ,
    reducers: {
        editUser : ( state, action ) => {
            return action.payload
        }
    }
})

// export const getBalanceThunk = () => dispatch => {

//     axios
//         .get("http://localhost:3000/detail/balance/5410953eee9a5b30c3eea476", getConfig()) //Falta el ID
//         .then( resp => console.log(resp.data) )
//         .catch( error => console.error(error) )

// }

export const getUserThunk = (data) => dispatch => {

    axios
    .get(`http://localhost:3000/detail/${data?._id}`)
    .then( resp => {
        console.log(resp.data)
        dispatch( editUser(resp.data)) })
    .catch( error => console.error(error) )

}

export const updateUserThunk = (data) => dispatch => {

     axios
     .put(`http://localhost:3000/detail/update/${data?._id}`, data)
     .then( () => dispatch( getUserThunk()) )
     .catch( error => console.error(error) )

 }

export const { editUser } = userSlice.actions;

export default userSlice.reducer;
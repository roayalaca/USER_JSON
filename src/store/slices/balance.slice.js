import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const balanceSlice = createSlice({
		name: 'balance',
    initialState: {},
    reducers: {
        setBalance : (state, action) => {
            return action.payload
        }
    }
})

export const getBalanceThunk = data => dispatch => {

    axios
        .get(`http://localhost:3000/detail/balance/${data._id}`, getConfig())
        .then( resp => console.log(resp) )
        .catch( error => console.error(error) )

}

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
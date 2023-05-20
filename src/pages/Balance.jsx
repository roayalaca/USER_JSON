import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBalanceThunk } from "../store/slices/balance.slice";
import { useParams } from "react-router-dom";
import axios from "axios";
import getConfig from "../utils/getConfig";


const Balance = () => {

    const dispatch = useDispatch();

    const { _id } = useParams()
    const [detail, setDetail] = useState({})
    const balance = useSelector( state => state.balance )

    useEffect ( () => { 
        axios
            .get(`http://localhost:3000/detail/${_id}`)
            .then ( resp => { 
                console.log(resp.data)
                setDetail(resp.data)
                dispatch(getBalanceThunk(resp.data))
                
            })
            .catch( error => console.error(error))
          
    }, [] )




    return (
        <div>
            BALANCE
        </div>
    );
};

export default Balance;


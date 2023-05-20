import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBalanceThunk } from '../store/slices/balance.slice';
import { useDispatch } from 'react-redux';




const Login = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const { register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const submit = data => {
        axios
            .post("http://localhost:3000/users/login", data)
            .then( resp => {
                console.log(resp.data)
                localStorage.setItem("token", resp.data.token)
                navigate(`/login/UserDetail/${resp.data._id}`)
                dispatch(getBalanceThunk(resp.data))
            })
            .catch( error => {
                if(error.response?.status === 404){
                    alert("Credenciales incorrectas")
                }else {
                    console.log(error.response?.data)
                }
            } )
    }


    

    return (

        <div>

            <Form style= {{ maxWidth: 500, margin: "1rem auto", border: "1px solid black", padding: "1rem" }} onSubmit={ handleSubmit(submit) }> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    {...register("email")}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    {...register("password")}
                    />
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

         

        
    
        </div>
        
    );
};

export default Login;
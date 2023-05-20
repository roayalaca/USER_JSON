import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { getUserThunk, updateUserThunk } from '../store/slices/users.slice';
import Card from 'react-bootstrap/Card';



const UserDetail = () => {

    const dispatch = useDispatch()
    const { handleSubmit, register, reset } = useForm()


 

    const submit = data => {
      

       console.log(data)

       emptyForm()
       dispatch(updateUserThunk(data))
    }

    const selectedUser = data => {
         reset(data)
    }


    const emptyForm = data => {
        reset (
            {
                age: "",
                eyeColor: "",
                name: {
                    first: "",
                    last: ""
                },
                company: "",
                email: "",
                password: "",
                phone: "",
                address: ""      
                
            
            }
        )
    }

    const { _id } = useParams()
    const [detail, setDetail] = useState({})
    const users = useSelector( state => state.users )


    useEffect ( () => { 
        axios
            .get(`http://localhost:3000/detail/${_id}`)
            .then ( resp => { 
                console.log(resp.data)
                setDetail(resp.data)
                dispatch(getUserThunk(resp.data))
                
            })
            .catch( error => console.error(error))
          
    }, [] )

    const navigate = useNavigate()

    const redirect = () => {
        navigate(`/login/UserDetail/Balance/${_id}`)
    }


    return (
        <div className='content'>
           
           <Card  className='card' border="primary" style={{ width: '23rem' }}>
               
               <Card.Body>
               <Card.Title>Card of {users.name?.first} {users.name?.last}</Card.Title>
               <Button onClick={redirect}>BALANCE</Button>
               <Button onClick={() => selectedUser(detail)}>EDIT</Button>
               <li>First name:<span> {users.name?.first}</span></li>
               <li>Last name:<span> {users.name?.last}</span></li>
               <li>Age:<span> {users.age}</span></li>
               <li>Eye color:<span> {users.eyeColor}</span></li>
               <li>Company:<span> {users.company}</span></li>
               <li>Phone:<span> {users.phone}</span></li>
               <li>Email:<span> {users.email}</span></li>
               <li>Password:<span> {users.password}</span></li>
               <li>Address:<span> {users.address}</span></li>
               </Card.Body>
           </Card>


           
           
            <Form className='form' style= {{ width:'30rem', height: '33.5rem' ,margin: "1rem auto", border: "1px solid black", padding: "2rem" }}  onSubmit={ handleSubmit(submit) }>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{marginLeft: 20}}>Age</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter age" 
                    {...register("age")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Eye Color</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter eye color" 
                    {...register("eyeColor")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter name"
                    {...register("name.first")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter last name" 
                    {...register("name.last")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Company</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter company" 
                    {...register("company")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    {...register("email")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter password" 
                    {...register("password")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter phone" 
                    {...register("phone")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter address" 
                    {...register("address")}
                    style={{maxHeight:25, width: '20rem'}}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" style={{maxHeight:40, maxWidth:80, marginLeft:"10rem"}}>
                    Submit
                </Button>
            </Form>

           
           
           
            
        </div>
    );
};

export default UserDetail;
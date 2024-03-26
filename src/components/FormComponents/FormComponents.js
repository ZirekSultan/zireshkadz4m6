import React, { useState } from 'react';
import {Form, Button, FormGroup} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postData } from '../../redux/actions';

const FormComponents = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(postData(formData))
    }

    return (
       <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
           <Form onSubmit={handleSubmit}>
               <FormGroup controlId="FormName">
                   <Form.Label>Name</Form.Label>
                   <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
               </FormGroup>
               <FormGroup controlId="FormSurname">
                   <Form.Label>Surname</Form.Label>
                   <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} />
               </FormGroup>
               <Form.Group controlId="formEmail">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
               </Form.Group>
               <Button variant="primary" type="submit">
                   Submit
               </Button>
           </Form>
       </div>
    )
}

export default FormComponents
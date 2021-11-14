import React from 'react';
import {Table, Button, Form, Container} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function Tabla() {
    const [name_update, set_name_update] = useState("");
    const [rol_update, set_rol_update] = useState("true");
    const [state_update, set_state_update] = useState("true");
    const [id_update, set_id_update] = useState(0);

    const [users, set_users] = useState([]);
    
    

    const peticionGet = async() => {
    Axios.get('http://localhost:5001/api/v1/users/list').then(res =>{
        console.log(res.data.users);
        set_users(res.data.users);
    }).catch(error=>{
        console.log(error);
    })
    }

    useEffect(()=>{
        peticionGet();
    },[])

    const update_users = (_id) =>{
        console.log(_id)
        Axios.put('http://localhost:5001/api/v1/users/update', {
            _id: _id,
            name: name_update,
            rol: rol_update,
            state: state_update
        });       
    }

    return (
        <Container>
        <div>
        <hr/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value, key) =>
                                <tr>
                                    <td>
                                        {key}
                                    </td>
                                    <td>
                                        {value.name}
                                    </td>
                                    <td>
                                        {value.rol.toString()}
                                    </td>
                                    <td>
                                        {value.state.toString()}
                                    </td>
                                    <td>
                                        <Button variant = 'warning' onClick ={
                                            ()=>{
                                            set_id_update(value._id);
                                            set_name_update(value.name);
                                            set_rol_update(value.rol.toString());
                                            set_state_update(value.state.toString());
                                            

                                            document.getElementById('name_update').defaultValue = value.name;
                                            
                                        }
                                        }>EDITAR</Button>
                                    </td>
                                </tr>
                            )

                        }
                    </tbody>
                </Table>
                <hr/>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label><h4>Nombre</h4></Form.Label>
                        <Form.Control disabled = "true" id ="name_update" type="text" placeholder="Digite el nombre del producto" onChange = {(e) => {
                            set_name_update(e.target.value);
                        }} />
                        </Form.Group>
                        <Container>
                        <Form.Label>Rol:</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicRol">
                        <Form.Check
                        inline
                        label ="Administrador"
                        name = "estado"
                        type = "radio"
                        id = '1'
                        onChange = {(e) => {
                            set_rol_update("true");
                        }}/>
                        <Form.Check
                        inline
                        label ="Vendedor"
                        name = "estado"
                        type = "radio"
                        id = '0'
                        onChange = {(e) => {
                            set_rol_update("false");
                        }}/>
                        </Form.Group>
                        </Container>
                        </Form>
                        <   Form>
                        <Container>

                        <Form.Label>Estado:</Form.Label>
                        <Form.Group className="mb-2" controlId="formBasicState">
                        <Form.Check
                        inline
                        label ="Activo"
                        name = "estado"
                        type = "radio"
                        id = '3'
                        onChange = {(e) => {
                            set_state_update("true");
                        }}/>
                        <Form.Check
                        inline
                        label ="Inactivo"
                        name = "estado"
                        type = "radio"
                        id = '2'
                        onChange = {(e) => {
                            set_state_update("false");
                        }}/>
                    </Form.Group>
                        </Container>


                        <Button variant="primary" type="submit" onClick={
                        ()=>{
                            update_users(id_update)}}>
                        ACTUALIZAR USUARIO
                    </Button>
                    </Form>
                        
                </div>
                
            </div>
            </Container>
            
    );
};

export default Tabla;
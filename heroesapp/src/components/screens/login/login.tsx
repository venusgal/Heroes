import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./login.module.css"
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from 'react-redux';
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const [showPass, setShowPass] = useState(false);
    const{values, handleChange}= useForm({
        user:"",
        password:""
    })
    const {user, password}= values;
    const dispatch= useDispatch();
    const navigate=useNavigate();
    const handleSubmitForm= async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await fetch("/user.json");
        const userData= await response.json();
        const userFound= userData.users.find((u: {username:string; 
        password:string})=> u.username === user && u.password === password
        );
        if(userFound){
            dispatch(setLogin(user));
            navigate("/");
        }else{
            alert("Usuario o contraseña no encontrado")
        }
    }
    return(
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>
                <span style={{fontSize:"15vh"}} className="material-symbols-outlined">group</span>
                <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        name="user" 
                        value={user}
                        type="text" 
                        placeholder="Usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        name="password" 
                        value={password}
                        onChange={handleChange}
                        type={showPass ? "text": "password"} 
                        placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Check 
                    type="switch"
                    onChange={()=>{
                        setShowPass(!showPass)
                    }}
                    id="custom-switch" 
                    label="Mostrar contraseña"
                    />
                    <div className="d-flex justify-content-center aling-items-center mt-2">
                        <Button type="submit" variant="primary">Ingresar</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
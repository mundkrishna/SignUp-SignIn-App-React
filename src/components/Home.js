import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignImg from './SignImg';
import { Link } from 'react-router-dom';

export default function Home() {

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });

    const [data, setData] = useState([]);

    const getData = (e) => {
        const { value, name } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const addData = (e) => {
        e.preventDefault();
        //console.log(inputValue);
        const { name, email, date, password } = inputValue;

        if (name && email && date && password) {
            alert("Account has been created successfully");
            localStorage.setItem("signUpUserData", JSON.stringify([...data, inputValue]));
            setInputValue({
                name: "",
                email: "",
                date: "",
                password: ""
            });
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data mt-5" style={{ width: "100%" }}>
                        <h3 className="text-center col-lg-6">Sign Up</h3>
                        <Form className="mt-4" onSubmit={addData} >
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Control onChange={getData} type="text" name="name" placeholder="Enter Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Control onChange={getData} type="email" name="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Control onChange={getData} type="date" name="date" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Control onChange={getData} type="password" name="password" placeholder="Password" minLength={5} required />
                            </Form.Group>
                            <Button className="col-lg-3" variant="primary" type="submit" style={{ backgroundColor: "rgb(67, 185, 127)", marginLeft: "130px" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3">Already Have an Account <span><Link to="/login">SignIn</Link></span></p>
                    </div>
                    <SignImg />
                </section>
            </div>
        </>
    )
}

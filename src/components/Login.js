import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignImg from './SignImg';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    });

    const [data, setData] = useState([]);
    const history = useHistory();

    const getData = (e) => {
        const { value, name } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const addData = (e) => {
        e.preventDefault();
        //console.log(inputValue);

        const getUserArr = localStorage.getItem("signUpUserData");
        console.log("getUserArr", getUserArr);

        const { email, password } = inputValue;
        if (email && password) {
            if (getUserArr && getUserArr.length) {
                const userData = JSON.parse(getUserArr);
                const userLogin = userData.filter((el, k) => {
                    return el.email === email && el.password === password
                })
                if (userLogin.length === 0) {
                    alert("Invalid details");
                }
                else {
                    console.log("User login suceesfull");
                    localStorage.setItem("user_login", JSON.stringify(userLogin));
                    history.push("/details");
                }
            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data mt-5" style={{ width: "100%" }}>
                        <h3 className="text-center col-lg-6">Sign In</h3>
                        <Form className="mt-4" onSubmit={addData}>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Control onChange={getData} type="email" name="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Control onChange={getData} type="password" name="password" placeholder="Password" minLength={5} required />
                            </Form.Group>
                            <Button className="col-lg-3" variant="primary" type="submit" style={{ backgroundColor: "rgb(67, 185, 127)", marginLeft: "130px" }}>
                                Submit
                            </Button>
                        </Form>
                        {/* <p className="mt-3">Already Have an Account <span>SignIn</span></p> */}
                    </div>
                    <SignImg />
                </section>
            </div>
        </>
    )
}

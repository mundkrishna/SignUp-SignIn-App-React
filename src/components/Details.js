import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';

export default function Details() {

    const [loginData, setLoginData] = useState([]);

    const todayDate = new Date().toISOString().slice(0, 10);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();

    const Birthday = () => {
        //console.log("function called");
        const getUser = localStorage.getItem("user_login");
        if (getUser && getUser.length) {
            const user = JSON.parse(getUser);
            console.log("user ", user);
            setLoginData(user);

            const userBirthDate = loginData.map((el, k) => {
                return el.date === todayDate
            })

            if (userBirthDate) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000);
            }
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem("user_login");
        history.push("/");
    }

    useEffect(() => {
        Birthday();
    }, []);

    return (
        <>
            {
                loginData.length === 0 ? "Please go back to home page and login to continue" :
                    <div className='container'>
                        <h3 className='mt-5'>Details page</h3>
                        <p>Welcome, {loginData[0].name}</p>
                        <Button onClick={handleLogOut}>Logout</Button>

                        {
                            loginData[0].date === todayDate &&

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Hey {loginData[0].name}!! 🥳</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <strong>
                                        <p className='mt-3'>Wish you a many many happy returns of the day 🎂🎉</p>
                                        <p className='mt-3'>Have a nice day! 🤟</p>
                                    </strong>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        }
                    </div>
            }
        </>
    )
}

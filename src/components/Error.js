import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Error() {

    const history = useHistory();

    return (
        <>
            <div className="container">
                <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                    <img src="./Error.png" alt="error" className='errorimg mt-5' style={{ maxWidth: "500px" }} />
                    <h4 className='mt-3'>404 Error! Page Not Foud 😰</h4>
                    <button className='btn btn-primary mt-3' onClick={() => history.push("/")}>Go to Login Page</button>
                </div>
            </div>
        </>
    )
}

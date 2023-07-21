import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function SignUpModal() {
    const { toggleModals, modalState } = useContext(UserContext)
    console.log(toggleModals, modalState)
    return (
        <>
            {modalState.signUpModal && (

                <div className="position-fixed top-0 vw-100 vh-100">

                    <div 
                    onClick={()=> toggleModals("close")}
                    className="w-100 h-100 bg-dark bg-opacity-75">

                        <div className="position-absolute  top-50 start-50 translate-middle"

                            style={{ minWidth: "400px", backgroundColor: "white", padding: "20px" }}>

                            <div className="modal-dialog">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h5 className="modal-title"> Sign Up</h5>
                                        <button
                                        onClick={()=> toggleModals("close")}
                                        className="btn-close"></button>

                                    </div>

                                    <div className="modal-body">
                                        <form action="" className="sign-up-form">
                                            <div className="mb-3">
                                                <label htmlFor="signUpEmail" className="form-label">Email adress</label>

                                                <input name='email' type="email"
                                                    required
                                                    className='form-control'
                                                    id='signUpEmail' />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="signUpPassword" className="form-label">password</label>

                                                <input name='password' type="password"
                                                    required
                                                    className='form-control'
                                                    id='signUpPassword' />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="repeatPassword" className="form-label">repeat password</label>

                                                <input name='password' type="password"
                                                    required
                                                    className='form-control'
                                                    id='repeatPassword' />
                                            </div>
                                            <p className="text-danger mt-1">Validation</p>
                                            <button className="btn btn-primary">Submit</button>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            )}



        </>
    );
}

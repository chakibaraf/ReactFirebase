import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/UserContext'

export default function SignUpModal() {
    const { toggleModals, modalState, signup} = useContext(UserContext)
    console.log(toggleModals, modalState,signup)

    const inputs = useRef([])

    const [Validation ,setValidation] = useState("");

    const addInputs = el =>{
        // si l'element existe && et  n'est pas present dans le tableau alors je rajoute dedans (tableau)
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)

        }
    }

    const formRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(inputs)

        if((inputs.current[1].value.length || inputs.current[2].value.lenght) < 6) {

            setValidation("6 characters min")
            return ;
        }
        else if(inputs.current[1].value !== inputs.current[2].value)
        {
            setValidation("password dont match");
            return;
        }

        try {
            const cred = await signup(
                inputs.current[0].value,
                inputs.current[1].value,
            )
            formRef.current.reset();
            setValidation("");
            console.log(cred);
        }catch(err){

            if(err.code === "auth/invalid-email"){
                setValidation("Email format invalid")
            }

            if(err.code === "auth/email-already-in-use"){
                setValidation("Email already used")
            }

        }
    }

    return (
        <>
            {modalState.signUpModal && (

                <div className="position-fixed top-0 vw-100 vh-100">

                    <div 
                    onClick={()=> toggleModals("close")}
                    className="w-100 h-100 bg-dark bg-opacity-75">

                        </div>
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
                                        <form 
                                        ref={formRef}
                                        onClick={(handleFormSubmit)}
                                        action="" className="sign-up-form">
                                            <div className="mb-3">
                                                <label htmlFor="signUpEmail" className="form-label">Email adress</label>

                                                <input 
                                                ref={addInputs}
                                                name='email' type="email"
                                                    required
                                                    className='form-control'
                                                    id='signUpEmail' />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="signUpPassword" className="form-label">password</label>

                                                <input ref={addInputs}
                                                 name='password' type="password"
                                                    required
                                                    className='form-control'
                                                    id='signUpPassword' />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="repeatPassword" className="form-label">repeat password</label>

                                                <input  ref={addInputs}
                                                name='password' type="password"
                                                    required
                                                    className='form-control'
                                                    id='repeatPassword' />
                                            </div>
                                            <p className="text-danger mt-1" > {Validation}</p>
                                            <button className="btn btn-primary">Submit</button>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                </div>
            )}



        </>
    );
}

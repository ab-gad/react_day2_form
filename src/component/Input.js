import { useState } from "react";


const Input = (props) => {

    return (
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input
                onChange={(e)=> props.onchangeHandler(e)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
            />
            {props.emailErr || <div className="text-danger small">We'll never share your email with anyone else.</div>}
        </div>
    )
}

export default Input;










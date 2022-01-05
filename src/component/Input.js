import { useState } from "react";


const Input = (props) => {
    const {type, errMsg, regex, label} = props

    const[val, setVal]=useState('')
    const[err, setErr]=useState(false)

    const onchangeHandler = (e) => {    
        setVal(e.target.value) 
        val.match(regex) ? setErr(false) : setErr(true)
        console.log(err, val)
    }

    // Handling Repeated password input only
    const[rPassErr, setrPassErr] = useState(false)

    const rPassHandler = (e) => {
        console.log(e.target.value)
        console.log(val)
        
        e.target.value === val ? setrPassErr (false) : setrPassErr (true)
    }

    return (
        <>
            <div className="mb-3">
                <label for={type} className="form-label">{label}</label>
                <input
                    onChange={(e)=> onchangeHandler(e)}
                    type={type} 
                    className="form-control"
                    id={type} 
                />
                {err && <div className="text-danger small errMsg">{errMsg}</div>}
            </div>
            {/* Repeated Password */}
            {type === 'password' && 
                   <div className="mb-3">
                   <label for="rPass" className="form-label">Repeat the password:</label>
                   <input
                       onChange={(e)=> rPassHandler(e)}
                       type="password" 
                       className="form-control"
                       id="rPass" 
                   />
                   {rPassErr && <div className="text-danger small errMsg">passwords don't match eacth other</div>}
               </div>
            }
        </>
    )
}

export default Input;










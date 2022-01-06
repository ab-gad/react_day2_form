import { useEffect, useState } from "react";
import Input from "./Input";

const Form = () => {

    const [formErr, setformErr] = useState(true)

    const onsubmitHandler = (e) => {
        e.preventDefault();
        document.querySelector('.errMsg') ? setformErr(true) : setformErr(false)
    }

    useEffect(()=>{
        formErr || document.getElementById('myForm').submit() 
    },[formErr])

    return (
        <form id="myForm" onSubmit={(e)=> {onsubmitHandler(e)}}>
            <h1 className="pb-4">Registeration Form:</h1>
                <Input 
                    type="text"
                    label="Name:" 
                    errMsg="the name must be more than 8 characters" 
                    regex= '[a-zA-Z ]{8,30}'
                />
                <Input 
                    type="email"
                    label="Email Address:" 
                    errMsg="wrong email (make sure to write a valid email)" 
                    regex='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
                />
                <Input 
                    type="text"
                    label="User Name:" 
                    errMsg="user name should be more than 5 characters and contain no spaces" 
                    regex='^[-\w\.\$@\*\!]{5,30}$'
                />
                <Input 
                    type="password"
                    label="Password:" 
                    errMsg="wrong format (make you use at least number letter(lowercase and uppercase) and a special chars)" 
                    regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                />
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* {formErr && <div className="text-danger small">please make sure to enter valid information in all fields</div>}  */}
        </form>
    )
}

export default Form;
import { useState } from "react";
import Input from "./Input";

const Form = () => {
    const[email, setEmail]=useState('')
    const[emailErr, setEmailErr]=useState(false)
    const regex = {
        pass : '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$',
        mail : '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    }

    const onchangeHandler = (e) => {    
        setEmail(e.target.value) 
        email.match(regex.mail) ? setEmailErr(true) : setEmailErr(false)
        console.log(emailErr, email)
    }

    return (
        <form>
            <h1 className="pb-4">Registeration Form:</h1>
                <Input onchangeHandler={onchangeHandler} emailErr={emailErr}/>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;
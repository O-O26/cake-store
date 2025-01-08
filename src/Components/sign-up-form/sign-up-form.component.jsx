import { useState, useContext } from "react"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
// import { UserContext } from "../../contexts/user.context"
import "./sign-up-form.styles.scss"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    
    // const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Entered passwords do not match")
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);    
            // setCurrentUser(user)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        }   catch(error) {
            if(error.code === "auth/email-already-in-use"){
                alert("User cannot be created, this email is already in use")
            }
            else{
                console.log("User creation encountered an error", error)
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
        // ...(variable name) is the spread operator in JS, it is used
        // to pass an array or object values to another array or object.
        // Here, we are saying the name of the variable that the user
        // is typing into will be assigned to what they actually type
        // [variable name] is used to dynamically get the name value type
        // e.g. email, password, phone number and not the variable "name".
        // This line above says, {displayName} = user input,
        // {email} = user input,
        // {password} = user input
        // {confirm password} = user input.
        // NOT {name} = user input, the specific field the user is on will
        // change.
    }
    
    return(
        <div className="sign-up-container">
            <h2>Haven&apos;t registered an account yet?</h2>
            <span>Sign up with your email address and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" value={displayName}
                required onChange={handleChange}/>
                <FormInput label="Email" type="email" name="email" value={email}
                required onChange={handleChange}/>
                <FormInput label="Password" type="password" name="password" value={password}
                required onChange={handleChange}/>
                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword}
                required onChange={handleChange}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm
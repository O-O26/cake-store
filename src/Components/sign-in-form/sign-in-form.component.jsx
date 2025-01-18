import { useState, useContext } from "react"
import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { UserContext } from "../../contexts/user.context"
import "./sign-in-form.styles.scss"

import { signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword}
    from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    email: "",
    password: "",
  }

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    
    // const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user)
      }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            // setCurrentUser(user)
            resetFormFields()
        } catch(error) {
            switch(error.code){
                case "auth/invalid-credential":
                    alert("Invalid email or password, please try again.");
                    break;
                // The switch case below will not trigger as the error code
                // is no longer used    
                case "auth/user-not-found":
                    alert("No user is associated with that email address");
                    break;
                default:
                    console.log(error)
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
            <h2>Logged in to your account yet?</h2>
            <span>Sign in with your email address and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email}
                required onChange={handleChange}/>
                <FormInput label="Password" type="password" name="password" value={password}
                required onChange={handleChange}/>
                
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>

                </div>
            </form>
        </div>
    )
}

export default SignInForm
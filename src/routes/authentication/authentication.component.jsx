import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"

import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"

const Authentication = () => {
  // useEffect(() => {
  //     async () => {
  //     const response = await getRedirectResult(auth)
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)

  //     }
  //   }
  // }, []);

  // Cross origin redirect is no longer supported by many browsers
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user })
  // }
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  )
}

export default Authentication
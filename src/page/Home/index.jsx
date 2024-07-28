import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth, fbProvider, githubProvider, googleProvider } from "../../firebase";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

HomePage.propTypes = {
  user: PropTypes.object,
};

function HomePage(props) {
  const { user } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSignUp = () => {
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignIn = () => {
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignInWithFB = async () => {
    try {
      await signInWithPopup(auth, fbProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };


  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  if (user) {
    console.log("user", user);
    return <Navigate to="/private"></Navigate>;
  }

  const SignInEmailPasswordButton = () => {
    return (
      <>
        {!isSignUpActive && (
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </>
    );
  };

  const SignUpEmailPasswordButton = () => {
    return (
      <>
        {isSignUpActive && (
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        )}
      </>
    );
  };

  const SignInGoogleButton = () => {
    return (
      <>
        {!isSignUpActive && (
          <button
            style={{ backgroundColor: "red", color: "white" }}
            type="button"
            onClick={handleSignInWithGoogle}
          >
            Sign In With Google
          </button>
        )}
      </>
    );
  };

  const SignInGithubButton = () => {
    return (
        <>
          {!isSignUpActive && (
            <button
              style={{ backgroundColor: "black", color: "white" }}
              type="button"
              onClick={handleSignInWithGitHub}
            >
              Sign In With GitHub
            </button>
          )}
        </>
      );
  }

  const SignInFacebookButton = () => {
    return (
        <>
          {!isSignUpActive && (
            <button
              style={{ backgroundColor: "blue", color: "white" }}
              type="button"
              onClick={handleSignInWithFB}
            >
              Sign In With Facebook
            </button>
          )}
        </>
      );
  }

  return (
    <section>
      <h2>Home Page</h2>
      <form>
        {isSignUpActive && <legend>Sign Up</legend>}
        {!isSignUpActive && <legend>Sign In</legend>}
        <fieldset>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleEmailChange} />
            </li>
            <li>
              <label htmlFor="pasword">Password</label>
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </li>
          </ul>
          <SignUpEmailPasswordButton />
          <SignInEmailPasswordButton />
          <SignInGoogleButton />
          <SignInGithubButton />
          <SignInFacebookButton/>
        </fieldset>
        {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
        {!isSignUpActive && (
          <a onClick={handleMethodChange}>Create an account</a>
        )}
      </form>
    </section>
  );
}

export default HomePage;

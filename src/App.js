import "./App.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };
  const handleGithubSignIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user);
    })
  }
  return (
    <div className="App">
      {/* toggle button /conditional css */}
      {
        user.uid?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <><button onClick={handleGoogleSingIn}>Google Sign In</button>
        <button onClick={handleGithubSignIn}>Github SignIn</button>
        </>
      }
      {user.uid && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;

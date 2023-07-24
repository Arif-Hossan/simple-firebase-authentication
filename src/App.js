import "./App.css";
import {
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
  const provider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
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
  return (
    <div className="App">
      {/* toggle button /conditional css */}
      {
        user.email?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <button onClick={handleGoogleSingIn}>Google Sign In</button>
      }
      {user.email && (
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

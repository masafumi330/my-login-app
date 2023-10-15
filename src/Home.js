import React from 'react'
import { auth } from './firebase'
import { provider } from './firebase'
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      { user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign In</button>
  );
}

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function UserInfo() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <img src={user.photoURL} alt={user.displayName} />
    </div>
  );
}



export default Home
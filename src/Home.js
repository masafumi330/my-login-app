import React from 'react'

function Home() {
  return (
    <div>
      <SignInButton />
    </div>
  );
}

function SignInButton() {
  const signInWithGoogle = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign In</button>
  );
}

export default Home
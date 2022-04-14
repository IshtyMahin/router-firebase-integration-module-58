import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import app from '../../firebase.init';

const auth = getAuth(app);
 
const LogIn = () => {
    // const {signInWithGoogle} = useFirebase()
    
    const [signInWithGoogle] =useSignInWithGoogle(auth)

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={() =>signInWithGoogle()}>Google Sign In</button>
            </div>
           
            <form>
                
                <input type="email"  placeholder='Your email'/>
                <br />
                <input type="password"  placeholder='password'/>
                <br />
                <input type="submit" value="LogIn" />

            </form>
        </div>
    );
};

export default LogIn;
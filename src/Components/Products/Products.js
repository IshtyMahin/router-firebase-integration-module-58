import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)

const Products = () => {
    // const {user} = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Knock Knock ! who is there</h2>
            <h5>{user? user.displayName: "vooooootttttt"}</h5>
        </div>
    );
};

export default Products;
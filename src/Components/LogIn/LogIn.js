import React from 'react';

const LogIn = () => {
    return (
        <div>
            <h3>Please Login</h3>
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
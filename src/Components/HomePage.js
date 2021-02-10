import React from "react";
import GoogleLogin from "react-google-login";
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import '../Styles/Home.css';

export const HomePage = () => {
  const dispatch = useDispatch(setSignedIn)
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true))
    dispatch(setUserData(response.profileObj))
  };
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="home__page" style={{display: isSignedIn ? 'none' : ''}}>
      {!isSignedIn && (
        <div className="login__message">
          <h2 className='R-A'>📗</h2>
          <h1 className='R-A'>A Readers favourite place!</h1>
          <p className='R-A'>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="673636315123-do2hp9pliondu1pgem0qc8bbh45qjrp2.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;

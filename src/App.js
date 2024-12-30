import React, {useState} from 'react';
import authContext from './auth-context';
import Auth from './Auth';

function App() {

  const [authstatus, setauthstatus] = 
  useState(false);

  const login = () => {
    setauthstatus(true);
  };

  return (
      <React.Fragment>
        <authContext.Provider
        value={{status: authstatus, login: login}}>
          <Auth />
        </authContext.Provider>
      </React.Fragment>
  );
}

export default App;

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import './index.css';

function Public() {
  return (
    <h1>Public</h1>
  )
}

function Protected(props) {
  let logIn = props.logIn;
  return (
    <>
      {logIn ?
        <h1>Protected</h1> :
        <div>
          <p>You must log into view the page at protected</p>
          <button onClick={props.onClick}>logIn</button>
        </div>
      }
    </>
  )
}

function Pages() {
  const [logIn, setLogIn] = useState(false);

  const signOut = () => {
    setLogIn(false);
  }
  const signIn = () => {
    setLogIn(true);
  }

  return (
    <div className='wrapper'>
      {logIn ?
        <h2>Welcome <button onClick={signOut}>Sign out</button></h2> :
        <h2>You are not logged in</h2>}
      <ul>
        <li><Link to='/public'>Public Page</Link></li>
        <li><Link to='/protected'>Protected Page</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Navigate to='/public' />} />
        <Route path='/public' element={<Public />} />
        <Route path='/protected' element={<Protected logIn={logIn} onClick={signIn} />} />
      </Routes>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>
);


'use client'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';

const AppComponent = ({ Component, pageProps }) => {
  const [user, setUser] = useState()
  useEffect(() => {
    let token = localStorage.getItem('user-data');
    token = JSON.parse(token);
    setUser(token)
  }, [])

  return (
    <div>
      <Header user={user?.user?.email} />
      <Component {...pageProps} />
    </div>
  )
};

export default AppComponent;
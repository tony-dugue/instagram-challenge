import React, {useEffect, useState} from 'react';

import {SignedInStack, SignedOutStack} from "./rootNavigation";

// Firebase
import { auth } from '../../firebase'

const AuthNavigation = () => {

  const [currentUser, setCurrentUser] = useState(null)

  const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)

  useEffect( () => {
    return auth.onAuthStateChanged( user => userHandler( user))
  }, [])

  return <>{ currentUser ? <SignedInStack /> : <SignedOutStack /> }</>
}


export default AuthNavigation



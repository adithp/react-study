import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from '../../App'

export default function ComponentE()

{
    const username = useContext(UserContext);
  return (
<h1>my name is {username}</h1>

  );
}

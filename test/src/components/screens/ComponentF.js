import React from 'react';
import {UserContext,EmailContext} from "../../App";

export default function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {(name) => (
                <EmailContext.Consumer>
                    {(email) => (
                        <h1>My Name Is {name} Email Is {email}</h1>
                    )}
                </EmailContext.Consumer>
               
  )}
        </UserContext.Consumer>
    </div>
  )
}

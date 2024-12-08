import React, { createContext } from 'react'

import SEcond from './SEcond';
export const data=createContext();
export default function First() {
    const name="Hell";
  return (
    <>
    <data.Provider value={name}>
        <SEcond/>
    </data.Provider>
    </>
  )
}
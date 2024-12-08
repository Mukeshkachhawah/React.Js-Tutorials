import React from 'react'

import { createContext   } from 'react'

import Second from './Second';

export const data = createContext();

export const data2 = createContext();

export default function Main() {

    const name = "hello";


    const location = "Tech-Fly";

    return (
        <>

            <data.Provider value={name}>
                <data2.Provider value={location}>
                    <Second />
                </data2.Provider>
            </data.Provider>

        </>
    )
}

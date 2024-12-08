import React from 'react'

export default function Data(props) {
    return (
        <>
            <div>
                <button onClick={() => {
                    props.onSelect(props.id)
                }}>x</button>
                <span>{props.text}</span>
            </div>
            <br />
        </>
    )
}

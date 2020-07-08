import React from 'react'

export default function Container({ type = 'body', constrain = true, children }) {

    return (
        <div className={`container ${ type ? ` container--${ type }` : ''  }`}>
            <Constrain constrain={ constrain }>
                {
                    children
                }
            </Constrain>
        </div>
    )

}

function Constrain({ constrain, children }) {
    if (!constrain) return <>{ children }</>
    return (
        <div className='constrain'>{ children }</div>
    )
}
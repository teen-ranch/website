import React from 'react'

import { Link } from 'components/Router'

import './button.scss'

export default function Button({ children, style, className, to, href, onClick, target, rel }) {
    
    const defaultClassName = `button ${ className ? className : '' }`

    const ELEMENT_TYPES = {
        link: {
            element: Link,
            properties: {
                style,
                className: defaultClassName,
                to
            }
        },
        button: {
            element: 'button',
            properties: {
                style,
                className: defaultClassName,
                onClick,
                type: 'button'
            }
        },
        externalLink: {
            element: 'a',
            properties: {
                style,
                className: defaultClassName,
                href,
                target,
                rel
            }
        }
    }

    const elementType = to ? ELEMENT_TYPES.link : href ? ELEMENT_TYPES.externalLink : ELEMENT_TYPES.button

    const El = elementType.element

    return <El { ...elementType.properties }>{ children }</El>
}
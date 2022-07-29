import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {string} props.className - we need this to allow "Extending Styles" feature of styled-components
 * @param {React.ReactElement} props.icon - icon that is shown right of the text
 * @param {React.ReactNode} props.children
 */
export default function LinkBtn({ className, icon, children }) {
    return (
        <Link className={className}>{children}{icon && icon}</Link>
    )
}

const Link = styled.a`
    pointer-events: all;
    color: #06c;
    display:flex;
    align-items:center;
    svg{
        fill: #06c;
        padding-left:0;
    }
    &:hover{
        text-decoration: underline;
    }
`

LinkBtn.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.element,
    children: PropTypes.node
};
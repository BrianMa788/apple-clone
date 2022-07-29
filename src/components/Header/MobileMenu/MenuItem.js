import styled from "styled-components"

/**
 * By setting translateY of transform and transition of transform, we can make menu item seem moving when
 * the menu is openning or closing.
 */
const MenuItem = styled.a`
    padding:10px 0px;
    max-width:584px;
    width:100%;
    margin:0 auto;
    text-align:left;
    ${({display, translateY, opacityTransiDura_openMenu, opacityTransiDelay_openMenu,
    transformTransiDura_openMenu, transformTransiDelay_openMenu, opacityTransiDura_closeMenu,
    opacityTransiDelay_closeMenu, transformTransiDura_closeMenu, transformTransiDelay_closeMenu})=>`
    opacity: ${ display ? '1' : '0'}; 
    transform: ${display ? 'none' : `translateY(${translateY}px)`};
    transition: ${display ?
    `opacity ${opacityTransiDura_openMenu}s 
        cubic-bezier(0.32, 0.08, 0.24, 1) ${opacityTransiDelay_openMenu}s, 
     transform ${transformTransiDura_openMenu}s 
        cubic-bezier(0.32, 0.08, 0.24, 1) ${transformTransiDelay_openMenu}s`
        : 
    `opacity ${opacityTransiDura_closeMenu}s 
        cubic-bezier(0.52, 0.16, 0.52, 0.84) ${opacityTransiDelay_closeMenu}s,
     transform ${transformTransiDura_closeMenu}s 
        cubic-bezier(0.52, 0.16, 0.52, 0.84) ${transformTransiDelay_closeMenu}s`};
    `}
    &:not(:last-child) {
        border-bottom:#424245 1px solid;
    }
    &:hover{
        color:#fff;
    }
`

export default MenuItem;
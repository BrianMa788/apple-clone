import React from 'react'
import styled, { css } from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MobileMenu from './MobileMenu'
import {iconHoverEffect} from './styles'
import {removeEmptySpace} from '../../helper/utils';
import {menuItems} from '../../config';
const appIconSrc = "./images/Apple_logo_grey.svg";

function Header() {
    return (
        <Container>
            <Menu>
                <AppleIcon src={appIconSrc}/>
                {menuItems && menuItems.map(item =>
                    <a href="#" key={removeEmptySpace(item)}>{item}</a>
                )}
                <DesktopSearchIcon fontSize='small' />
                <DesktopShoppingBagOutlinedIcon fontSize='small' />
            </Menu>
            <MobileMenu appIconSrc={appIconSrc} menuItems={menuItems}/>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color:#000008;
    position:fixed;
    top:0;
    left:0;
    right:0;
    height: 44px;
    z-index:5;
    user-select:none;
    align-items:center;
    @media(max-width:833px){
        height: 48px;
    }
`

const Menu = styled.div`
    margin: 0 auto;
    padding:0 max(22px,env(safe-area-inset-left));
    max-width: 980px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
    a{
        font-size: 12px;
    }
    a:hover{
        color:#f5f5f7;
        opacity:0.95 ;
    }
    @media(max-width:833px){
        display:none;
    }
`

const iconStyled = css`
    cursor:pointer;
    fill:#fff !important;
    ${iconHoverEffect}
`

const DesktopSearchIcon = styled(SearchIcon)`
    ${iconStyled}
`

const DesktopShoppingBagOutlinedIcon = styled(ShoppingBagOutlinedIcon)`
    ${iconStyled}
`

const AppleIcon = styled.img`
    cursor:pointer;
    ${iconHoverEffect}
`
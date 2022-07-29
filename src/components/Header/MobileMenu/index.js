import React, { useState } from 'react'
import styled from "styled-components"
import { Squeeze as Hamburger } from 'hamburger-react'
import MenuList from './MenuList'
import SearchBox from './SearchBox'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { iconHoverEffect } from '../styles';
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {string} props.appIconSrc - image path of app icon
 * @param {string[]} props.menuItems - array of menu items
 */
const MobileMenu = ({ appIconSrc, menuItems }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return <>
        <MobileMenuBar>
            <HamburgerWrapper>
                <Hamburger size={17} distance="lg" color="#c8c8c8" toggled={isMenuOpened} toggle={setIsMenuOpened} />
            </HamburgerWrapper>
            <AppleIcon src={appIconSrc}
                height="47px" width="16px" />
            <MobileShoppingBagOutlinedIcon fontSize='small' display={isMenuOpened ? 1 : 0} />
        </MobileMenuBar>
        <MobileMenuBackground display={isMenuOpened ? 1 : 0}>
            <MobileMenuContent>
                <SearchBoxWrap display={isMenuOpened ? 1 : 0}>
                    <SearchBox showPlaceholder={isMenuOpened} placeholder='Search apple.com' />
                </SearchBoxWrap>
                {menuItems && <MenuList items={menuItems} display={isMenuOpened} />}
            </MobileMenuContent>
        </MobileMenuBackground>
    </>
}

export default MobileMenu;

const MobileMenuBar = styled.div`
    padding:0;
    width:100%;
    z-index:12;
    position:relative;
    display:none;
    @media(max-width:833px){
        display:flex;
        align-items:center ;
    }
`

const AppleIcon = styled.img`
    margin: 0 auto;
    cursor:pointer;
    ${iconHoverEffect}
`

const MobileMenuBackground = styled.div`
    display:none;
    z-index:6;
    top:0;
    left:0;
    right:0;
    height:${props => props.display ? '100%' : '48px'};
    width:100%;
    position:fixed;
    overflow: hidden;
    max-height: none;
    background:${props => props.display ? 'black' : 'rgba(0,0,0,0.8)'};  
    transition: ${props => props.display ?
        'background .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)'
        : 'background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)'};  
    touch-action: none; /* prevent scrolling on the page when the menu is openned */
    @media(max-width:833px){
        display:initial;
    }
`

const MobileMenuContent = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:48px;
    width:100%;
    input, a {
        font-size:17px;
    }
`

const SearchBoxWrap = styled.div`
    width:100%;
    padding:0 10px;
    padding-bottom:14px;
    border-bottom:1px #424245 solid ;
    transform-origin: 100% 0;
    transform:  ${props => props.display ? 'scaleY(1)' : 'scaleY(0)'};
    background:${props => props.display ? '#000' : 'transparent'};
    visibility:  ${props => props.display ? 'visible' : 'hidden'};
    transition: ${props => props.display ?
        `background .18s cubic-bezier(0.32, 0.08, 0.24, 1) .18s,
            visibility 0s linear 0s,
            transform 0.32s` :
        `background .44s cubic-bezier(0.52, 0.16, 0.24, 1) .1s,
            visibility 0s linear .5s, transform 1s`};
`

const HamburgerWrapper = styled.div`
    margin:0 16px;
    *{
        width:21px !important ; 
        left:0 !important;
    }
`

const MobileShoppingBagOutlinedIcon = styled(ShoppingBagOutlinedIcon)`
    margin:0 16px;
    opacity:${props => props.display ? '0' : '1'};
    visibility:${props => props.display ? 'hidden' : 'initial'};
    transition: ${props => props.display ? `opacity 0.5s cubic-bezier(0.32, 0.08, 0.24, 1),
        visibility 0s linear .64s !important`: 'opacity 0.4s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1) !important'};
    cursor:pointer;
    &:hover{
        fill:#fff !important;
    }
`

MobileMenu.propTypes = {
    appIconSrc: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired
};
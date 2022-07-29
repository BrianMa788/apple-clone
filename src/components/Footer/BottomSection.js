import styled from "styled-components"
import { footerLinks } from '../../config';
import _ from 'lodash';
import { removeEmptySpace } from '../../helper/utils';

const BottomSection = () => {
    return <Wrap>
        <ShopSubSection>
            More ways to shop:&nbsp;
            <a href="#">Find an Apple Store</a> or&nbsp;
            <a href="#">other retailer</a> near you. Or call 800-908-988.
        </ShopSubSection>
        <LegalNLangSubSection>
            <LegalCopyRight>Copyright © 2022 Apple Inc. All rights reserved.</LegalCopyRight>
            <LegalLinks>
                {!_.isUndefined(footerLinks) &&
                    footerLinks.map(el => <Link href={el.link} key={removeEmptySpace(el.name)}>{el.name}</Link>)}
            </LegalLinks>
            <LocaleLinksWrap>
                <ENLangBtn href="#">Hong Kong</ENLangBtn>
                <HKLangBtn href="#">繁體中文</HKLangBtn>
            </LocaleLinksWrap>
        </LegalNLangSubSection>
    </Wrap>
}

export default BottomSection;

const Wrap = styled.div`
    padding-top: 34px;
    padding: 17px 0 21px;
    letter-spacing:normal ;
`

const ShopSubSection = styled.div`
    margin-bottom: 7px;
    padding-bottom: 8px;
    border-bottom: 1px solid #d2d2d7;
    color:#6e6e73;
    a{
        color:#06c;
        letter-spacing: normal;
    }
    a:hover{
        text-decoration: underline;
    }
    @media (max-width:833px){
        border-bottom:0;
    }
`

const LegalNLangSubSection = styled.div`
    top: -3px;
    position: relative;
    display:flex;
    @media (max-width:907px){
        flex-wrap: wrap;
        flex-direction:row;
    }
`

const LegalCopyRight = styled.div`
    margin-right: 30px;
    margin-top: 5px;
    color:#6e6e73;
    @media (max-width:907px){
        order:1;
    }
    @media (max-width:833px){
        order:2;
        padding-top: 12px;
        flex-basis: 100%;
    }
`

const LegalLinks = styled.div`
    position: relative;
    top: -5px;
    margin-right: 30px;
    margin-top: 5px;
    @media (max-width:907px){
        order:3;
        flex-basis: 100%;
    }
    @media (max-width:833px){
        order:3;
    }
`

const LocaleLinksWrap = styled.div`
    margin-top: 5px;
    position: relative;
    white-space: nowrap;
    margin-left: auto;
    @media (max-width:907px){
        order:2;
    }
    @media (max-width:833px){
        order:1;
        flex-basis: 100%;
    }
`

const Link = styled.a`
    border-right: 1px solid #d2d2d7;
    margin-right: 7px;
    padding-right: 10px;
    display: inline-block;
    margin-top: 5px;
    white-space: nowrap;
    color: #424245; 
    &:hover{
        text-decoration: underline;
    }
    &:last-child {
        border-right:0;
    }
    @media (max-width:833px){
        &:last-child {
            margin-top:0;
        }
    }
`

const ENLangBtn = styled.a`
    color:#424245;
    &:hover{
        text-decoration: underline;
    }
`

const HKLangBtn = styled(ENLangBtn)`
    border-left: 1px solid #d2d2d7;
    margin-left: 7px;
    padding-left: 11px;
`
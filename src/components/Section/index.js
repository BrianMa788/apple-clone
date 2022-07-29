import React from 'react'
import styled, { css } from "styled-components"
import PropTypes from 'prop-types';
import { SECTION_SIZE, SECTION_TEXT_POSITION } from '../../constants/section';
import ProductDescription from './ProductDescription';
import ProductName from './ProductName';
import ProductNameInImage from './ProductNameInImage';
import { TEXT_COLOR } from '../../constants/color';

/**
 * @param {Object} props
 * @param {string} props.className - we need this to allow "Extending Styles" feature of styled-components
 * @param {string} props.bgImg - path of background image for the screen size of desktop
 * @param {string} props.bgImg_md - path of background image for the screen size of tablet
 * @param {string} props.bgImg_sm - path of background image for the screen size of mobile
 * @param {string} props.label - label
 * @param {string} props.name - name of section
 * @param {{src:string, width:string, height:string}} props.nameInImage - a json which provide info of an image that is used to show name of section. This is for the screen size of desktop. props.name will not show if this one is provided.
 * @param {{src:string, width:string, height:string}} props.nameInImage_md - a json which provide info of an image that is used to show name of section. This is for the screen size of tablet. props.name will not show if this one is provided.
 * @param {{src:string, width:string, height:string}} props.nameInImage_sm - a json which provide info of an image that is used to show name of section. This is for the screen size of mobile. props.name will not show if this one is provided.
 * @param {string} props.desc - description
 * @param {React.ReactElement} props.LeftBtn - left button
 * @param {React.ReactElement} props.RightBtn - right button
 * @param {SECTION_TEXT_POSITION} props.textPosition - must be values from enum SECTION_TEXT_POSITION
 * @param {TEXT_COLOR} props.textColor - must be values from enum TEXT_COLOR
 * @param {SECTION_SIZE} props.size - must be values from enum SECTION_SIZE
 */
function Section({ className, bgImg, bgImg_md, bgImg_sm, label, name, nameInImage, nameInImage_md, nameInImage_sm, desc,
    LeftBtn, RightBtn, textPosition, textColor, size }) {
    return (
        <Wrap bgImg={bgImg} bgImg_md={bgImg_md} bgImg_sm={bgImg_sm} textPosition={textPosition} size={size} className={className} >
            <TextGrp textColor={textColor}>
                {label && <ProductLabel>{label}</ProductLabel>}
                {nameInImage ?
                    <ProductNameInImage nameInImage={nameInImage} nameInImage_md={nameInImage_md} nameInImage_sm={nameInImage_sm} />
                    : <ProductName size={size}>{name}</ProductName>}
                {desc && <ProductDescription size={size}>{desc}</ProductDescription>}
            </TextGrp>
            <BtnGrp size={size}>
                {LeftBtn}
                {RightBtn}
            </BtnGrp>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    user-select:none;
    width:100vw;
    padding-top:44px;
    padding-bottom:53px;
    background-image: url("${prop => prop.bgImg}");
    background-position:50% 100%;
    background-repeat:no-repeat;
    height:580px;
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor:pointer;
    justify-content:${prop => prop.textPosition === SECTION_TEXT_POSITION.END ? "flex-end" : "flex-start"};
    ${props =>
        props.size === SECTION_SIZE.SMALL ?
            css`
                background-size:1262px 580px;
                padding-top:62px;
                @media (max-width:1068px){
                    background-image: url("${prop => prop.bgImg_md}");
                    background-size: 516px 490px;
                    height: 490px;
                    padding-top:47px;
                }
                @media(max-width:768px){
                    ${mobileBackgroundStyle}
                    height:502px;
                    padding-top:43px;
                }
            `
            : css`
                background-size:3008px 624px;
                @media (max-width:1068px){
                    background-image: url("${prop => prop.bgImg_md}");
                    background-size: 1068px 617px;
                    height:569px;
                }
                @media(max-width:768px){
                    ${mobileBackgroundStyle}
                    height:518px;
                }
            `
    }
`

const mobileBackgroundStyle = css`
    background-image: url("${prop => prop.bgImg_sm}");
    background-size: 734px 548px;
`

const TextGrp = styled.div`
    *{
        color:${prop => prop.textColor ? prop.textColor : TEXT_COLOR.DEFAULT};
    }
`

const ProductLabel = styled.h2`
    font-size: 21px;
    line-height: 1.19048;
    font-weight: 550;
    letter-spacing: .01em;
`

const BtnGrp = styled.div`
    display:flex;
    align-items:center;
    margin-top: 0.80em;
    font-size:  21px;
    line-height: 1.381;
    letter-spacing:  .011em;
    &>:nth-child(1){
        margin-left:  ${prop => prop.size === SECTION_SIZE.SMALL ? "-3px" : "-4px"};
    }
    &>:nth-child(2){
        margin-left:  ${prop => prop.size === SECTION_SIZE.SMALL ? "28px" : "32px"};
    }
    ${props =>
        props.size === SECTION_SIZE.SMALL ?
            css`
            margin-top: 0.6em;
            font-size:  17px;
            line-height:1.23536;
            letter-spacing:  -.022em;
        `:
            css`
            @media(max-width:1068px){
                margin-top: 0.74em;
                font-size: 19px;
                line-height: 1.21053;
                letter-spacing: .012em;
            }
            @media(max-width:768px){
                margin-top: 0.7em;
                font-size: 17px;
                line-height: 1.23536;
                letter-spacing: -.022em;
            }`
    }
`

Section.propTypes = {
    className: PropTypes.string,
    bgImg: PropTypes.string.isRequired,
    bgImg_sm: PropTypes.string.isRequired,
    bgImg_md: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    nameInImage: PropTypes.object,
    nameInImage_md: PropTypes.object,
    nameInImage_sm: PropTypes.object,
    desc: PropTypes.string,
    LeftBtn: PropTypes.element,
    RightBtn: PropTypes.element,
    textPosition: PropTypes.oneOf([SECTION_TEXT_POSITION.START, SECTION_TEXT_POSITION.END]).isRequired,
    textColor: PropTypes.string,
    size: PropTypes.oneOf([SECTION_SIZE.BIG, SECTION_SIZE.SMALL]).isRequired,
};
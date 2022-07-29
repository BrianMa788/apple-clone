import styled, {css} from "styled-components"
import { SECTION_SIZE } from '../../constants/section';

const StyleInMobile=css`
    font-size: 19px;
    line-height: 1.21053;
    letter-spacing: .012em;
`

const ProductDescription = styled.p`
    font-size: 28px;
    line-height:  1.10722;
    letter-spacing: .004em;
    margin-top:3px;
    @media(max-width:1068px){
        font-size: 24px;
        line-height: 1.16667;
        letter-spacing: .009em;
    }
    @media(max-width:768px){
        ${StyleInMobile}
    }
    ${props =>
        props.size === SECTION_SIZE.SMALL &&
        css`
            font-size: 21px;
            line-height:1.2381;
            letter-spacing:  .016em;
            margin-top:  7px; 
            margin-left: auto;
            margin-right: auto;
            max-width: 430px;
            @media(max-width:1068px){
                ${StyleInMobile}
                max-width: 330px;
            }
        `
    }  
`

export default ProductDescription;
import styled, {css} from "styled-components"
import { SECTION_SIZE } from '../../constants/section';

const MobileStyled=css`
    font-size: 32px;
    line-height: 1.125;
`

const ProductName = styled.h1`
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -.005em;
    ${prop =>
        prop.size === SECTION_SIZE.SMALL ?
        css`
            font-size: 40px;
            line-height:1.1;
            letter-spacing:0em;
            @media (max-width:1068px){
                ${MobileStyled};
                letter-spacing: -.002em;
            }
        `:
        css`
            @media (max-width:1068px){
                font-size: 48px;
                line-height: 1.08349;
                letter-spacing: -.002em;
            }
            @media (max-width:768px){
                ${MobileStyled};
                letter-spacing: .004em;
            }
        `
    }
`

export default ProductName;
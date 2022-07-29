import styled from "styled-components"

const ProductNameInImage = styled.div`
    margin:auto;
    background-repeat:no-repeat;
    ${({ nameInImage })  => {
        const {src, height, width}=nameInImage;
        return `
            background-image: url("${src}");
            height:${height};
            width:${width};
       `
    }}
    ${({ nameInImage_md })  => {
        const {src, height, width}=nameInImage_md;
        return `
            @media (max-width:1068px){
                background-image: url("${src}");
                height:${height};
                width:${width};
            }
        `
    }}
    ${({ nameInImage_sm })  => {
        const {src, height, width}=nameInImage_sm;
        return `
            @media (max-width:768px){
                background-image: url("${src}");
                height:${height};
                width:${width};
            }
        `
    }}
`

export default ProductNameInImage;
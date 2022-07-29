import React, { useState } from 'react'
import styled from "styled-components"
import { removeEmptySpace } from '../../helper/utils';
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {string} props.id 
 * @param {string} props.name 
 * @param {string[]} props.items - array of items in a directory section
 */
const DirectorySection = ({ id, name, items }) => {

    const [sectionState, setSectionState] = useState(false);

    return <Wrap>
        <SectionLabel onClick={() => setSectionState(c => !c)}
            selected={sectionState}>
            {name}
        </SectionLabel>
        <SectionList
            $display={sectionState}>
            {items.map(item =>
                <SectionListItem key={removeEmptySpace(item)}>
                    <a href="#">{item}</a>
                </SectionListItem>)}
        </SectionList>
    </Wrap>
}

export default DirectorySection;

const Wrap = styled.div`
    & ~ & {
        padding-top: 24px;
        @media (max-width:833px){
            padding-top: 0;
        }
    }
    @media (max-width:833px){
        position:relative;
        overflow: hidden;
        text-align:left;
        user-select:none;
        border-bottom: 1px solid #d2d2d7;
        z-index: 1;
    }
`

const SectionLabel = styled.h3`
    color:#1d1d1f;
    font-weight: 600;
    padding-right: 20px;
    padding-bottom: 0.8em;
    pointer-events:none;
    @media (max-width:833px){
        color:${props => props.selected ? '#000' : '#6e6e73'};
        cursor:pointer;
        pointer-events:initial;
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: 400;
        &:hover{
            color:#000;
        }
        &::after{
            content: '+';
            float:right;
            font-size: 14px;
            font-weight: normal;
            margin-top: -2px;
            margin-right: -10px;
            transition: transform .3s ease;
            transform:${props => props.selected ? "rotate(45deg) scale(1.08)" : 'none'};
        }
        overflow:hidden;

    }
`

const SectionList = styled.ul`
    list-style:none;
    display:block;
    margin-right: 20px;
    @media (max-width:833px){
        z-index: -1;
        position:${props => props.$display ? 'static' : 'absolute'};
        visibility:${props => props.$display ? 'visible' : 'hidden'};
        overflow:hidden;
        padding-top: 5px;
        padding-bottom:16px;
        transform: ${props => props.$display ? 'none' : 'translateY(-25px)'};
        transition:transform 300ms ease;
    }
`

const SectionListItem = styled.li`
    a{
        color:#424245;
    }
    a:hover{
        text-decoration: underline;
    }
    margin-bottom: 0.8em;
    @media (max-width:833px){
        padding: 6px 14px;
        margin-bottom: 0;
        &:hover{
            cursor:pointer;
            text-decoration: underline;
        }
    }
`

DirectorySection.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

/**
 * @param {string} placeholder 
 * @param {boolean} showPlaceholder - whether the placeholder is shown or not
 */
const SearchBox = ({ placeholder, showPlaceholder }) => {
    return <Container>
        <Wrap show={showPlaceholder}>
            <MobileSearchIcon />
            <SearchInput placeholder={placeholder} />
        </Wrap>
    </Container>
}

export default SearchBox;

const Container = styled.div`
    height:2.31765em;
    padding-left:8px;
    background:#1d1d1f;
    border-radius: 8px;
    max-width:584px;
    margin:0 auto;
`

const Wrap = styled.div`
    height:100%;
    display:flex;
    align-items:center ;
    transform: ${props => props.show ? 'none' : 'translateY(-8px);'};
    opacity: ${props => props.show ? '1' : '0'};
    transition: ${props => props.show ?
        `transform 0.28s cubic-bezier(0.32, 0.08, 0.24, 1) 0.08s,
        opacity 0.26s cubic-bezier(0.32, 0.08, 0.24, 1) 0.1s`:
        `transform .49s cubic-bezier(0.32, 0.08, 0.24, 1) 0.15s,
        opacity 0.2s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.16s`};
`

const MobileSearchIcon = styled(SearchIcon)`
    opacity:0.4;
    margin-right:4px;
    width:22px !important;
`

const SearchInput = styled.input`
    width:100%;
    color:white;
    border:none;
    outline: none;
    background-color:#1d1d1f;
`

SearchBox.propTypes = {
    placeholder:PropTypes.string, 
    showPlaceholder:PropTypes.bool
};
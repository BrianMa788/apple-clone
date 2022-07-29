import MenuItem from './MenuItem'
import styled from "styled-components"
import PropTypes from 'prop-types';
import { removeEmptySpace } from '../../../helper/utils'

/**
 * @param {Object} props
 * @param {string[]} props.items - array of menu items
 * @param {boolean} props.display - whether the menu list is display or not
 */
const MenuList = ({ items, display }) => {

    let translateY = -44;//translateY of transform for first menu item

    let currOpacityTransiDura_openMenu = .3091;//opacity transition duration for first menu item during menu opening
    let currOpacityTransiDuraIncrement_openMenu = .00902;//duration for next menu item will be increased by .00902
    let currOpacityTransiDelay_openMenu = .03;//opacity transition delay for first menu item
    const currOpacityTransiDelayIncrement_openMenu = .01333;//delay of next menu item will be increased by .01333

    let currTransformTransiDura_openMenu = .3455;//transform transition duration for first menu item during menu opening
    let currTransformTransiDuraIncrement_openMenu = .00801;//duration of next menu item will be increased by .00801
    let currTransformTransiDelay_openMenu = .02;//transform transition delay for first menu item
    const currTransformTransiDelayIncrement_openMenu = .01333//delay of next menu item will be increased by .01333

    let currOpacityTransiDura_closeMenu = .3345;//opacity transition duration for first menu item during menu closing
    let currOpacityTransiDuraDecrement_closeMenu = .02877;//duration of next menu item will be decreased by .02877
    let currOpacityTransiDelay_closeMenu = .15;//opacity transition delay for first menu item
    const currOpacityTransiDelayDecrement_closeMenu = .01333;//delay of next menu item will be decreased by .01333

    let currTransformTransiDura_closeMenu = .4669;//transform transition duration for first menu item during menu closing
    let currTransformTransiDuraDecrement_closeMenu = .01138;//duration of next menu item will be decreased by .01138
    let currTransformTransiDelay_closeMenu = .108;//transform transition delay for first menu item
    const currTransformTransiDelayDecrement_closeMenu = .00867;//delay of next menu item will be decreased by .00867

    const updateForNextItem = () => { //update transition values for next menu item
        translateY = translateY + 4;// translateY of transform for next menu item
        //increase opacity transition values for next menu item
        currOpacityTransiDura_openMenu += currOpacityTransiDuraIncrement_openMenu;
        currOpacityTransiDuraIncrement_openMenu -= .00050;//adjust the increment value for next menu item
        currOpacityTransiDelay_openMenu += currOpacityTransiDelayIncrement_openMenu;
        //increase transform transition values for next menu item
        currTransformTransiDura_openMenu += currTransformTransiDuraIncrement_openMenu;
        currTransformTransiDuraIncrement_openMenu += .00195;//adjust the increment value for next menu item
        currTransformTransiDelay_openMenu += currTransformTransiDelayIncrement_openMenu;
        //decrease opacity transition values for next menu item
        currOpacityTransiDura_closeMenu -= currOpacityTransiDuraDecrement_closeMenu;
        currOpacityTransiDuraDecrement_closeMenu -= .00426;//adjust the decrement value for next menu item
        currOpacityTransiDelay_closeMenu -= currOpacityTransiDelayDecrement_closeMenu;
        //decrease transform transition values for next menu item
        currTransformTransiDura_closeMenu -= currTransformTransiDuraDecrement_closeMenu;
        currTransformTransiDuraDecrement_closeMenu -= .0016;//adjust the decrement value for next menu item
        currTransformTransiDelay_closeMenu -= currTransformTransiDelayDecrement_closeMenu;
    }

    return <Wrap>
        {items.map(item => {
            const menuItem =
                <MenuItem href="#"
                    display={display ? 1 : 0}
                    translateY={translateY}
                    opacityTransiDura_openMenu={currOpacityTransiDura_openMenu}
                    opacityTransiDelay_openMenu={currOpacityTransiDelay_openMenu}
                    transformTransiDura_openMenu={currTransformTransiDura_openMenu}
                    transformTransiDelay_openMenu={currTransformTransiDelay_openMenu}
                    opacityTransiDura_closeMenu={currOpacityTransiDura_closeMenu}
                    opacityTransiDelay_closeMenu={currOpacityTransiDelay_closeMenu}
                    transformTransiDura_closeMenu={currTransformTransiDura_closeMenu}
                    transformTransiDelay_closeMenu={currTransformTransiDelay_closeMenu}
                    key={removeEmptySpace(item)}
                >
                    {item}
                </MenuItem>;
            updateForNextItem();
            return menuItem;
        })}
    </Wrap>
}

export default MenuList;

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    padding:0 40px;
`

MenuList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    display: PropTypes.bool.isRequired
};
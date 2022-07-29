import React from 'react'
import styled from "styled-components"
import Section from "../components/Section"
import LinkBtn from "../components/LinkBtn";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TEXT_COLOR } from '../constants/color';
import { SECTION_SIZE, SECTION_TEXT_POSITION } from '../constants/section';

function Home() {
    return (
        <Container>
            <Section bgImg={'./images/iphone13_background.jpg'}
                bgImg_sm={'./images/iphone13_background_sm.jpg'}
                bgImg_md={'./images/iphone13_background_md.jpg'}
                name={"iPhone 13"}
                desc={"Your new superpower"}
                LeftBtn={<LinkBtn icon={<MediumChevronRightIcon />}>Learn More</LinkBtn>}
                RightBtn={<LinkBtn icon={<MediumChevronRightIcon />}>Buy</LinkBtn>}
                textPosition={SECTION_TEXT_POSITION.START}
                size={SECTION_SIZE.BIG}
            />
            <Row>
                <Section
                    bgImg={'./images/promo_iphone13pro_avail.jpg'}
                    bgImg_md={'./images/promo_iphone13pro_avail_md.jpg'}
                    bgImg_sm={'./images/promo_iphone13pro_avail_sm.jpg'}
                    name={"iPhone 13 Pro"}
                    desc={"Oh. So. Pro."}
                    LeftBtn={<LinkBtn icon={<SmallChevronRightIcon />}>Learn More</LinkBtn>}
                    RightBtn={<LinkBtn icon={<SmallChevronRightIcon />}>Buy</LinkBtn>}
                    textPosition={SECTION_TEXT_POSITION.START}
                    size={SECTION_SIZE.SMALL}
                />
                <AppleWatchSection bgImg={'./images/promo_watch_lte.jpg'}
                    bgImg_md={'./images/promo_watch_lte_md.jpg'}
                    bgImg_sm={'./images/promo_watch_lte_sm.jpg'}
                    name={"SERIES 7"}
                    nameInImage={
                        { src: './images/promo_logo_watch_lte.png', width: '146px', height: '56px' }
                    }
                    nameInImage_md={
                        { src: './images/promo_logo_watch_lte_md.png', width: '118px', height: '45px' }
                    }
                    nameInImage_sm={
                        { src: './images/promo_logo_watch_lte_sm.png', width: '122px', height: '47px' }
                    }
                    desc={"It's our largest display yet."}
                    LeftBtn={<LinkBtn icon={<SmallChevronRightIcon />}>Learn More</LinkBtn>}
                    RightBtn={<LinkBtn icon={<SmallChevronRightIcon />}>Buy</LinkBtn>}
                    textPosition={SECTION_TEXT_POSITION.START}
                    size={SECTION_SIZE.SMALL}
                />
            </Row>
            <Row>
                <Section bgImg={'./images/ipadair_background.jpg'}
                    bgImg_md={'./images/ipadair_background_md.jpg'}
                    bgImg_sm={'./images/ipadair_background_sm.jpg'}
                    name={"iPad air"}
                    nameInImage={
                        { src: './images/promo_logo_ipadair.png', width: '133px', height: '37px' }
                    }
                    nameInImage_md={
                        { src: './images/promo_logo_ipadair_md.png', width: '112px', height: '30px' }
                    }
                    nameInImage_sm={
                        { src: './images/promo_logo_ipadair_sm.png', width: '112px', height: '30px' }
                    }
                    desc={"Light. Bright. Full of might."}
                    LeftBtn={<LightBlueLinkBtn icon={<SmallChevronRightIcon />}>Learn More</LightBlueLinkBtn>}
                    RightBtn={<LightBlueLinkBtn icon={<SmallChevronRightIcon />}>Buy</LightBlueLinkBtn>}
                    textPosition={SECTION_TEXT_POSITION.START}
                    size={SECTION_SIZE.SMALL}
                    textColor={TEXT_COLOR.WHITE}
                />
                <Section bgImg={'./images/promo_studiodisplay.jpg'}
                    bgImg_md={'./images/promo_studiodisplay_md.jpg'}
                    bgImg_sm={'./images/promo_studiodisplay_sm.jpg'}
                    name={"Studio Display"}
                    desc={"A sight to be bold."}
                    LeftBtn={<LinkBtn icon={<SmallChevronRightIcon />}>Learn More</LinkBtn>}
                    RightBtn={<LinkBtn icon={<SmallChevronRightIcon />}>Buy</LinkBtn>}
                    textPosition={SECTION_TEXT_POSITION.START}
                    size={SECTION_SIZE.SMALL}
                />
            </Row>
        </Container>
    )
}

export default Home

const Container = styled.div`
    padding-top:44px;
    padding-bottom:12px;
    display:flex;
    flex-direction:column ;
    gap: 12px;
`

const Row = styled.div`
    display:flex;
    gap: 12px;
    margin:0 12px;
    @media(max-width:768px){
        flex-direction:column;
        margin:0;
    }
`

const AppleWatchSection = styled(Section)`
    padding-top:50px;
    @media(max-width:1068px){
        padding-top:40px;
    }
    @media(max-width:768px){
        padding-top:38px;
    }
`

const LightBlueLinkBtn = styled(LinkBtn)`
    color:#2997ff;
    svg{
        fill:#2997ff;
    }
`

const MediumChevronRightIcon = styled(ChevronRightIcon).attrs(props => ({
    fontSize: 'medium'
}))``

const SmallChevronRightIcon = styled(ChevronRightIcon).attrs(props => ({
    fontSize: 'small'
}))``
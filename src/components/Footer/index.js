import React from 'react'
import styled from "styled-components"
import BottomSection from './BottomSection';
import DirectorySection from './DirectorySection'
import { footerNote, footerData } from '../../config';

function Footer() {

    return (
        <Container>
            <Content>
                <Notes>
                    {footerNote}
                </Notes>
                <Directory>
                    {footerData.map(directoryGrp =>
                        <DirectoryGroup key={directoryGrp[0].id}>
                            {
                                directoryGrp.map(section => {
                                    return <DirectorySection id={section.id} name={section.name} items={section.items}
                                        key={section.id} />
                                })
                            }
                        </DirectoryGroup>
                    )}
                </Directory>
                <BottomSection />
            </Content>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    letter-spacing: normal;
    line-height: 1.33337;
    background-color:#f5f5f7 ;
    text-align:left;
`

const Content = styled.div`
    margin: 0 auto;
    max-width: 980px;
    padding: 0 22px;
    *{
        font-size: 12px;
    }
    @media (max-width:833px){
        padding: 0 16px;
    }
`

const Notes = styled.div`
    border-bottom: 1px solid #d2d2d7;
    padding: 17px 0 20.6px ;
    color:#6e6e73;
    @media (max-width:768px){
        letter-spacing: -.01em;
    }
`

const Directory = styled.div`
    display:flex;
    flex-wrap:nowrap ;
    padding-top: 20px;
    @media (max-width:833px){
        flex-direction:column ;
        align-items:center ;
        text-align:center;
    }
`

const DirectoryGroup = styled.div`
    flex-basis: 25%;
    width:100%;
`
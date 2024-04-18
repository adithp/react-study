import React from 'react';
import styled from "styled-components";
function Navbar() {
  return (
    <>
        <Wrapper className="wrapper">
            <Header>
                <LeftContainer>
                    <ImageLInk>
                        <LogoImage src={require("../../assets/images/moke..png")} />
                    </ImageLInk>
                </LeftContainer>
                <RightContainer>
                    <ListItems>
                        <Items>
                            <NavLinks>Get Signal</NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>Support</NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>Blog</NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>Devlopers</NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>Carees</NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>Donate</NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>
                                <SocialImage src={require("../../assets/images/twitter.png")} />
                                </NavLinks>
                        </Items>
                        <Items>
                            <NavLinks>
                            <SocialImage src={require("../../assets/images/instagram.png")} />
                            </NavLinks>
                        </Items>
                    </ListItems>
                </RightContainer>
            </Header>
        </Wrapper>
    </>
  )
}

export default Navbar

const Wrapper = styled.div``
const Header = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`
const LeftContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`
const ImageLInk = styled.a`
display: block;
width: 100%;
`
const LogoImage = styled.img`
display: block;
width: 100%;
`
const RightContainer = styled.div``
const ListItems = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`
const Items = styled.li`
margin-right:20px;
        &:last-child{
            margin-right: 0;
        }
`
const NavLinks = styled.a`
font-size: 18px;
font-family: "poppinsregular";
font-weight: 500;
color: #1b1b1b;
`
const SocialImage = styled.img``

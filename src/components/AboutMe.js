import React from 'react'
import styled from 'styled-components'
import linda_logo from './../assets/img/linda_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContainerTitle from './../assets/styles/Title'
import theme from './../theme'

const AboutMe = () => {
    return (
        <AboutContainer>
            <ContainerTitle>
                <h1>About Me</h1>
                <p>- who I am -</p>
            </ContainerTitle>
            <InfoContainer>
                <Img>
                    <img src={linda_logo} alt="Linda Logo" />
                </Img>
                <InfoDiv>
                    <Info>I'm a frontend developer, passionate about creating and developing web interfaces. I have some experience in this area of work, with some quality projects.</Info>
                    <br />
                    <Info>This logo was created by me.</Info>
                    <div>
                        <SubTitle>Information</SubTitle>
                        <IconText>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            <p>Linda Franco Prieto</p>
                        </IconText>
                        {/* <IconText>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <p></p>
                </IconText> */}
                        <IconText>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <p>Linda_Franco96@hotmail.com</p>
                        </IconText>
                    </div>
                </InfoDiv>
            </InfoContainer>
        </AboutContainer>
    );
}

const AboutContainer = styled.div`
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1225px) {
        padding-bottom: 5rem;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

const Img = styled.div`
    width: 50%;
    text-align: center;
    
    img {
        width: 90%;
        height: auto;
    }
`

const InfoDiv = styled.div`
    width: 50%;
    padding-left: 1em;

    @media screen and (max-width: 1000px) {
        width: 100%;
        padding-top: 1.5rem;
    }
`

const Info = styled.p`
    font-size: 1.2rem;
    width: 100%;
    color: ${theme.clrPinkDark};
    font-weight: 600;
    padding-right: 20px;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

const SubTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2.3px;
    margin: 10px 0;
    color: ${theme.clrCoffee};
`

const IconText = styled.div`
    display: flex;
    font-size: 1.3rem;
    margin-bottom: 10px;
    padding-left: 1.5rem;
    align-items: center;
    color: ${theme.clrPinkDark};
    transition: all .3s ease-in;

    &:hover {
        color: ${theme.clrGrey1}
    }

    .icon {
        margin-right: 1rem;
    }

    @media screen and (max-width: 425px) {
        p {
            font-size: 4vw;
        }
    }
`

export default AboutMe;
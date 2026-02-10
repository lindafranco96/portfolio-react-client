import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import theme from './../theme'
import frontend from './../assets/img/FrontendMentor.png'

const Social = (props) => {
    const prop = props.prop;
    return (
        <SocialContainer prop={prop}>
            <SocialButton prop={prop}>
                <a href="https://github.com/lindafranco96" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </SocialButton>
            <SocialButton prop={prop}>
                <a href="https://www.linkedin.com/in/lindafrancoprieto/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </SocialButton>
            <SocialButton prop={prop}>
                <a href="https://www.instagram.com/lindahyuk/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </SocialButton>
            <SocialButton white prop={prop}>
                <a href="https://www.frontendmentor.io/profile/LindaHyuk" target="_blank" rel="noreferrer" >
                    <img src={frontend} alt="Frontend Mentor" />
                </a>
            </SocialButton>
        </SocialContainer>
    );
}

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: ${props => props.prop === 'start' ? 'flex-start' : 'center'};
    flex-wrap: wrap;
    height: 5rem;
    width: 100%;

    @media screen and (max-width: 970px) {
        justify-content: center;  
    }
`

const SocialButton = styled.div`
    margin-right: 1.5rem;
    margin:  ${props => props.prop === 'start' ? '0 1.5rem 0 0' : '1.5rem'};
    font-size: 1.5rem;
    border-radius: 50%;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    transition: all .3s ease;
    background-color: #f2f2f2;

    a {
        color: #912f56;
    }

    &:hover {
        transform: scale(1.1);
        background-color: ${(props) => props.white ? theme.clrWhiteDark : theme.clrPinkDark};
        box-shadow: 0 0 5px 5px ${theme.clrGrey5};
    }

    &:hover a {
        color: ${theme.clrWhiteDark};
    }

    &:focus {
        outline: none;
        border: none;
    }

    img {
        width: 1.5rem;
        margin-top: .5rem;
    }

    @media screen and (max-width: 970px) {
        margin:  ${props => props.prop === 'start' ? '1rem' : '1rem'};
    }
`

export default Social;
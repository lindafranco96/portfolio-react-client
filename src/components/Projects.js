import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContainerTitle from '../assets/styles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import theme from './../theme'

const Projects = () => {
    // 1. LÓGICA DINÁMICA
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/proyectos`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setProyectos(data))
            .catch(err => console.error("Error cargando proyectos:", err));
    }, []);

    // 2. RENDERIZADO
    return (
        <ProjectsDiv>
            <ContainerTitle>
                <h1>My Projects</h1>
                <p>- recent works -</p>
            </ContainerTitle>
            
            <ProjectsContainer>
                {proyectos.map((p) => (
                    <ProjectContent key={p.id}>
                        {/* IMAGEN DESDE BD */}
                        <img src={p.urlImagen} alt={p.titulo} />
                        
                        <div className="works__data">
                            <div className="works__link-group">
                                {/* LINKS DESDE BD */}
                                <a href={p.urlDespliegue} target="_blank" rel="noreferrer" className="works__link">
                                    <FontAwesomeIcon icon={faLink} className="projects__icon" />
                                </a>
                                <a href={p.urlRepositorio} target="_blank" rel="noreferrer" className="works__link">
                                    <FontAwesomeIcon icon={faGithubSquare} className="projects__icon" />
                                </a>
                            </div>
                            
                            {/* TEXTOS DESDE BD */}
                            <span className="works__title">{p.titulo}</span>
                            
                            <span className="works__description">
                                {p.descripcion}
                            </span>
                            
                            {/* ETIQUETAS DINÁMICAS */}
                            <div className="works__description-makes">
                                {p.tecnologias && 
                                    p.tecnologias.split(',').map((tech, index) => (
                                        <span key={index}>{tech.trim()}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </ProjectContent>
                ))}
            </ProjectsContainer>
        </ProjectsDiv>
    );
}

const ProjectsDiv = styled.div`
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
`

const ProjectsContainer = styled.div`
    display: flex;
    height: 70vh;
    flex-wrap: wrap;
    justify-content: space-around;
`

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
    margin: 3.5rem 1rem;
    text-align: center;
    justify-content: center;
    border-radius: .8rem;
    position: relative;
    overflow: hidden;
    heigth: 1100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: top;
    }

    .works__data {
        position: absolute;
        bottom: -100%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(185,59,109,.9); 
        border-radius: .5rem;
        transition: .3s;
    }

    .works__link {
        display: inline-flex;
        font-size: 1.5rem;
        background-color: ${theme.clrWhiteDark};
        color: ${theme.clrPinkDark};
        padding: .25rem;
        border-radius: .25rem;
        margin-bottom: 1rem;
        transition: all .3s ease;
    }

    .works__link:hover {
        background-color: ${theme.clrPinkDark};
        color: ${theme.clrWhiteDark};
        transform: scale(1.2);
    }

    .works__link-group {
        display: flex;
        flex-direction: row;

        a {
            margin: 10px;
        }
    }

    .works__title {
        font-size: 1.5rem;
        color: ${theme.clrWhiteDark};
        font-weight: 600;
    }

    .works__description {
        font-size: 1.1rem;
        letter-spacing: 1.4px;
        color: ${theme.clrWhiteDark};
        padding: 1rem;
        font-weight: 500;
        text-align: center;
    }

    .works__description-makes {
        margin: 15px 10px;

        span {
            background-color: ${theme.clrPrimary9};
            border-radius: .2rem;
            margin: 5px;
            padding: 5px;
            font-weight: 400;
            letter-spacing: 1px;
            color: ${theme.clrPinkDark};
        }
    }

    &:hover .works__data {
        bottom: 0;
    }
`

export default Projects
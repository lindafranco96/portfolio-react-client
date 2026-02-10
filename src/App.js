import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Section from './assets/styles/Section'

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />

        <Main>
          <Switch>
            <Route path="/about" component={AboutMe} />
            <Route path="/skills" component={Skills} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/" exact={true}>
              <Section primary>
                <Home />
              </Section>
              <Section >
                <AboutMe />
              </Section>
              <Section primary>
                <Skills />
              </Section>
              <Section>
                <Services />
              </Section>
              <Section primary>
                <Projects />
              </Section>
            </Route>
          </Switch>
        </Main>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

const MainContainer = styled.div`
  width: 100%;
`

const Main = styled.main`
  width: 100%;
`

export default App;
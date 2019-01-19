import React from 'react'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Blockquote from '../components/Quote'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

import { GlobalIconStyle } from '../../static/iconfont/iconfont'

export const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

export const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

export const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

export const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

export const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

export const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <GlobalIconStyle />
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Jimmy Xie.
        </BigTitle>
        <Subtitle>I'm currently a software engineer a fintech startup in New York.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Freiheit"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
          <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Jimmy Xie" />
          <AboutSub>
            <Blockquote
              quote='"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."'
              cite="A Wiseman Once Said"
            />
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          An enthusiastic software engineer, earger to learn and build web products with a focus on solving diverse and
          challenging data-driven problems. Interested in opportunities where can be challenged intellectually, and can
          apply core skills in an interdisciplinary setting. Currently working as a software developer at an fintech
          fintech firm, and going through a steep learning curve at the intersection of technology, engineering and
          finance.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say{' '}
            <a href="mailto:rxie25@gmail.com">
              Hi <span className="iconfont">&#xe628;</span>
            </a>{' '}
            or find me on other platforms:{' '}
            <a href="https://twitter.com/rxie25">
              <span className="iconfont">&#xe606;</span>
            </a>{' '}
            <a href="https://github.com/chickenPopcorn">
              <span className="iconfont">&#xe672;</span>
            </a>{' '}
            <a href="https://www.instagram.com/rxie2">
              <span className="iconfont">&#xe6a0;</span>
            </a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Site Made Using Gatsby <a href="https://www.gatsbyjs.org">Github Repository</a>. Made by{' '}
          <a href="https://github.com/chickenPopcorn">Jimmy Xie</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroContainer from "../components/herocontainer"
import Testimonials from "../components/testimonials"

const About = () => (
  <Layout>
    <SEO title="About me" />

    <HeroContainer> 
      headline

      lorem  

      button
    </HeroContainer>

    <Fade bottom>
      <h2 className="section_title"> Mission vision and values </h2>
    </Fade>
    
    <Fade bottom>
      <h2 className="section_title"> Services </h2>
    </Fade>

    4X squares

    <Fade bottom>
      <h2 className="section_title"> Testimonials </h2>
      <Testimonials/>
    </Fade>
  </Layout>
)

export default About

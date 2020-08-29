import React from "react"
import { Link,StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';



import Layout from "../components/layout"
import SEO from "../components/seo"

import Testimonials from "../components/testimonials.js"
import WorkWithMe from "../components/workwithme.js"


const About = () => (
  <Layout>
    <SEO title="About me" />

    <div className="aboutme row" >
      <div className="col-12 col-md-1 col-lg-4 px-0 pr-md-2 aboutme__image">
        <StaticQuery query={ graphql` 
          query { file(relativePath: { eq: "PROFILE ABOUT ME.png" }) { childImageSharp { fluid(maxWidth: 1000) { ...GatsbyImageSharpFluid } } } }
          `} render={data => ( <Img className="hero__background" fluid={data.file.childImageSharp.fluid} /> )}
        />

      </div>
      <div className="col-12 col-md-12 col-lg-8 aboutme__content">
        <h3 className="section_title my-5">   About Me   </h3>
        <p>  
          I am a Computer Systems Engineer working as a Freelancer since 2018. I've been working remotely with small businesses around the US, Europe, and South America.
        </p>  
        <p>  
          Since I remember I always liked using computers playing videogames, drawing things, and assembling Legos. Eventually, I started to install mods on my videogames and even tweaking bits on a notepad. But it was at college where everything changed, I went to a coding course, and since then there have been very few days where I don't do any code because I love it! 
        </p>  
        <p>  
          Creating solutions to problems, even if they are small things became an infinite source of logical but fun puzzles, and I always love a practical case for the code I develop. I ended up graduating and acquiring my degree in Computer Systems engineering with a profile oriented to analysis, development, and implementation of web systems
        </p>  
        <p>  
          Another wish of mine and what drives me forward is that I currently live in Venezuelan and local job offers aren't really fulfilling, so I turned online. Hundred of opportunities appeared and I had to learn how to manage my own time and projects, learn about digital marketing, branding, customer service, and how to sell myself. Before I even realized I was not only a software developer but a businessman; the strategist, the designer, and the developer. 
        </p>  
        <p>  
          My favorites technologies are WordPress, Laravel, and its JS cousin Adonis; Gatsby; React and Vue (both do the same but I love them).
        </p>  
        <p>  
          When I'm not developing and building things, you can find me on Youtube learning, training at the gym, learning languages, watching anime, playing videogames, or worldbuilding.
        </p>  
        <p>  
          I'm available for remote full/part-time jobs or contracts. Just Email me at <a href="mailto:samuelrivera64@gmail.com">samuelrivera64@gmail.com</a> or <Link to="/contact/"> click here to go to the contact form </Link>
        </p>  
      </div>
  	</div>
    
    <Fade bottom>
      <Testimonials />
    </Fade>

    <div className="separator" />
    
    <WorkWithMe />
    
  </Layout>
)

export default About

import React from "react"
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroContainer from "../components/herocontainer"
import Hero from "../components/hero"
import Services from "../components/services"
import WhyUs from "../components/whyus"
import Workflow from "../components/workflow"
import PortfolioMinor from "../components/portfoliominor"
import BlogMinor from "../components/blogminor"
import Testimonials from "../components/testimonials"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <HeroContainer> 
      <Hero />
      <Services />
    </HeroContainer>

    <Fade bottom>
      <h2 className="section_title"> Why Us - 4 Reasons why </h2>
      <WhyUs />
    </Fade>

    <div className="separator" />

    <Fade bottom>
      <h2 className="section_title"> Our Workflow </h2>
      <Workflow />
    </Fade>

    <div className="separator" />

    <Fade bottom>
      <h2 className="section_title"> Our Portfolio </h2>
      <PortfolioMinor portfolios={data.portfolios.edges}/>
    </Fade>

    <div className="separator" />

    <Fade bottom>
      <h2 className="section_title"> Check our blog </h2>
      <BlogMinor posts={data.portfolios.edges}/>
    </Fade>

    <div className="separator" />

    <Fade bottom>
      <h2 className="section_title"> Testimonials </h2>
      <Testimonials/>
    </Fade>
    
  </Layout>
)
export const query = graphql`
  query Homepage {
    portfolios: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "portfolio"}}},
      limit: 2
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

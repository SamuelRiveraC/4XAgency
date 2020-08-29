import React from "react"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import Testimonials from "../components/testimonials.js"
import WorkWithMe from "../components/workwithme.js"

const PortfolioPage = ({data}) => (
  <Layout>
    <SEO title="Portfolio" />
    <h2 className="section_title">
      My Work        
    </h2>

    <Portfolio portfolios={data.allMarkdownRemark.edges}/>
    
    <Fade bottom>
      <Testimonials />
    </Fade>

    <div className="separator" />
    
    <Fade bottom>
      <WorkWithMe />
    </Fade>


  </Layout>
)
export default PortfolioPage

export const portfolioQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "portfolio"}}}
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
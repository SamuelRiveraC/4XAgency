import React from "react"
import { graphql } from 'gatsby'

import Fade from 'react-reveal/Fade';


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import WorkWithMe from "../components/workwithme"
import WhatIDo from "../components/whatido"



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <Hero />

    <Fade bottom>
      <h2 className="section_title">
        What I do          
      </h2>
      <WhatIDo />
    </Fade>

    <div className="separator" />

    <Fade bottom>
      <h2 className="section_title">
        My Work        
      </h2>
      <Portfolio portfolios={data.portfolios.edges}/>
    </Fade>

    <div className="separator" />


    <WorkWithMe />

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

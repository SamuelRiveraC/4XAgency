import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkWithMe from "../components/workwithme"

const PortfolioPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      
      <article className="container p-0 portfolio_article">
        <div className="row justify-content-center">

          <div className="col-12">
            <h1 className="section_title my-5">
              {post.frontmatter.title}
            </h1>
          </div>

          <div className="col-12 col-md-4">
            <div className="row">

              {post.frontmatter.role !== "" && <div className="col-12">
                <p><b> My Role </b></p>
                <p>{post.frontmatter.role}</p>
              </div>}

              {post.frontmatter.client !== "" && <div className="col-12">
                <p><b> The Client </b></p>
                <p>{post.frontmatter.client}</p>
              </div>}

              {post.frontmatter.dateProject !== "" && <div className="col-12">
                <p><b> Date </b></p>
                <p>{post.frontmatter.dateProject}</p>
              </div>}

              {post.frontmatter.location !== "" && <div className="col-12">
                <p><b> Location </b></p>
                <p>{post.frontmatter.location}</p>
              </div>}

              {post.frontmatter.website !== "" && <div className="col-12">
                <p><b><a href={post.frontmatter.website}> See it live </a></b></p>
              </div>}

              {post.frontmatter.repository !== "" && <div className="col-12">
                <p><b><a href={post.frontmatter.repository}> Check the repository </a></b></p>
              </div>}

            </div>
          </div>

          {post.frontmatter.description !== "" && <div className="col-12 col-md-8">
            <section dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />
          </div> }

          {post.html !== "" && <div className="col-12 col-md-12 mt-3 text-center ">
            <section className="portfolio_container" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div> }


          {post.frontmatter.testimonial !== "" && <div className="col-12 col-md-12 mt-3 text-center">
            <h6>Client testimonial</h6>
            <section dangerouslySetInnerHTML={{ __html: post.frontmatter.testimonial }} />
            <small><b> {post.frontmatter.testimonialAuthor} </b></small> <br /> 
            <small>{post.frontmatter.testimonialRole}</small>  
          </div> }

        </div>

        <hr />

      </article>

      

      {(previous || next) && <div className="container mt-5"> 
        <div className="row">
          <div className="col-12 text-center">
            <h4>Check more projects</h4>
          </div>
          <div className="col-12 mt-3 text-center">
            {previous && (
              <Link className="btn mx-3" to={'portfolio/'+previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link className="btn mx-3" to={'portfolio/'+next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </div>
      </div> }
      
      <div className="separator" />

      <WorkWithMe />

    </Layout>
  )
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        description
        posttype
        role
        client
        dateProject
        location
        website
        repository
        testimonial
        testimonialAuthor
        testimonialRole
      }
    }
  }
`
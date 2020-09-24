const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/post.js`)
  const portfolioPost = path.resolve(`./src/templates/portfolio.js`)

  ///////////////////////////////////////////////////////////////////////////////

  let resultPost = await graphql( ` {
    allMarkdownRemark(
      limit: 1000,
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "post"}}}
    ) {
      edges {
        node {
          fields {
            slug
            category
            tags
          }
          frontmatter {
            title
          }
        }
      }
    }
  } ` )
  if (resultPost.errors) {
    throw resultPost.errors
  }
  let posts = resultPost.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/${post.node.fields.category}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  ///////////////////////////////////////////////////////////////////////////////

  let resultPortfolio = await graphql( ` {
    allMarkdownRemark(
      limit: 1000,
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "portfolio"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  } ` )
  if (resultPortfolio.errors) {
    throw resultPortfolio.errors
  }
  let portfolio = resultPortfolio.data.allMarkdownRemark.edges
  portfolio.forEach((post, index) => {
    const previous = index === portfolio.length - 1 ? null : portfolio[index + 1].node
    const next = index === 0 ? null : portfolio[index - 1].node
    createPage({
      path: `/portfolio${post.node.fields.slug}`,
      component: portfolioPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}




exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}